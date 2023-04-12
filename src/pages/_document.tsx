import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <App {...props} />
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <script>window.yaContextCb=window.yaContextCb||[]</script>
          <script src="https://yandex.ru/ads/system/context.js" async></script>

        </Head>

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
            page_path: window.location.pathname,
          });
          `}
        </Script>
        <body>
          <Main />
          <NextScript />
          <Script strategy='lazyOnload'>
            {`
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                  ym(88894818, "init", {
                        defer: true,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                });
              `}
          </Script>
          <noscript><div><img src="https://mc.yandex.ru/watch/88894818" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
        </body>
      </Html>
    )
  }
}
