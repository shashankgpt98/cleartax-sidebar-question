import React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: [],
      show: false,
      id: -1,
    };
  }
  isChild = (id) => {
    for (let i of this.props.data) {
      if (i.id === id) {
        this.setState({ child: i.child });
      }
    }
  };
  onclick = (id) => {
    this.setState({ show: true, id: id });
  };
  componentDidMount() {
    this.isChild(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.isChild(this.props.id);
    }
  }
  render() {
    return (
      <div style={{ marginLeft: "50px" }}>
        {this.state.child &&
          this.state.child.map((i, key) => {
            return (
              <div
                style={{ marginLeft: "10px" }}
                key={i.id}
                onClick={() => this.onclick(i.id)}
              >
                <h3>{i.name}</h3>
              </div>
            );
          })}
        {this.state.show && (
          <Child data={this.state.child} id={this.state.id} />
        )}
      </div>
    );
  }
}
