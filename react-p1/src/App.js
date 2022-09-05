import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';

function App() {

  const name = "Maria"
  return (
    <div className="App">
      <SayMyName name = "Arthur"/>
      <SayMyName name = "Jhon"/>
      <SayMyName name = {name}/>
      <Person name="Arthur" age="22" job="software dev" photo="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
