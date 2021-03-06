import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./components/header.css"
import "./components/layout.css"
import Wiki from "./wiki"
import WebComponents from "./pages/webcomponents/webcomponents"
import NestingExample from "./pages/wuhan"
import Animate from "./pages/animate/animation"



const routes = [
  {
    path: "/",
    exact: true,

    main: () => {
    <h2>主页啥都没aaa分支dev，先featur修改，再main分支修改.提交到远程后的本地feature</h2>;
    <p>测试BUG，本地暂存区</p>;
    <p>本地工作区</p>;
    <p>Bug调整完毕</p>
  }

  },
  { path: "/workings", main: () => <NestingExample></NestingExample> },
  { path: "/writings", main: () => <Animate /> },
  { path: "/wiki", main: () => <Wiki /> },
];

function App() {
  return (
    <Router>
      {/* <body> */}
      <div className="Header">
        <Link id="shouye" to="/">首页</Link>
        <div>
          <Link id="wiki" to="/wiki">IXD-wiki</Link>
          <Link id="workings" to="/workings">武汉肺炎疫情</Link>
          <Link id="writtings" to="/writings">动画</Link>
        </div>

      </div>
      <div className="section">
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
      {/* </body> */}
    </Router>
  );
}

export default App;
