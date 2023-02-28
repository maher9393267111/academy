import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
        <Script 
         type="text/javascript"
        src="assets/js/vendor.js" 
        strategy='beforeInteractive'
        ></Script>
    
    <Script
     type="text/javascript"
    src="assets/js/main.js" 
    strategy='beforeInteractive'
    ></Script>


      </body>
    </Html>
  )
}
