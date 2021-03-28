import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import {
  faEnvelope,
  faKey,
  faUser,
  faPhoneAlt,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  CustomInput,
} from "reactstrap";
import style from "./signup.module.css";
import firebase from "../../../firebase";

const SignUp = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  //  DOB
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());
  //   Preferences
  const [preferences, setPreferences] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handlePerferences = (e) => {
    if (e.target.checked) {
      setPreferences([...preferences, e.target.id]);
    } else {
      let position = preferences.indexOf(e.target.id);
      if (~position) preferences.splice(position, 1);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      password,
      cpassword,
      phone,
      currentDate,
      preferences
    );

    if (password != cpassword) {
      addToast("Passwords do not match", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var userId = firebase.auth().currentUser.uid;
          firebase
            .database()
            .ref("users/" + userId)
            .set({
              dob: currentDate,
              firstName: firstName,
              lastName: lastName,
              email: email,
              phone: phone,
              preferences: preferences,
            });
          userCredential.user.updateProfile({
            displayName: firstName + " " + lastName,
          });
          addToast("User Created Sucessfully", {
            appearance: "success",
            autoDismiss: true,
          });
          router.push("/");
        })
        .catch((error) => {
          addToast(error.message, {
            appearance: "error",
            autoDismiss: true,
          });
        });
    }
  };

  return (
    <>
      <div className={style.signUpContainer}>
        <div className={style.heading}>Sign Up</div>
        <Form onSubmit={formSubmit}>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Your First Name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <Label for="lastName">Last Name</Label>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Your Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Number"
                    minLength={10}
                    maxLength={10}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
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
                    id="email"
                    placeholder="Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="password">Password</Label>
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
                    placeholder="Your Password"
                    minLength={6}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    name="cpassword"
                    id="cexamplePassword"
                    placeholder="Confirm Password"
                    minLength={6}
                    required
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label>DOB</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faCalendarDay} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="date"
                    name="lname"
                    id="lname"
                    required
                    onChange={(e) => setCurrentDate(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <FormGroup>
              <Label for="exampleCheckbox">Choose your preferences</Label>
              <div>
                <CustomInput
                  type="checkbox"
                  id="General"
                  label="General"
                  onChange={handlePerferences}
                />
                <CustomInput
                  type="checkbox"
                  id="Sports"
                  label="Sports"
                  onChange={handlePerferences}
                />
                <CustomInput
                  type="checkbox"
                  id="Politics"
                  label="Politics"
                  onChange={handlePerferences}
                />
                <CustomInput
                  type="checkbox"
                  id="Gamimg"
                  label="Gamimg"
                  onChange={handlePerferences}
                />
              </div>
            </FormGroup>
          </Row>
          <Button color="primary">Sign in</Button>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
