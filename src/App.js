import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./pages/Components/Footer";
import Detail from "./pages/Detail/Detail";
import Main from "./pages/Main/Main";
import "./styles/CustomCarousel.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:market" component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
