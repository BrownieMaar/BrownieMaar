import './App.css';
import Platforms from './Components/Platforms';
import Skills from './Components/Skills';
import Welcome from './Components/Welcome';

function App() {

  

  return (
    <div className="App" id='App'>
      <Welcome />
      <Skills />
      <Platforms />
      <div className='card'>
        <h1>Thanks for checking me out!</h1>
      </div>
    </div>
  )
}

export default App
