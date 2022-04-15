import React from "react";
import axios from "axios";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      inp: ""
    };

    // this.handlechange= this.handlechange.bind(this)
  }

  handlechange(e) {
    this.setState({
      inp: e.target.value
    });
  }

  handleadd() {
    const payload = {
      data: this.state.inp,
      status: false
    };

    axios
      .post("https://json-server-mocker-masai.herokuapp.com/tasks", payload)
      .then((res) => this.getdata());
  }

  getdata() {
    axios
      .get("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) =>
        this.setState(
          {
            todo: res.data
          },
          () => console.log(this.state)
        )
      );
  }

  handeldelete(id) {
    axios
      .delete(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`)
      .then(() => this.getdata());
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handlechange.bind(this)}
          placeholder="add todo"
        />

        {/* (e)=>{this.setState({inp:e.target.value})}  */}
        <button onClick={this.handleadd.bind(this)}>ADD</button>

        {this.state.todo.map((el) => (
          <>
            <h1>{el.data}</h1>
            <button onClick={this.handeldelete.bind(this, el.id)}>
              delete
            </button>
          </>
        ))}
      </div>
    );
  }
}

export { Todo };
