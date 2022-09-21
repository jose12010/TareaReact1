import { useState} from 'react'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from "./components/colors"

function App() {

  const randomIndex = array => Math.floor(Math.random()*array.length)

  const defaultElementQ = quotes[randomIndex(quotes)]
  const defaultElementC = colors[randomIndex(colors)]

  const [quote, setQuote] = useState(defaultElementQ)
  const [color, setColor] = useState(defaultElementC)
  
  const getQandC = () =>{
    setQuote(quotes[randomIndex(quotes)])
    setColor(colors[randomIndex(colors)])
    console.log("SI SE EJECUTA")
  } 
  


  return (
    <div className="App">
     <QuoteBox
      randomQuote = {quote?.quote}
      randomAuthor = {quote?.author}
      getQandC = {getQandC}
      Color = {color}
     />
    </div>
    
  )
}

export default App
