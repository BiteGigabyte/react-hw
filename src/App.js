import './App.css';
import {Routes, Route, Link} from "react-router-dom";


import Todos from "./components/todos1/Todos";
import Albums from "./components/albums2/Albums";
import Comments from "./components/comments3/Comments";
import CommentDetails from "./components/comments3/CommentDetails";

// сделай еще небольшую правку в lesson4:
//
//     реалізувати 3 маршрути
// todos - при переході на який тягнуться всі t0do з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//   (++)при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.



function App() {
  return (
    <div className="App">
      <div>
        <h2>menu</h2>
        <div className={'menuDiv'}>
          <div className={'menuDivLink'}>
            <Link to={'/'}>Main page</Link>
          </div>
          <div className={'menuDivLink'}>
            <Link to={'/todos'}>todos</Link>
          </div>
          <div className={'menuDivLink'}>
            <Link to={'/albums'}>albums</Link>
          </div>
          <div className={'menuDivLink'}>
            <Link to={'/comments'}>comments</Link>
          </div>
        </div>
        <hr/>
      </div>

      <div>
        <h2>view</h2>
        <Routes>
          <Route path={'/todos'} element={<Todos/>}/>
          <Route path={'/albums'} element={<Albums/>}/>
            {/*<Route path={'users'} element={<Users/>}>*/}
            {/*  <Route path={':id'} element={<UserDetails/>}/>*/}
            {/*</Route>*/}
            {/*<Route path={'posts'} element={<Posts/>}>*/}
            {/*  <Route path={':id'} element={<PostDetails/>} />*/}

            {/*</Route>*/}
           {/*</Route>*/}
          <Route path={'/comments'} element={<Comments/>}>
          <Route path={'/comments/:id'} element={<CommentDetails/>}/>
          </Route>
        </Routes>


      </div>
    </div>
  );
}

export default App;
