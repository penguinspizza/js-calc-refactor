import { useState } from "react"

export default function Calc(props) {
  const [formula, setFormula] = useState("")
  let defaultRows = 1
  const [rows, setRows] = useState(defaultRows)
  let result = ""
  let message = ""
  let showType = ""

  const doChange = (e) => {
    setFormula(e.target.value)
  }

  const changeRow = (e) => {
    setRows(e.target.value)
  }

  const selected = (value, key) => {
    if (value == defaultRows) {
      return <option key={key} selected>{value}</option>
    } else {
      return <option key={key}>{value}</option>
    }
  }

  try {
    let value = eval(formula)
    if (value == undefined) {
      result = "何も値が返されません"
      message = "入力エリアの最後に出力する変数または式を記述してください"
      showType = "warning"
    } else {
      result = value
      message = "正常に出力されました"
      showType = "primary"
    }
  } catch (e) {
    result = "エラーです"
    message = e.message
    showType = "danger"
  }

  let showCardBorderClass = "card border-" + showType + " mb-3"
  let showCardBodyClass = "card-body text-" + showType

  return (
    <div>
      <form>
        <div className="form-group">
          <div className="input-group mt-3 mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text">入力エリアの表示行数</span>
            </div>
            <select className="form-control" id="Select1" onChange={changeRow}>
              {[...Array(100)].map((_, i) => i + 1).map((value, key) => selected(value, key))}
            </select>
            <div className="input-group-append">
              <span className="input-group-text">行</span>
            </div>
          </div>
          <textarea className="form-control" id="textArea1" placeholder="JavaScript入力エリア" rows={rows} onChange={doChange}></textarea>
        </div>
      </form>

      <div className={showCardBorderClass}>
        <div className="card-header">出力</div>
        <div className={showCardBodyClass}>
          <h5 className="card-title">{result}</h5>
          <p className="card-text">{message}</p>
        </div>
      </div>
    </div>
  )
}