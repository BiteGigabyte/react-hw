import React, {useEffect, useState} from "react";

import Comment from "./Comment";
import CommentForm from "./Comment-form";
import "./Comments.css";
import { jsonServises } from "../../services/json-servises";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [commentIndex, setCommentIndex] = useState(0);
    const [numComments, setNumComments] = useState(5);

    useEffect(() => {
        jsonServises
            .getComments()
            .then((value) => value.data)
            .then((value) => setComments(value));
    }, []);


    const handleSubmit = (action) => {
        setShowComments(action !== false);
    };

    const handlePrevClick = () => {
        setCommentIndex(Math.max(0, commentIndex - numComments));
    };

    const handleNextClick = () => {
        setCommentIndex(Math.min(comments.length - numComments, commentIndex + numComments));
    };

    const handleNumCommentsChange = (event) => {
        setNumComments(parseInt(event.target.value, 10));
        setCommentIndex(0);
    };


    const displayedComments = showComments ? comments.slice(commentIndex, commentIndex + numComments) : [];

    return (
        <div className={"commentsDiv"}>
            {showComments && displayedComments.map((comment) => <Comment key={comment.id} comments={comment} />)}
            <CommentForm setComments={setComments}/>
            <div className={"commentsButtonDiv"}>
                <div className={"pagination"}>
                    <button className={"prevButton"} onClick={handlePrevClick} disabled={commentIndex === 0}>
                        Prev
                    </button>
                    <button className={"nextButton"} onClick={handleNextClick} disabled={commentIndex + numComments >= comments.length}>
                        Next
                    </button>
                </div>
                <div className={"numCommentsSelect"}>
                    <label htmlFor={"numCommentsSelect"}>Show</label>
                    <select id={"numCommentsSelect"} value={numComments} onChange={handleNumCommentsChange}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={500}>500</option>
                        <option value={100}>1000</option>
                        <option value={comments.length}>All</option>
                    </select>
                    <label htmlFor={"numCommentsSelect"}>comments</label>
                </div>
                <button className={"showButton"} onClick={() => handleSubmit(!showComments)}>
                    {showComments ? "Hide" : "Show"} Comments
                </button>
            </div>
        </div>
    );
};

export default Comments;




//
// import React, { useEffect, useState } from "react";
// import { jsonServises } from "../../services/json-servises";
//
// import Comment from "./Comment";
// import "./Comments.css";
// import CommentForm from "./Comment-form";
//
// const Comments = () => {
//     const [comments, setComments] = useState([]);
//     const [showComments, setShowComments] = useState(false);
//     const [commentIndex, setCommentIndex] = useState(0);
//     const [numComments, setNumComments] = useState(5);
//
//     useEffect(() => {
//         jsonServises
//             .getComments()
//             .then((value) => value.data)
//             .then((value) => setComments(value));
//     }, []);
//
//     const handleSubmit = (action) => {
//         setShowComments(action !== false);
//     };
//
//     const handlePrevClick = () => {
//         setCommentIndex(Math.max(0, commentIndex - numComments));
//     };
//
//     const handleNextClick = () => {
//         setCommentIndex(Math.min(comments.length - numComments, commentIndex + numComments));
//     };
//
//     const handleNumCommentsChange = (event) => {
//         setNumComments(parseInt(event.target.value, 10));
//         setCommentIndex(0);
//     };
//
//
//     const displayedComments = showComments ? comments.slice(commentIndex, commentIndex + numComments) : [];
//
//     return (
//         <div className={"commentsDiv"}>
//             {showComments && displayedComments.map((comment) => <Comment key={comment.id} comments={comment} />)}
//             <CommentForm setComments={setComments}/>
//             <div className={"commentsButtonDiv"}>
//                 <div className={"pagination"}>
//                     <button className={"prevButton"} onClick={handlePrevClick} disabled={commentIndex === 0}>
//                         Prev
//                     </button>
//                     <button className={"nextButton"} onClick={handleNextClick} disabled={commentIndex + numComments >= comments.length}>
//                         Next
//                     </button>
//                 </div>
//                 <div className={"numCommentsSelect"}>
//                     <label htmlFor={"numCommentsSelect"}>Show</label>
//                     <select id={"numCommentsSelect"} value={numComments} onChange={handleNumCommentsChange}>
//                         <option value={5}>5</option>
//                         <option value={10}>10</option>
//                         <option value={20}>20</option>
//                         <option value={comments.length}>All</option>
//                     </select>
//                     <label htmlFor={"numCommentsSelect"}>comments</label>
//                 </div>
//                 <button className={"showButton"} onClick={() => handleSubmit(!showComments)}>
//                     {showComments ? "Hide" : "Show"} Comments
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default Comments;




//
// import React, {useEffect, useRef, useState} from 'react';
// import {jsonServises} from "../../services/json-servises";
//
// import Comment from "./Comment";
// import './Comments.css';
// import CommentForm from "./Comment-form";
// // import CommentForm from "./Comment-form";
//
// const Comments = () => {
//
//     const [comments, setComments] = useState([]);
//     const [showComments, setShowComments] = useState(false);
//
//     useEffect(() => {
//         jsonServises.getComments().then(value => value.data).then(value => setComments(value));
//     }, [])
//
//     const handleSubmit = (action) => {
//         setShowComments(action !== false);
//     };
//
//
//     return (
//         <div className={'commentsDiv'}>
//             {
//                 showComments && comments.map((comment) => <Comment key={comment.id} comments={comment} />)
//             }
//             <CommentForm setComments={setComments} />
//             <div className={'commentsButtonDiv'}>
//             <button className={'showButton'}  onClick={() => handleSubmit(!showComments)}>
//                 {showComments ? 'Hide' : 'Show'} Comments
//             </button>
//             </div>
//         </div>
//     );
// };
//
// export default Comments;