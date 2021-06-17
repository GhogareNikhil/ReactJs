import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 //FriendLy Complex Component
 function FriendLy(props) {

  var malePeopleItem = props.people.filter(function(person) {
    return person.gender === 'male';
  }).map(function(person) {
    // assign styling to Friendly Component
    var friendlyStyle = {
      display: 'inline-block',
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    };
      // Return the exact same content but make sure JSX is rendering the right JavaScript object (person)
      return <div key={person.id} style={friendlyStyle}>
        <Avatar img={person.img}/>
        <UserName name={person.name}/>
        <GetConnected/>
      </div>
  });
  var femalePeopleItem = props.people.filter(function(person) {
    return person.gender === 'female';
  }).map(function(person) {
    // assign styling to Friendly Component
    var friendlyStyle = {
      display: 'inline-block',
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    };
      // Return the exact same content but make sure JSX is rendering the right JavaScript object (person)
      return <div key={person.id} style={friendlyStyle}>
        <Avatar img={person.img}/>
        <UserName name={person.name}/>
        <GetConnected/>
      </div>
  });

  return(
    <div>
      <h1>Males</h1>
      <div>{malePeopleItem}</div>
      <hr/>
      <h1>Females</h1>
      <div>{femalePeopleItem}</div>
    </div>
  );
}

// Avatar Component
function Avatar(props) {
  var avatarStyle = {
    marginLeft: 27,
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: "50%"
  }
  return(
    <img src={props.img} alt="profile pic" style={avatarStyle}/>
  );
}


// UserName Component
function UserName(props) {
  var nameStyle = {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 20
  }
  return(
    <h1 style={nameStyle}>{props.name}</h1>
  );
}

// GetConnected Complex Component
function GetConnected() {
  var getConnectedStyle = {
    marginLeft: 15
  }
  return(
    <div style={getConnectedStyle}>
      <Like/>
      <Share/>
      <Add/>
    </div>
  );
}

  var iconStyle = {
    margin: 20
  }

  // Like Component
  function Like() {
    return(
      <i className="fa fa-thumbs-o-up" aria-hidden="true" style={iconStyle}></i>
    );
  }

  // Share Component
  function Share() {
    return(
      <i className="fa fa-share" aria-hidden="true" style={iconStyle}></i>
    );
  }

  // Add Component
  function Add() {
    return(
      <i className="fa fa-users" aria-hidden="true" style={iconStyle}></i>
    );
  }


  //  pass people array to the FriendLy component

  var people = [{id: 0, name: "Rob", gender: "male", img: "https://images.pexels.com/photos/5145180/pexels-photo-5145180.jpeg?cs=srgb&dl=pexels-emre-keshavarz-5145180.jpg&fm=jpg"},
            {id: 1, name: "Charles", gender: "male", img:"https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg"},
            {id: 2,  name: "Natalie", gender: "female", img: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg"},
            {id: 3, name: "Jenny", gender: "female", img: "https://images.pexels.com/photos/6311385/pexels-photo-6311385.jpeg?cs=srgb&dl=pexels-monstera-6311385.jpg&fm=jpg"},
            {id: 4, name: "Sarah", gender: "female", img: "https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg"},
            {id: 5, name: "Josh", gender: "male", img: "https://images.pexels.com/photos/6727980/pexels-photo-6727980.jpeg?cs=srgb&dl=pexels-victoria-borodinova-6727980.jpg&fm=jpg"},
            {id: 6, name: "Kenny", gender: "male", img: "https://images.pexels.com/photos/4969919/pexels-photo-4969919.jpeg?cs=srgb&dl=pexels-maria-orlova-4969919.jpg&fm=jpg"},
            {id: 7, name: "John", gender: "male", img: "https://static.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg"},
            {id: 8, name: "Alisha", gender: "female", img: "https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg"}
            ];

ReactDOM.render(
  <FriendLy
      people={people}
    />,
  document.getElementById("root")
);



