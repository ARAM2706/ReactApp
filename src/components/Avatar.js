import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props){
    return(
      <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
          />
    );
  }
  
  function UserInfo(props){
    return(
      <div className="UserInfo">
          <Avatar user={props.user} />
           <div className="UserInfo-name">
            {props.user.name}
          </div>
      </div>
    );
  }
  
  function Comment(props) {
    return (
      <div className="container-fluid">
        <h2>Avatar</h2>
        <UserInfo user={props.author}  />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date }
        </div>
      </div>
    );
  }

  const comment = {
    date: "11/11/2022",
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  
 class AvatarClass extends React.Component{

    
     render(){
         return(
            <Comment 
            date={comment.date}
            text={comment.text}
            author={comment.author}
            />
         );
     }
 }


export default AvatarClass;