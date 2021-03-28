import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import firebase from "../../../firebase";
import { useToasts } from "react-toast-notifications";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const DisplayArticle = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const checkForValidUser = () => {
    console.log("check for valid user");
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUserDetails(user);
        setLoading(false);
      } else {
        // No user is signed in.
        router.push("/login");
      }
    });
  };

  useEffect(() => {
    checkForValidUser();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <CardColumns>
            <Card>
              <CardBody>
                <div onClick={toggle}>
                  <CardTitle tag="h5">Article Title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div onClick={toggle}>
                  <CardTitle tag="h5">Article Title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div onClick={toggle}>
                  <CardTitle tag="h5">Article Title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div onClick={toggle}>
                  <CardTitle tag="h5">Article Title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div onClick={toggle}>
                  <CardTitle tag="h5">Article Title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div onClick={toggle}>
                  <CardTitle tag="h5">Article Title</CardTitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </CardColumns>

          <Modal isOpen={modal} toggle={toggle} size="lg" scrollable={true}>
            <ModalHeader toggle={toggle}>Article Title</ModalHeader>
            <ModalBody>
              <div>
                <img
                  style={{
                    height: "250px",
                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="https://www.digitalvidya.com/wp-content/uploads/2019/03/Article-Writing-Format.jpg"
                />
              </div>
              <div>
                <div className="pt-2 pb-2">
                  <strong>Article Description</strong>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      )}
    </>
  );
};

export default DisplayArticle;
