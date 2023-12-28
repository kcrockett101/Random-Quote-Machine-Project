function App (){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState(""); 
    const [color, setColor] = React.useState("#fff")
    


    React.useEffect(() => {
        async function fetchData (){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

        const colors = [
            "#16a085",
            "#ff0000",
            "#f86347",
            "#00ff00",
            "#0000ff",
           " #35ff00",
            "#00ffff"
        ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randIndex])
            setColor(colors[randColorIndex])
    }


    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
<div id="quote-box" className="container pt-5">
        <div className="jumbotron">
            <div className="card">
                <div className="card-header">Inspirational Quotes</div>
                <div className="card-body">
                    {randomQuote ? (
                        <>
                        <h5 id="author" className="card-title">
  - {randomQuote.author
    ? randomQuote.author === "type.fit"
      ? "No Author"
      : randomQuote.author.replace(', type.fit', '')
    : "No Author"}
</h5>

                        <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>
                    ) : (
                        <h2>Loading</h2>
                    )}

                        <div className="row">
                            <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                            <a id="tweet-quote" href={
                                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(`"${randomQuote.text}" - ${randomQuote.author === "type.fit" ? "No Author" : randomQuote.author}`)
                             } className="btn btn-warning" target="_blank">
                                <i className="fab fa-twitter"></i>  
                                </a>                                                           
                        </div>

                </div>
            </div>
        
        </div>
</div> 
</div> 
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))