import './App.css';
// import Posts from "./components/posts1/Posts";
// import SpaceLaunches from "./components/launches2/SpaceLaunches";
import Users from "./components/Users3/Users";

function App() {
  return (
    <div className="App">
        <h2>Task_1</h2>
        <br />
        <br />
      {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
      {/*відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
      {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}
        {/*  */}
        {/*<Posts />*/}
        {/*=====*/}


        <br />
        <br />
        <h2>Task_2</h2>
        <br />
        <br />
      {/*є API от SpaceX*/}
      {/*https://api.spacexdata.com/v3/launches/*/}
      {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
      {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}
          {/*  */}
        {/*<SpaceLaunches />*/}
          {/*=====*/}


        <br />
        <br />
        <h2>Task_3</h2>
        <br />
        <br />
      {/*#Advance*/}
      {/*вивести всіх юзерів з плайсхолдеру*/}
      {/*в кожного юзера має бути кнопка яка буде показувати пости цього юзера*/}
      {/*пости мають виводитись під компонетою Users (в App компоненті)*/}
        {/*  */}
          <Users />
        {/*  */}

    </div>
  );
}

export default App;
