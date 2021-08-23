import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  function handleInputChange(event) {
    const id = event.target.id;
    const newValue = event.target.value;
    switch (id) {
      case 'first-name':
        setValues({
          ...values,
          firstName: newValue,
        });
        break;
      case 'last-name':
        setValues({
          ...values,
          lastName: newValue,
        });
        break;
      case 'email':
        setValues({
          ...values,
          email: newValue,
        });
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
  }
  
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {
          submitted &&
          valid &&
          <div className="success-message">
            Success! Thank you for registering.
          </div>
        }
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleInputChange}
        />
        {
          submitted &&
          !values.firstName &&
          <span id="first-name-error">Please enter a first name</span>
        }
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleInputChange}
        />
        {
          submitted &&
          !values.lastName &&
          <span id="last-name-error">Please enter a last name</span>
        }
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        {
          submitted &&
          !values.email &&
          <span id="email-error">Please enter an email address</span>
        }
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;