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

  if (localStorage.getItem("start")==="true") {
    return(
      <div className='App'>
        <Resume />
      </div>
    )
  } else {
    return(
      <div className='App'>
        <StartScreen resume={false} />
      </div>
    )
  }
  
}

export default App;
