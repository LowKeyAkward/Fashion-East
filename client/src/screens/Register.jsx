import { useState } from 'react';
import "./Register.css"

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="register-div">
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleRegister(formData)
      }}>
        
        <h3>Register</h3>
        <label> Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        
        <br />
          <label> Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

        <br />
          <label> Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        <br />

      <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;