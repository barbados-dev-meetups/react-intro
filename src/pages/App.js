import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ''
    };

    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    console.log(this.state.name);
  }

  render() {
    const { name } = this.state;

    return (
      <React.Fragment>
        <h1>Hello</h1>

        <form onSubmit={this.submit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={({ target: { value } }) => this.setState({ name: value })}
          />

          <button type="submit">Send Name</button>
        </form>
      </React.Fragment>
    );
  }
}

export default App;
