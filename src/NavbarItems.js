import React from "react";
import { data } from "./Data";
import Child from "./Child";

export default class NavbarItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: 0,
    };
  }
  onclick = (id) => {
    this.setState({ show: true, id: id });
  };
  render() {
    return (
      <>
        {data.map((i, key) => {
          return (
            <div key={i.id} onClick={() => this.onclick(i.id)}>
              <h3>{i.name}</h3>
            {i.id === this.state.id && this.state.show && <Child data={data} id={this.state.id} />}

            </div>
          );
        })}
      </>
    );
  }
}
