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

let arr1 = [100, 200, 300, 400, 500];
let result1 = Array.isArray(arr1);
console.log(result1);

let arr2 = [100, 200, 300, 400, 500];
let arr3 = [600, 700, 800, 900, 1000];
let result2 = arr2.concat(arr3);
console.log(result2);

let arr4 = [100, 200, 300, 400, -500];
let result3 = arr4.some(checknumber);
console.log(result3);

function checknumber(number){
  return number > 0;
}

let arr5 = ["Hii", "Hellow", "Hey", "Hello",];
let result4 = arr5.toString(arr5);
console.log(result4);


let arr6 = [100, 200, 300, 400, 500];
arr6.shift();
console.log(arr6);


let arr7 = [100, 200, 300, 400, 500];
arr7.unshift(600, 700);
console.log(arr7);


let arr8 = [100, 200, 300, 400, -500];
let result5 = arr8.find(checknegative);
console.log(result5);

function checknegative(number){
  return number < 0;
}

let arr9 = [100, 200, 300, 400, 500, 600];
arr9.splice(2,3);
console.log(arr9);


let arr10 = [100, 200, 300, 400, 500, 600];
arr10.push(700, 800);
console.log(arr10);

let arr11 = [100, 200, 300, 400, 500, 600];
arr11.pop();
console.log(arr11);

let arr12 = [100, 200, 300, 400, -500];
let result6 = arr12.map(checknegative1);
console.log(result6);

function checknegative1(number){
  return number < 0;
}

  let arr13 = [100, 200, 300, 400, -500];
  let result7 = arr13.map(checknegative2);
  console.log(result7);
  
  function checknegative2(number){
    return number < 0;
  }












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
