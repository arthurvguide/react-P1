import './App.css';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import Paragraph from './components/Paragraph';
import List from './components/List';

function App() {

  const name = "Maria"
  return (
    <div className="App">
      <SayMyName name = "Arthur"/>
      <SayMyName name = "Jhon"/>
      <SayMyName name = {name}/>
      <Person name="Arthur" age="22" job="software dev" photo="https://via.placeholder.com/150"/>
      <Paragraph/>
      <List/>
    </div>
  );
}

export default App;
