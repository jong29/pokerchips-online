import './App.css';
import StartScreen from './components/StartScreen.component';
import Resume from './components/Resume.component';


const App = () => {
  for (var i = 0; i < localStorage.length; i++){
    let v = localStorage.key(i);
    console.log(v);
    console.log(localStorage.getItem(v));
  }

  if (localStorage.getItem("start")==="true") {
    return(
      <Resume />
    )
  } else {
    return(
      <StartScreen resume={false} />
    )
  }
  
}

export default App;
