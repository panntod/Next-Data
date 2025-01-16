import Script from 'next/script'

const GoogleAnalytics = () => {
  const trackingId = process.env.APP_GA_ID

  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />

      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `
        }}
      />
    </>
  )
}

export default GoogleAnalytics
