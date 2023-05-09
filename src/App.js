import './App.css';

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const App = () => {
  const name = "Peter";
  const age = 10;
  const friends = ["maya", "cookkoo"];

  return (
    <div>
      <Hello name = {name} age = {age}/>
      <p>{friends}</p>
    </div>
  );
}

export default App;
