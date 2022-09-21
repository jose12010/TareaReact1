import { useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from "./components/colors"

function App() {

  const randomIndexQ = Math.floor(Math.random()*quotes.length)
  const randomIndexC = Math.floor(Math.random()*colors.length)

  const [quote, setQuote] = useState(quotes[randomIndexQ])
  const [color, setColor] = useState(colors[randomIndexC])
  
  const getQandC = () =>{
    setQuote(quotes[randomIndexQ])
    setColor(colors[randomIndexC])
    console.log("SI SE EJECUTA")
  } 
  


  return (
    <div className="App">
     <QuoteBox
      randomQuote = {quote.quote}
      randomAuthor = {quote.author}
      getQandC = {getQandC}
      Color = {color}
     />
     
    </div>
  )
}

export default App
