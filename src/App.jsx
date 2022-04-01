import './App.css';
import Header from './components/Header'
import Pets from './components/Pets'
import Cuidadores from './components/Cuidadores'

function App() {
  return (
    <div className="App">
      <Header />
      <Pets />
      <Cuidadores />
    </div>
  );
}

export default App;
