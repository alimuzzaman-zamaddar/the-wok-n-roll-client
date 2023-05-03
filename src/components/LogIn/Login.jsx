import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)
const Login = () => {
  const [loginUser, setLoginUser] = useState(null)
    const {userSignIn,googleLogIn} = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GoogleAuthProvider()



    const from =location?.state?.from?.pathname || '/';

    const handleGoogle = () =>  {
      signInWithPopup(auth,googleProvider)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => console.log(error))

    }

    const handleGithub = () => {
      signInWithPopup(auth,githubProvider)
      .then(result => {
        console.loh(result.message)
      })
      .catch(error => console.log(error))
    }



    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email,password)
        userSignIn(email,password)
        .then(result => {
            const signedInUser = result.user;
            setLoginUser(signedInUser)
            Navigate(from)
            updateProfile(auth, loginUser => {
              displayName : {name} 
              photoURL: {photo}
            })
            .then(result => {
              const loggedUser = result.user;
              setLoginUser(loggedUser)
        
            })
            .catch(error => console.log(error)) 

        })
        .catch(error => {
            setLoginUser(error.message)
        })


    }


  return (
    <div className="w-50 mx-auto py-5">
        <h1 className="text-center py-5">Please Login !!!</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <p className="text-danger">{loginUser}</p>
        <Button className="form-control btn btn-outline-secondary text-white" variant="secondary"  type="login">
          Login
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>New To Chines Cuisine  <Link to='/register'>Register Now</Link></p>
        </Form.Group>
      </Form>

      <button className="form-control btn btn-outline-secondary text-white bg-dark mb-3" variant='secondary' onClick={handleGoogle}>Login With Google</button>
      <button className="form-control btn btn-outline-secondary text-white bg-dark" variant='secondary' onClick={handleGithub}>Login With GitHub</button>

    </div>
  );
};

export default Login;
