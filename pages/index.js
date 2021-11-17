import Layout from "../components/layout"
import Calc from "../components/calc"

export default function Home() {
  return (
    <div>
      <Layout header="JavaScript Calculator" title="js-calc" footer="&copy; Keito-Yamada.">
        <Calc />
      </Layout>
    </div>
  )
}
