import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://nepalcorona.info/api/v1/data/nepal')
    .then(res => res.json())
    .then(raj => {
      this.setState({
        isLoaded: true,
        items: raj,
      })
    });
    
  }

  render(){
    var {isLoaded, items} = this.state;
    console.log(this.state.items);
  
    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else{
      return (
      <div className="App">
        Corona Virus Tested Positive in Nepal: {items.tested_positive}
        Corona Virus Tested Negative in Nepal: {items.tested_negative}
 
      </div>
    );
    }
  }
 }

export default App;
