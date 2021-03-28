import { useState } from "react";
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

const DisplayArticle = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
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
      </CardColumns>

      <Modal isOpen={modal} toggle={toggle} size="lg" scrollable={true}>
        <ModalHeader toggle={toggle}>Article Title</ModalHeader>
        <ModalBody>
          <div>{/* Image container */}</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DisplayArticle;
