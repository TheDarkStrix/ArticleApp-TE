import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
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
  Row,
  Col,
  CustomInput,
} from "reactstrap";
import firebase from "../../firebase";
import { useRouter } from "next/router";

const Settings = () => {
  const { addToast } = useToasts();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  //   Preferences
  const [preferences, setPreferences] = useState([]);

  const checkForValidUser = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
        setUserDetails(user);
        setLoading(false);
      } else {
        // No user is signed in.
        addToast("Failed to authenticate. " + error.message, {
          appearance: "error",
          autoDismiss: true,
        });
        router.push("/");
      }
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      addToast("Passwords do not match", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      var user = firebase.auth().currentUser;
      user
        .updatePassword(password)
        .then(function () {
          // Update successful.
          addToast("Update Successful", {
            appearance: "success",
            autoDismiss: true,
          });
        })
        .catch(function (error) {
          // An error happened.
          addToast("Failed to update. " + error.message, {
            appearance: "error",
            autoDismiss: true,
          });
        });
    }
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

  const handleSavePassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    checkForValidUser();
  }, []);

  return (
    <>
      {loading ? (
        "Loading ...."
      ) : (
        <>
          <div>
            <Form onSubmit={handleChangePassword}>
              <Label for="exampleCheckbox" className="pt-4 pb-4">
                Change your Password
              </Label>
              <Row>
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
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
      )}
    </>
  );
};

export default Settings;
