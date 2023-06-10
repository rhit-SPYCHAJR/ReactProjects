import React from "react";

class Car extends React.Component {
    render() {
      return (<div>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"/>
                <div style={{textAlign:"center", fontSize: 80}}>Vroom!</div>
              </div>
      )
    }
}

export default function hi(){
    return (
        <div>
           <Car/>
        </div>
    )
}
