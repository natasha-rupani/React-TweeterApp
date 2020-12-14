import React, { Component } from 'react';
import Timer from './Timer';
import LikeButton from './LikeButton'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: []
         }
    }
    createComments(comment) {
        return (
        <li key={comment.key}><Timer/> {comment.text} <LikeButton/>
                </li> 
              
                )
    }

    render() { 
        var commentEntries=this.props.comments;
        var listItems= commentEntries.map(this.createComments);
        return ( 
            <ul>
                {listItems}
            </ul>
         );
    }
}
 
export default Comment;