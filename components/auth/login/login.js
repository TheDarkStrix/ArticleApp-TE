import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import style from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.heading}>Login</div>
        <Form onSubmit={formSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faEnvelope} />
                </InputGroupText>
              </InputGroupAddon>

              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faKey} />
                </InputGroupText>
              </InputGroupAddon>

              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </FormGroup>

          <Button color="primary">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
