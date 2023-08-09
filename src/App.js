import './App.css';
import StartScreen from './components/StartScreen.component';
import Resume from './components/Resume.component';
import './App.css';


const App = () => {
  for (var i = 0; i < localStorage.length; i++){
    let v = localStorage.key(i);
    console.log(v);
    console.log(localStorage.getItem(v));
  }

  return (
    <div className='App'>
      <h1 className='title'>Online Poker Chips!</h1>
      {localStorage.getItem("start")==="true" ? <Resume /> : <StartScreen resume={false} />}
    </div>
  )

}

export default App;
