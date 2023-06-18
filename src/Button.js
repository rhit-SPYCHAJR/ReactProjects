import React from "react";

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    buttonClicked(){
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.buttonClicked()}>
            Click me
          </button>
        </div>
      );
    }
}

export default function hi(){
    return (
        <div>
            <Example/>
        </div>
    )
}
