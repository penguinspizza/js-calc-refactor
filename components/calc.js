import { useState } from "react"

export default function Calc(props) {
  const [formula, setFormula] = useState("")
  let result = ""
  let showType = ""

  const doChange = (e) => {
    setFormula(e.target.value)
  }

  try {
    let value = eval(formula)
    if (value == undefined) {
      result = "何も値が返されません"
      showType = "warning"
    } else {
      result = value
      showType = "primary"
    }
  } catch (e) {
    result = "エラー: " + e.message
    showType = "danger"
  }

  let showClass = "alert alert-" + showType

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="textArea1">javascript入力エリア</label>
          <textarea className="form-control" id="textArea1" rows="10" onChange={doChange}></textarea>
        </div>
      </form>
      <p>結果</p>
      <div className={showClass}>{result}</div>
    </div>
  )
}