import React, { Component } from 'react';
import Comment from './Comment'

class TweeterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: []
         }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange=event=>{
        //this.setState({comment: event.target.value})

    };
    handleSubmit=event=>{
        event.preventDefault();
        if (this._imputElement.value !== ""){
            var newComment={
                text: this._imputElement.value,
                key: Date.now()
            };
            //this.setState({myComment:this._imputElement.value})
            this.setState((prevState)=>{
                return{
                    comments:prevState.comments.concat(newComment)
                };
            });

            this._imputElement.value="";
            console.log(this.state.comments)

        };
    }


    render() { 
        return ( 
        <div>
            <p>{this.props.greeting}</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Says:
                    <input type="text" name="name" onChange={this.handleChange} ref={(a)=> this._imputElement = a}/>
                </label>
                <button type="submit">Tweet that!</button>
            </form>
            <div>
                
                <Comment comments={this.state.comments}/>
                {/* <Comment myComment={this.state.myComment}/> */}

            </div>
            
        </div> );
    }
}
 
export default TweeterContainer;