import './App.css';
import StartScreen from './components/StartScreen.component';
import Resume from './components/Resume.component';


const App = () => {
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
