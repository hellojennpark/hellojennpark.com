import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route, A } from "@solidjs/router";

const Career = lazy(() => import("./components/Career"));
const Contact = lazy(() => import("./components/Contact"));

const App = (props) => (
  <>
    <nav>
      <A href="/users">Users</A>
      <A href="/">Home</A>
    </nav>
    <h1>My Site with lots of pages</h1>
    {props.children}
  </>
);

render(
  () => (
    <Router root={App}>
      <Route path="/users" component={Career} />
      <Route path="/" component={Contact} />
    </Router>
  ),
  document.getElementById("app")
);
