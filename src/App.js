  import {Navigate, Route, Routes} from "react-router-dom";

  import {MainLayout} from "./layout";
  import {CarPage, CommentPage, UserPage} from "./pages";
  import './App.css';

import {Users, Comments, Cars} from './components'

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
//     http://owu.linkpc.net/carsAPI/v1/doc
//         Реалізувати створення, видалення та оновлення машин


  const App = () => {
    return (
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'users'}/>}/>
            <Route path={'users'} element={<UserPage/>}/>
            <Route path={'comments'} element={<CommentPage/>}/>
            <Route path={'cars'} element={<CarPage/>}/>
          </Route>
        </Routes>
    );
  };




export default App;
