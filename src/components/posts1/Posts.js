import {Component} from "react";
// import {commentService} from "../services/comment-service";
import {Post} from "./Post";
import {postService} from "../../services/post-service";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        console.log('constructor');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts:value}))
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts}