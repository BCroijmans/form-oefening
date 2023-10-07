import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  const [quote, setQuote] = useState("");

  const [name, setName] = useState("");

  const addQuote = (event) => {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Add the current quote and name to the collection of quotes
    setQuotes([...quotes, { quote, name }]);

    // Clear the current quote and name
    setQuote("");
    setName("");
  };

  return (
    <div className="App">
      <h1>Our beautiful form will be here:</h1>
      <form id="form" onSubmit={addQuote}>
        <input
          id="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          id="textArea"
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
        />
        <button type="submit">Add Quote</button>
      </form>
      <h1>Quotes:</h1>
      {quotes.map((quoteItem, index) => (
        <div className="quote" key={index}>
          <p> {quoteItem.quote}</p>- <span>{quoteItem.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
