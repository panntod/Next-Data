import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cegah refetch saat fokus window kembali (UX lebih halus)
      refetchOnWindowFocus: false,

      // Optimalkan pengalaman offline-first
      networkMode: 'offlineFirst',

      // Cegah retry berulang untuk error yang diprediksi (ex: 404)
      retry: (failureCount, error: unknown) => {
        // contoh: hanya retry jika bukan 404
        if ((error as { status?: number })?.status === 404) return false
        return failureCount < 2
      },

      // Tambahkan waktu cache agar tidak refetch setiap kali
      staleTime: 1000 * 60 * 5 // 5 menit
    },
    mutations: {
      networkMode: 'offlineFirst',
      // Optional: tambahkan retry limit
      retry: false
    }
  }
})
