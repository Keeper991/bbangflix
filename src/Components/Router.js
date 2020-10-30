import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

const myRouter = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" exact component={Search} />
    <Redirect from="*" to="/" />
  </Router>
);

export default myRouter;
