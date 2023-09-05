import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../actions";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
    console.log("dispatched");
  }, [dispatch]);

  const pageBackgroundStyles = {
    backgroundImage: 'url("images/background/galaxy.jpg")',
    color: "white",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const quoteBoxStyles = {
    // div styles:
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    height: "400px",
    width: "60%",
    minWidth: "300px",
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    padding: "40px",
  };

  const buttonStyles = {
    backgroundColor: "#ac7dff",
    color: "black",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    marginTop: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const twitterLinkStyles = {
    color: "lightblue",
    marginRight: "30px",
  };

  const textAndAuthorStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  };

  return (
    <div style={pageBackgroundStyles} className="page-background">
      <div style={quoteBoxStyles} className="quote-box">
        <div style={textAndAuthorStyles} class="text-and-author">
          <h1 id="text">{quote.text}</h1>
          <h3 id="author">{quote.author}</h3>
        </div>
        <div className="button-and-link">
          <a
            style={twitterLinkStyles}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet deze quote!
          </a>
          <button
            id="new-quote"
            onClick={() => dispatch(fetchRandomQuote())}
            style={buttonStyles}
          >
            Nieuwe Quote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
