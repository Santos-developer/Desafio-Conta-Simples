import axios from "axios";
import PropTypes from "prop-types"
import React, { useState } from "react";
import { connect } from "react-redux";

import { Content, Center, Form, Input } from "./styles";

import Button from "components/Button";
import Container from "components/Container";

const Login = ({ history, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const submit = e => {
    e.preventDefault();

    axios
      .post("/api/auth/login", { email, password })
      .then(res => {
        setToken(res.data);
        window.localStorage.setItem("token", res.data);
        history.push("/dashboard/home");
      })
      .catch(error => {
        alert(error.request.responseText);

        setEmail("");
        setPassword("");
      });
  };

  return (
    <Content>
      <Center>
        <Container>
          <Form>
            <Input
              type="text"
              value={email}
              onChange={onEmailChange}
              placeholder="E-mail"
            />
            <Input
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Senha"
            />
            <Button onClick={submit}>Entrar</Button>
          </Form>
        </Container>
      </Center>
    </Content>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch({ type: "SET_TOKEN", token })
});

Login.propTypes = {
  history: PropTypes.object,
  setToken: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
