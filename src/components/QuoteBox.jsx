import React from "react"

const QuoteBox = ({randomQuote, randomAuthor, getQandC, Color}) => {
    

    return(
        <div className="main" style={{backgroundColor: Color}}>
            <div className="content" >
                <div className="quote">
                    <h1 style={{color: Color}}>{randomQuote}</h1>
                </div>
                <div className="author">
                    <h1 style={{color: Color}}>{randomAuthor}</h1>
                </div>
                <div className="button_box">
                    <button style={{backgroundColor: Color}} className="button" onClick={getQandC}>Next</button>
                </div>
                
            </div>
        </div>
    )
}

export default QuoteBox