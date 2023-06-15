import React from 'react';

function Button({ onClick }){
  return (
    <button onClick={onClick}>
      Click me!
    </button>
  );
}

function Listener({ count }){
  return (
    <div>
      Button has been clicked {count} times.
    </div>
  );
}

class Manager extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount(){
    this.setState({count: this.state.count+1});
  }

  render(){
    return (
      <div>
        <Button onClick={() => {this.incrementCount()}} />
        <Listener count={this.state.count} />
      </div>
    )
  }
}

export default function App(){
  return (
    <div>
      <Manager/>
    </div>
  )
  
}
