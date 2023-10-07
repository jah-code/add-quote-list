import React, { Suspense } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuote from "./components/pages/AllQuote";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./components/pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./components/pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQuote />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
