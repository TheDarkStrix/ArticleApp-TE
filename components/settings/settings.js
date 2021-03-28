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
  Row,
  Col,
  CustomInput,
} from "reactstrap";

const Settings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  //   Preferences
  const [preferences, setPreferences] = useState([]);

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handlePerferences = (e) => {
    if (e.target.checked) {
      setPreferences[e.target.value] = e.target.value;
      console.log(e.target.value);
    } else {
      preferences.splice(e.target.value, 1);
    }
  };

  const handleUpdatedPerferences = () => {};

  return (
    <>
      <div>
        <Form onSubmit={handleChangePassword}>
          <Label for="exampleCheckbox" className="pt-4 pb-4">
            Change your Password
          </Label>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Old Password</Label>
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
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
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
                    name="password"
                    id="examplePassword"
                    placeholder="Your password"
                    required
                    onChange={(e) => confirmpassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary">Save Password</Button>
        </Form>
      </div>

      <div className="mt-5">
        <Form onSubmit={handleUpdatedPerferences}>
          <Row form>
            <FormGroup>
              <Label className="pt-4 pb-4" for="exampleCheckbox">
                Change your preferences
              </Label>
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
          <Button color="primary">Save Perferences</Button>
        </Form>
      </div>
    </>
  );
};

export default Settings;
