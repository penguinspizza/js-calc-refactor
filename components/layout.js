import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@butanokeiton" />
        <meta name="twitter:creator" content="@butanokeiton" />
        <meta property="og:url" content="https://penguinspizza.github.io/js-calc/" />
        <meta property="og:title" content="JavaScript Calculator v1.1.0" />
        <meta property="og:description" content="JavaScriptでコードを書くように計算式を実行できます。" />
        <meta property="og:image" content="https://raw.githubusercontent.com/penguinspizza/js-calc/main/favicon.ico" />
        <meta name="description" content="JavaScriptでコードを書くように計算式を実行できます。" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
      </Head>
      <Header header={props.header} />
      <div className="container">
        {props.children}
      </div>
      <Footer footer={props.footer} />
    </div>
  )
}