import React from 'react';

function Salary(props) {
  
const emp =[
  {
    name: 'smit',
    age: 19,
    salary: 20000,
    bonus:2000,
    status: true
  },
  {
    name: 'smit',
    age: 19,
    salary: 20000,
    bonus:2000,
    status: true
  },
  {
    name: 'smit',
    age: 19,
    salary: 20000,
    bonus:2000,
    status: true
  },
  {
    name: 'smit',
    age: 19,
    salary: 20000,
    bonus:2000,
    status: true
  },
];

// destructure

let[name]=emp;
console.log(name);

console.log(emp.map((i) => {return i})); 


let em = emp.filter((e) => {return e.status >= true});
console.log(em);

let emans = em.reduce((acc, emp, i) => acc + emp.bonus + emp.salary, 0);
console.log(emans);

let eman = emp.reduce((acc, emp, i) => acc + emp.bonus + emp.salary, 0);
console.log(eman);
     
    return (
    <>
        <h4>Employee Data</h4>
      <table border = "1">
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Total</th>
        </tr>
        <tbody>
          {
            emp.map((emp,index) => {
              return(
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.bonus}</td>
                  {index === 0 ? <td rowspan = {emp.length = "5"} > {eman} </td> : null} 
                </tr>
              )
            })
          }
        </tbody>
      </table>

    <br></br>
        <h4>Employee Data-1</h4>
    <table border = "1">
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Total</th>
        </tr>
        <tbody>
          {
            em.map((emp,index) => {
              return(
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.bonus}</td>
                  {index === 0 ? <td rowspan = {emp.length = "5"} > {emans} </td> : null} 
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};
       
  
export default Salary;