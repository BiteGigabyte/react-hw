import './App.css';
import React, {useState} from "react";


import Comments from "./components/comments2/Comments";
import Cars from "./components/cars3/Cars";
import PagesHeader from "./header/PagesHeader";
import {PagesEnum} from "./header/pages-enum";
import Users from "./components/users1/Users";
// import UsersForm from "./components/users1/UsersForm";



// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
//     http://owu.linkpc.net/carsAPI/v1/doc
//         Реалізувати створення, видалення та оновлення машин


function App() {
    const [choice, setChoice] = useState(PagesEnum.COMMENTS);
  return (
    <div className="App">
        <PagesHeader setChoice={setChoice} />
        {choice === PagesEnum.USERS && <Users/>}
        {choice === PagesEnum.COMMENTS && <Comments/>}
        {choice === PagesEnum.CARS && <Cars/>}
      {/*<Users/>*/}
    </div>
  );
}

export default App;
