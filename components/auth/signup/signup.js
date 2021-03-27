import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
var DatePicker = require("reactstrap-date-picker");
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

const SignUp = () => {
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
      setPreferences[e.target.value] = e.target.value;
      console.log(e.target.value);
    } else {
      preferences.splice(e.target.value, 1);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <div className={style.signUpContainer}>
        <div className={style.heading}>Sign Up</div>
        <Form>
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
                    placeholder="Your Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
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
                  id="exampleCustomCheckbox"
                  label="General"
                  onChange={handlePerferences}
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox1"
                  label="Sports"
                  onChange={handlePerferences}
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label="Politics"
                  onChange={handlePerferences}
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
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
