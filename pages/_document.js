import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      <link rel="stylesheet" href="assets/css/vendor.css"/>
    <link rel="stylesheet" href="assets/css/style.css"/>
    <link rel="stylesheet" href="assets/css/responsive.css"/>



        </Head>
      <body>
        <Main />
        <NextScript />
        <script src="assets/js/vendor.js" async></script>
    
    <script src="assets/js/main.js" async></script>


      </body>
    </Html>
  )
}
