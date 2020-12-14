import React, { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            likes:0
         }
         this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({likes:this.state.likes+1})
    };   

    render() { 
        return ( 
                <>
               <button type="submit" onClick={this.handleSubmit}>Like</button>
                <label>{this.state.likes} Likes</label>
                </>
            
         );
    }
}
 
export default LikeButton;