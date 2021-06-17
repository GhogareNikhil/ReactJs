import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import About from './components/about';

// ReactDOM.render(
//   <React.Fragment >
//   <h1>Netflix WebSeries</h1>,
//   <p>List Of Series</p>
//   <ol>
//       <li>Lucifer</li> 
//       <li>Friends</li>
//       <li>Dark</li> 
//       <li>Mr.Robot</li>
//   </ol>
//   </React.Fragment>
//   ,document.getElementById('root')
// );


                       // Template Literls

// const flname = "Nikhil ";
// const lname = "Ghogare";

// ReactDOM.render(
//     <h1>my name is {`${flname} ${lname}`}</h1>,

//     document.getElementById('root')
// );


                           //chalenge current date & time
// const flname = "Nikhil ";
// const curentDate = new Date().toLocaleDateString();
// const curentTime= new Date().toLocaleTimeString();


// ReactDOM.render(
//   <React.Fragment>
//     <h1>my name is {`${flname}`}</h1>,
//     <p> cureent Date is= {curentDate}</p>
//     <p> cureent Time is= {curentTime}</p>
//  </React.Fragment>  ,
//     document.getElementById('root')
// );


                            //jsx attribuute

// const flname = "Nikhil ";
// const image1= "https://picsum.photos/id/237/200/300";
// const image2= "https://picsum.photos/id/237/250/300";
// const image3= "https://picsum.photos/id/237/300/300";
// const links= "www.google translate.com";


// ReactDOM.render(
//   <React.Fragment>
//     <h1 contentEditable='true'>my name is {`${flname}`}</h1>,
//     <img src={image1} alt="Random image" />
//     <img src={image2} alt="Random image" />
//     <a href={links} target="_nikh">
//     <img src={image3} alt="Random image" />
//     </a>
//  </React.Fragment>  ,
//     document.getElementById('root')
// );

                 //Styling in css


// const flname = "Nikhil ";
// const image1= "https://picsum.photos/200/300";
// const image2= "https://picsum.photos/250/300";
// const image3= "https://picsum.photos/300/300";


// ReactDOM.render(
//   <React.Fragment>
//     <h1 className="heading">my name is {`${flname}`}</h1>,
//     <div className="image_div">
//     <img src={image1} alt="Random image"/>
//     <img src={image2} alt="Random image"/>
//     <img src={image3} alt="Random image"/>
//     </div>
//  </React.Fragment>  ,
//     document.getElementById('root')
// );
 
               //Inline CSS

// const heading ={
//    color:'#FFA500',
//    textTransform: 'capitalize', 
//    textAlign:'center',
//    fontWeight: 'bold',
//    textShadow: '0px 2px 4px #fa9191',
//    fontFamily: '"Roboto" ,sa ns-serif' ,

// };


// const flname = "Nikhil ";
// const image1= "https://picsum.photos/200/300";
// const image2= "https://picsum.photos/250/300";
// const image3= "https://picsum.photos/300/300";


// ReactDOM.render(
//   <React.Fragment>
//     <h1 style={heading }>my name is {`${flname}`}</h1>,
//     <div className="image_div">
//     <img src={image1} alt="Random image"/>
//     <img src={image2} alt="Random image"/>
//     <img src={image3} alt="Random image"/>
//     </div>
//     <Home/>
//     <HashRouter>
   
//       <Route exact path="/about" component={About}/>
//       <Route exact path="/" component={Home}/>

//     </HashRouter>
    
//  </React.Fragment>  ,
//     document.getElementById('root')
// );



// FriendLy Complex Component
// function FriendLy(props) {
//   // renamed props.people to people
//   var people = props.people;
//   // iterate through the array
//   // map creates a new array

//   var peopleItem = people.map(function(person) {
//     // assign styling to Friendly Component
//     var friendlyStyle = {
//       display: 'inline-block',
//       margin: 20,
//       height: 300,
//       width: 200,
//       padding: 0,
//       backgroundColor: "#FFF",
//       WebkitFilter: "drop-shadow(0px 0px 5px #555)",
//       filter: "drop-shadow(0px 0px 5px #555)"
//     };
//       // Return the exact same content but make sure JSX is rendering the right JavaScript object (person)
//       return <div style={friendlyStyle}>
//         <Avatar img={person.img}/>
//         <UserName name={person.name}/>
//         <GetConnected/>
//       </div>
//   });
//   return(
//     <div>{peopleItem}</div>
//   );
// }

// // Avatar Component
// function Avatar(props) {
//   var avatarStyle = {
//     marginLeft: 27,
//     marginTop: 20,
//     width: 150,
//     height: 150,
//     borderRadius: "50%"
//   }
//   return(
//     <img src={props.img} alt="profile pic" style={avatarStyle}/>
//   );
// }


// // UserName Component
// function UserName(props) {
//   var nameStyle = {
//     fontSize: 24,
//     textAlign: "center",
//     fontFamily: "Arial, Helvetica, sans-serif",
//     margin: 20
//   }
//   return(
//     <h1 style={nameStyle}>{props.name}</h1>
//   );
// }

// // GetConnected Complex Component
// function GetConnected() {
//   var getConnectedStyle = {
//     marginLeft: 15
//   }
//   return(
//     <div style={getConnectedStyle}>
//       <Like/>
//       <Share/>
//       <Add/>
//     </div>
//   );
// }

//   var iconStyle = {
//     margin: 20
//   }

//   // Like Component
//   function Like() {
//     return(
//       <i className="fa fa-thumbs-o-up" aria-hidden="true" style={iconStyle}></i>
//     );
//   }

//   // Share Component
//   function Share() {
//     return(
//       <i className="fa fa-share" aria-hidden="true" style={iconStyle}></i>
//     );
//   }

//   // Add Component
//   function Add() {
//     return(
//       <i className="fa fa-users" aria-hidden="true" style={iconStyle}></i>
//     );
//   }



//   // IMAGE URLS TAKE FROM PEXELS.COM
//   // BECAUSE THEIR FREE IMAGES CHANGE
//   // MAKE SURE THE URL'S ARE VALID
//   // BY TESTING THEM OUT IN YOUR BROWSER

//   // Challenge - pass people array to the FriendLy component

//   var people = [{name: "Rob", img: "https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo.jpg"},
//                 {name: "Charles", img:"https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg"},
//                 {name: "Natalie", img: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg"},
//                 {name: "Jenny", img: "https://static.pexels.com/photos/517061/pexels-photo-517061.jpeg"},
//                 {name: "Sarah", img: "https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg"},
//                 {name: "Josh", img: "https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg"},
//                 {name: "Kenny", img: "https://static.pexels.com/photos/325682/pexels-photo-325682.jpeg"},
//                 {name: "John", img: "https://static.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg"},
//                 {name: "Alisha", img: "https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg"}
//                 ];

// ReactDOM.render(
//   <FriendLy
//       people={people}
//     />,
//   document.getElementById("root")
// );


              //State in React


class GuessAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 'Guess My Age'
    };
  }
  onButtonClick() {
    this.setState({
      age: '37'
    });
  }
  render() {
    return(
      <div>
        <h1>Guessing Game</h1>
        <h2>{this.state.age}</h2>
        <button onClick={() => this.onButtonClick()}>reveal my age</button>
      </div>
    );
  }
}



ReactDOM.render(
  <GuessAge/>,
  document.getElementById("root")
);
//index.js -> App.js -> router -