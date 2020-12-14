
import React from 'react';
import TweeterContainer from './TweeterContainer';

class App extends React.Component {
  render() {
    return (
      <>
        <TweeterContainer greeting="First Tweety bird"/>
        <TweeterContainer greeting="Second Tweety bird"/>
        <TweeterContainer greeting="Third Tweety bird"/>
      </>
      
    );
  }
  
}

export default App;
