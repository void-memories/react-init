import "./App.css";
import Loader from "./presentation/components/loader/loader";
import Routes from "./presentation/routes/routes";
import { useSelector } from "react-redux";
import SmoothScroll from "./presentation/components/scroller/smoothScroll";

function App() {
  const isLoading = useSelector((state) => state.loaderReducer.isLoading);
  return (
    <div className="App">
      {/* <SmoothScroll /> */}
      {isLoading && <Loader></Loader>}
      <Routes></Routes>
    </div>
  );
}

export default App;
