import {React, ReactDOM} from "react";

class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
}

export default function hi(){
    return (
        <div>
          <Car/>  
        </div>
    )
}
