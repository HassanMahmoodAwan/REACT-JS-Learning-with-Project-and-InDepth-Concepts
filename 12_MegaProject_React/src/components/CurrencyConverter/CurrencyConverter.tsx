import  {useState} from 'react'

import CurrencyBox from "./componentCurrency/CurrencyBox"

function CurrencyConverter() {
   const [amount, setAmount]= useState(0)
   const [fromCurrency, setFromCurrency]= useState("usd")
   const [toCurrency, settoCurrency]= useState("pkr")
   const [convertedAmount, setConvertAmount] = useState(0)

   function useAmountConversion(){
    const currencyHashMap = {
      "usd-pkr": 286,
      "cad-pkr": 210,
      "cad-usd": 1.3
    }
    if (fromCurrency == "usd" && toCurrency == "pkr"){
     setConvertAmount( amount * currencyHashMap["usd-pkr"])
    }
    else if (fromCurrency == "cad" && toCurrency == "pkr"){
      setConvertAmount( amount * currencyHashMap["cad-pkr"])
    }
    else {
      setConvertAmount( amount * currencyHashMap["cad-usd"])
    }
   }

   console.log(toCurrency);
   

  return (
    <div className="h-[400px] bg-slate-950 text-slate-100 grid place-content-center">
        <h1 className="mb-10 text-4xl font-bold">Currency Converter APP</h1>

        <div className="h-auto max-w-md text-center px-8 py-5 bg-slate-800 rounded-md shadow-xl shadow-gray-900">
          <CurrencyBox 
          label={"From: "} margin_class={"mb-0"} position={'top-1'} 
          placeHold = {"Enter Amount"} readOnly = {false}
          amount={amount}
          onAmountChange = {(amount)=>{setAmount(amount)}}
          onfromChange = {(from)=>{setFromCurrency(from)}}
          onToChange = {undefined}
           />

          <div id="SWAP">
            <button className="px-5 py-2 bg-blue-700 rounded relative bottom-0 z-10">SWAP</button>
          </div>

          <CurrencyBox 
          label={"To: "} margin_class={"mt-0"} position={'bottom-1'} placeHold={"Amount"} readOnly={true}
          amount={convertedAmount} 
          onAmountChange={undefined}
          onfromChange={undefined}
          onToChange={(to)=>{settoCurrency(to)}}          
          />

          <div id="ConvertBtn">
            <button
            className="mt-4 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded"
            onClick={useAmountConversion}>Convert Amount</button>
          </div>
        </div>

    </div>
  )
}

export default CurrencyConverter
