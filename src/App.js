import logo from './logo.svg';
import './App.css';

function App() {


  let arr =[10, 20, 30, 40, 50];
  arr.map((a, i) => console.log(a));

let hardik = () => {
  console.log("hardik vaghasiya react");
}
hardik();

// var b=10;
// {
//   var b=20;
// }
// console.log(b);


// let b=10;
// {
//   let b=b+10;
// }
// console.log(b);



// const b;
// b=20;
// console.log(b);









  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Ankit Sir.
        </a>
      </header>
    </div>
  );
}

export default App;
