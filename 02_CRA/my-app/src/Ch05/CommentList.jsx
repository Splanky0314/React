import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name: "Daeun Kim",
        comment: "Hello, I'm Daeun Kim",
    },
    {
        name: "Somebody1",
        comment: "React GOOOD",
    },
    {
        name: "Somebody2",
        comment: "I am hungry",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;