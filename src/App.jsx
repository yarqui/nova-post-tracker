import { lazy, Suspense } from "react";
import axios from "axios";
import Loader from "./components/Loader/Loader";
const ActionBlock = lazy(() => import("./components/ActionBlock/ActionBlock"));
const History = lazy(() => import("./components/History/History"));

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <ActionBlock />
        <History />
      </Suspense>
    </div>
  );
};

export default App;
