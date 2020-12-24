import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userAction";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [reveal, setReveal] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    // Dispatch Register
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  const revealPasswordHandler = e => {
    setReveal(!reveal);

    e.preventDefault();
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label className="my-2">Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="my-2">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <div>
            <Form.Control
              type={reveal ? `text` : `password`}
              placeholder="Enter password"
              value={password}
              name="current-password"
              required
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
            <i
              className={reveal ? `fas fa-eye` : `fas fa-eye-slash`}
              style={{
                float: "right",
                marginTop: "-28px",
                marginRight: "15px",
              }}
              onClick={revealPasswordHandler}
            ></i>
          </div>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <div>
            <Form.Control
              type={reveal ? `text` : `password`}
              placeholder="Confirm Password"
              value={confirmPassword}
              name="current-password"
              required
              onChange={e => setConfirmPassword(e.target.value)}
            ></Form.Control>
            <i
              className={reveal ? `fas fa-eye` : `fas fa-eye-slash`}
              style={{
                float: "right",
                marginTop: "-28px",
                marginRight: "15px",
              }}
              onClick={revealPasswordHandler}
            ></i>
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account already?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : `/register`}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
