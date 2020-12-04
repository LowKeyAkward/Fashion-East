import { useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import './App.css';
import Layout from "./layouts/Layout"
import Login from "./screens/Login"
import {loginUser} from "./services/auth"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history =  useHistory()

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push("/")
  }

  return (
    <div className="App">
      <Layout>
        <Switch>

          <Route path="/home">
            {/* Home */}
          </Route>

          <Route path="/login">
            <Login handleLogin={handleLogin}/>
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
