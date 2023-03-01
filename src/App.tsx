import './App.css';
import Welcome from './Components/welcome';
import Skills from './Components/Skills';

function App() {

  

  return (
    <div className="App" id='App'>
      <Welcome />
      <Skills />
      <div className='card yellow' id='platforms'>
        <h1>Here will be other platforms where you can check me out.</h1>
      </div>
      <div className='card'>
        <h1>foo</h1>
      </div>
    </div>
  )
}

export default App
