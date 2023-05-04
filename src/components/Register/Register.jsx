import React, { useContext, useState } from "react";
import { Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser,updateUserProfile} =useContext(AuthContext)
    const [loginUser,setLoginUser] =useState(null)
    const [userError,setUserError] = useState('')
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password =form.password.value;
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setLoginUser(loggedUser)
            updateUserProfile({
              displayName: name,
              photoURL:photo
            }) 
          .then(() => {
            console.log(loggedUser);
          })
          .catch(error => console.log(error));
        })
        .catch(error => {
            console.log(error.message)
            setUserError(error.message)
        })

    }
  return (
    <div className="w-50 mx-auto py-5">
        <h1 className="text-center py-5">Please Register !!!</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text"  name="name" required placeholder="Enter Name"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control type="text"  required name="photo" placeholder="Enter Photo Url"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required name="email" placeholder="Enter email"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <h5 className="text-danger">{userError}</h5>
        <Button variant="primary" type="register">
          Register
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Already Have an Account  <Link to="/login">Login Fast </Link>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
