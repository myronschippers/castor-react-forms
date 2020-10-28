import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      food: '',
    },
    // for the submit
    final: {
      firstName: '',
      lastName: '',
      food: '',
    },
  };

  // handleChangeFirstName = (event) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       firstName: event.target.value,
  //     },
  //   });
  // };

  // handleChangeLastName = (event) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       lastName: event.target.value,
  //     },
  //   });
  // };

  // handleChangeFood = (event) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       food: event.target.value,
  //     },
  //   });
  // };

  handleInputChange = (event, formKey) => {
    this.setState({
      form: {
        ...this.state.form,
        [formKey]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // stopping page refresh
    console.log(event.target);
    this.setState({
      final: {
        ...this.state.form,
      },
    });
  };

  render() {
    console.log('running render');
    // execute any JS
    let message = <p>Tell us your favorite food.</p>;

    console.log('final:', this.state.final);
    if (this.state.final.firstName !== '' && this.state.final.food !== '') {
      message = (
        <p>
          {this.state.final.firstName} has a favorite food of{' '}
          {this.state.final.food}.
        </p>
      );
    }

    return (
      <div>
        <Header />
        <main className="container">
          <p>Welcome to Forms in react</p>
          {/* CODE COMMENT */}

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={(event) => this.handleInputChange(event, 'firstName')}
              required={true}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={(event) => this.handleInputChange(event, 'lastName')}
              required={true}
            />
            <input
              type="text"
              name="food"
              placeholder="Enter Favorite Food"
              onChange={(event) => this.handleInputChange(event, 'food')}
              required={true}
            />
            <button>Submit</button>
          </form>

          {message}
        </main>
      </div>
    );
  }
}

export default App;
