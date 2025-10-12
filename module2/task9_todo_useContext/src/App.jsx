import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { ErrorBoundary } from "./ErrorBoundery";
import { InnerApp } from "./components/InnerApp/InnerApp";

const App = () => {
  return (
    <>
      {
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <InnerApp />
          </Suspense>
        </ErrorBoundary>
      }
    </>
  );
};

export default App;
