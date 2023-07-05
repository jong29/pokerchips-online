import './App.css';
import StartGame from './components/StartGame.component';
import Resume from './components/Resume.component';


const App = () => {
  if (localStorage.getItem("start")==="true") {
    return(
      <Resume />
    )
  } else {
    return(
      <StartGame resume={false} />
    )
  }
  
}

export default App;
