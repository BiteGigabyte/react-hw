import {Link, Route, Routes} from "react-router-dom";
import Home from "./component/home/Home";
import Layout from "./component/layout/Layout";
import About from "./component/about/About";
import Users from "./component/users/Users";
import Posts from "./component/posts/Posts";
import UserDetails from "./component/user-details/UserDetails";
import PostDetails from "./component/post-details/PostDetails";

const App = () => {
    return (
        <div>

            <div>
                <h2>menu</h2>
                <ul>
                    <li>
                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/layout'}>layout</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>about</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h2>view</h2>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>} />

                        </Route>
                    </Route>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>


            </div>
        </div>
    );
};

export default App;
