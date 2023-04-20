import './App.css';


import Users from "./components/users1/Users";
import UsersForm from "./components/users1/UsersForm";
import React from "react";



// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
//     http://owu.linkpc.net/carsAPI/v1/doc
//         Реалізувати створення, видалення та оновлення машин


function App() {
  return (
    <div className="App">
      <Users/>

    </div>
  );
}

export default App;
