import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
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