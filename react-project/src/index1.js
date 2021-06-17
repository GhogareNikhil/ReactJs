import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }

    // componentDidMount
    // most common use case: starting AJAX calls to load data for your component
    // can call setState
    componentDidMount() {
      fetch('http://swapi.co/api/people/')
      // .then(function(response) {
      //   return response.json()
      // })
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          items: responseData.results
        });
      })
      .catch(error => {
        console.log('Fetching and parsing data error', error);
      });
    }

    render() {
      let items = this.state.items;
      console.log(items);
      return(
        <div>
          {items.map(function(item) {
            return <h4 key={item.name}>{item.name} has an eye color of {item.eye_color}</h4>
          })}
        </div>
      );
    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById("root")
  );