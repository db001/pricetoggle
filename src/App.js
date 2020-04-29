import React from 'react';
import CardContainer from './components/CardContainer';
import Toggle from './components/Toggle'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monthly: true
    };
  }

  changePaymentType = () => {
    this.setState({
      monthly: !this.state.monthly
    });
  }

  render() {
    return (
      <div>
        <Toggle changePaymentType={this.changePaymentType} />
        <CardContainer monthly={this.state.monthly} />
      </div>
    )
  }
}

export default App;
