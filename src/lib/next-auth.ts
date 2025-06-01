import { type AuthOptions, getServerSession as nextAuthGetServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { findAdministrator } from '../query/administrator'
import { compareHash } from '../lib/encryption'
import type { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    administrator?: {
      id: number
      role: 'admin'
      name: string
      username: string
      email: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: number
    role: 'admin'
    name: string
    username: string
    email: string
  }
}

export const authOptions: AuthOptions = {
  theme: {
    colorScheme: 'light',
    brandColor: '#E04E4E'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Jane@gmail.com'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********'
        }
      },
      async authorize(credentials) {
        try {
          const administrator = await findAdministrator({ email: credentials?.email })
          if (!administrator?.password) return null

          const isPasswordCorrect = compareHash(credentials?.password as string, administrator.password)

          if (!isPasswordCorrect) return null

          

          const administratorPayload = {
            id: administrator.id.toString(),
            role: administrator.role,
            name: administrator.name,
            username: administrator.username,
            email: administrator.email
          }

          return administratorPayload
        } catch (e) {
          console.error('Authorization error:', e)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith('/') ? new URL(url, baseUrl).toString() : url
    },
    async signIn({ user: administrator }) {
      if (administrator.email) {
        const administratordb = await findAdministrator({ email: administrator.email })
        if (!administratordb) {
          return false
        }
      }

      return true
    },
    async jwt({ token, user: administrator }) {
      if (administrator?.email) {
        const administratordb = await findAdministrator({ email: administrator.email })
        if (administratordb) {
          token.id = administratordb.id
          token.role = 'admin'
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token.id && session.administrator) {
        const administratordb = await findAdministrator({ id: token.id })
        session.administrator.role = 'admin'
        session.administrator.name = administratordb?.name as string
        session.administrator.username = administratordb?.username as string
        session.administrator.email = administratordb?.email as string
        session.administrator.id = administratordb?.id as number
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

export const getServerSession = () => nextAuthGetServerSession(authOptions)
