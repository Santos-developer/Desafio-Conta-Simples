import React from "react";
import { Content, Center, Form, Input } from "./styles";

import Button from "components/Button";
import Container from "components/Container";

const Login = () => {
  return (
    <Content>
      <Center>
        <Container>
          <Form>
            <Input type="text" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
            <Button>Entrar</Button>
          </Form>
        </Container>
      </Center>
    </Content>
  );
};

export default Login;
