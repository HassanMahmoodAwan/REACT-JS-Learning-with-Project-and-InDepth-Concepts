import {useId, useState} from 'react'

function CurrencyBox({label, margin_class, position, placeHold, readOnly, amount, onAmountChange, onfromChange, onToChange}) {
    const inputBoxId = useId()
    const [selectCurrency, setSelectCurrency] = useState("usd")

    if (onfromChange){
        onfromChange(selectCurrency)
    }
    if (onToChange)
        onToChange(selectCurrency)

    console.log(amount);
    
    
    

  return (
    <div className={` w-full h-auto bg-white text-slate-900 rounded flex justify-between py-5 px-1 ${margin_class} relative ${position}`}>
      <div className="space-x-2">
        <label htmlFor={inputBoxId}>{label}</label>
        <input 
        type="text" id={inputBoxId} placeholder={placeHold}
        className="bg-gray-300 rounded"
        readOnly={readOnly}
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
      </div>

      <div id="Options">
        <select name="sd" id="dfsd" value={selectCurrency} title="sdfd"
        className="bg-gray-100 px-4"
        onChange={(e)=>{setSelectCurrency(e.target.value)}}>
            <option key="10" value={"usd"}>USD</option>
            <option key="11" value={"pkr"}>PKR</option>
            <option key="12" value={"cad"}>CAD</option>
        </select>
      </div>

    </div>
  )
}

export default CurrencyBox
