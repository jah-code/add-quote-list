import React, { Fragment, useEffect } from "react";
import { useParams, Link, Outlet, Route, Routes } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote) {
    return <h1 className="centered">No Quote Found</h1>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        id={loadedQuote.id}
        text={loadedQuote.text}
        author={loadedQuote.author}
      />
      <Routes>
        <Route
          path="/"
          element={
            //Route from this link has moved to App.js
            <div className="centered">
              <Link to="comments" className="btn--flat">
                Load Comments
              </Link>
            </div>
          }
        />
      </Routes>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
