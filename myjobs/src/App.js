import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Main from './Components/Main';

import Signin from './Components/SignIn';
import ForgotPass from './Components/ForgotPass';
import ResetPass from './Components/ResetPass';
import Jobpost from './Components/PostJob';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />

        <Switch>
          {/* <Form /> */}
          {/* <ForgotPass/> */}
          {/* <ResetPass/> */}
          {/* <Jobpost/> */}
          {/* <Signup/> */}
          <Route path="/login" exact component={Signin}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/forgot-pass" exact component={ForgotPass}/>
          <Route path="/reset-pass" exact component={ResetPass}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
