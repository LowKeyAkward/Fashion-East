import {Switch, Route} from "react-router-dom"

import './App.css';
import Layout from "./layouts/Layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>

          <Route path="/home">
            {/* Home */}
          </Route>

          <Route path="/login">
            {/* Login */}
          </Route>

          <Route path="/register">
            {/* Register */}
          </Route>

          <Route path = "/">
            {/* Post Detailed */}
          </Route>
          
        </Switch> 
     </Layout>
    </div>
  );
}

export default App;
