/*

import useState from "react";

function MyButton() {
    const [count, setCount] = useState(" ");

    function handleClick(){
        if (count == "X") setCount("O");
        else setCount("X");
     }

    return (
      <button onClick={handleClick}>I'm a button, {count}</button>
    );
}

export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }

*/

import React from "react";

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
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
