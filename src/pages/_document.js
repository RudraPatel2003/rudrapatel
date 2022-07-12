import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// this file is used to make styled-components work with this project
// this page prevents a flash of unstyled content upon page load
// i believe the flash is caused by styles taking a split second to be applied as they are a part of the React code
// the following code is pulled from the Next.js website under examples
// https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
}
