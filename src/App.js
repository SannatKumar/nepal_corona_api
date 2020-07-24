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

        <li>Corona Virus Tested Positive in Nepal: {items.tested_positive}</li>
        <li>Corona Virus Tested Negative in Nepal: {items.tested_negative}</li>
        <li>Total Total: {items.tested_total}</li>
        <li>Corona Virus in Isolation in Nepal: {items.quarantined}</li>
        <li>Corona Virus Quarantined In Nepal: {items.tested_rdt}</li>
        <li>Total tested RDT: {items.quarantined}</li>
        <li>Corona Virus Pending Result: {items.pending_result}</li>
        <li>Corona Virus Recovered: {items.recovered}</li>
        <li>Corona Virus Deaths: {items.deaths}</li>
 
      </div>
    );
    }
  }
 }

export default App;
