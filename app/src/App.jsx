import './App.css';
import Button from './components/button';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <div>
        <Button
          button1="Botão1"
          button2="Botão2"
        />
      </div>
      <Card />
    </div>
  );
}

export default App;
