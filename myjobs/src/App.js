
import './App.css';

import Navbar from './Components/Navbar';
import DarkUpperPart from './Components/IntroDark';
import LightLowerPart from './Components/IntroLight';

import Form from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <Form/>

      {/* <Navbar/>
      <DarkUpperPart/>
      <LightLowerPart/> */}
    </div>
  );
}

export default App;
