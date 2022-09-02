import './App.css';
import HelloWorld from './components/HelloWorld';
import Paragraph from './components/Paragraph';

function App() {

  const name = "Arthur"
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>My name is {newName}, this is my first app</p>
      <p> Sum: {sum(1,4)}</p>
      <HelloWorld/>
      <Paragraph/>
      <HelloWorld/>
      <Paragraph/>
    </div>
  );
}

export default App;
