import React from 'react';

const API = 'https://randomuser.me/api';
const GreetAPI = 'http://172.16.0.43:8000/hello';

export default class User extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      user: null,
      message: ''
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(API)
      .then(res => res.json())
      .then(user => user.results[0])
      .then(user => this.greetGet(user));
  }

  greet(user) {
    fetch(GreetAPI, {
      method: 'POST',
      body: JSON.stringify({ name: `${user.name.first} ${user.name.last}` }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ message }) => {
        this.setState({ message, loading: false, user });
      });
  }

  greetGet(user) {
    fetch(`${GreetAPI}/${user.name.first}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ message }) => {
        this.setState({ message, loading: false, user });
      });
  }

  render() {
    const { loading, user, message } = this.state;

    if (loading) {
      return <p>Loading......</p>;
    }

    return (
      <div>
        <img src={user.picture.medium} alt="" />

        <p>
          {user.name.first} {user.name.last}
        </p>
        <a href={`tel:${user.phone}`}>{user.phone}</a>

        <p>{message}</p>

        <button onClick={() => this.getData()}>Get New Person</button>
      </div>
    );
  }
}
