import { Component } from "react";


import {commentsService} from "../../services/comments-service";
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            isVisible: true, // додали стан isVisible для відображення постів
        };
        console.log("constructor");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidMount() {
        commentsService
            .getAll()
            .then((value) => value.data)
            .then((value) => this.setState({ comments: value }));
        console.log("componentDidMount");
    }

    toggleVisibility = () => {
        this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
    }; // метод для зміни стану isVisible

    render() {
        console.log("render");
        const { isVisible, comments } = this.state; // деструктуризація для зручності
        return (
            <div>
                <button onClick={this.toggleVisibility}>
                    {isVisible ? "Hide" : "Show"}
                </button> {/* кнопка з методом toggleVisibility */}
                {isVisible && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
                {/* виводимо компонент Posts, якщо isVisible = true */}
            </div>
        );
    }
}

export { Comments };








// import {Component} from "react";
// // import {commentService} from "../services/comment-service";
// import {Post} from "./Post";
// import {postService} from "../../services/post-service";
//
// class Posts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//         }
//         console.log('constructor');
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('componentDidUpdate');
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }
//
//     componentDidMount() {
//         postService.getAll().then(value => value.data).then(value => this.setState({posts:value}))
//         console.log('componentDidMount');
//     }
//
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
//             </div>
//         )
//     }
// }
//
// export {Posts}