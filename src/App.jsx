import { lazy, Suspense } from "react";
import "./App.css";
const ActionBlock = lazy(() => import("./components/ActionBlock/ActionBlock"));
const History = lazy(() => import("./components/History/History"));

function App() {
  return (
    <div className="container">
      <Suspense fallback="Loading...">
        <ActionBlock />
        <History />
      </Suspense>
    </div>
  );
}

export default App;
