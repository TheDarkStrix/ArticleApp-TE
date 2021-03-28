import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";
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
import { useRouter } from "next/router";
import firebase from "../../../firebase";

const Login = () => {
  const { addToast } = useToasts();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const formSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(userCredential.user);
        if (user) {
          addToast("Login Successful", {
            appearance: "success",
            autoDismiss: true,
          });
          router.push("/");
        }
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
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
