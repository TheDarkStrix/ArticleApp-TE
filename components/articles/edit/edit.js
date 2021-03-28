import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Input,
  FormText,
} from "reactstrap";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faUser,
  faPhoneAlt,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const EditModal = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [articleName, setArticleName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [imageFormData, setImageFormData] = useState(null);
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(articleName, description, category, tags, image);
  };

  const onFileUpload = (file) => {
    let formData = new FormData();
    console.log("image", file.name);
    formData.append("myFile", file, file.name);
    console.log(formData);
    setImageFormData(formData);
  };

  const onFileChange = async (event) => {
    console.log("event", event.target.files[0]);
    await setImage(event.target.files[0]);
    await onFileUpload(event.target.files[0]);
  };

  return (
    <div>
      <Button color="danger" size="sm" onClick={toggle}>
        Edit
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        scrollable={true}
        size="lg"
        className={className}
      >
        <ModalHeader toggle={toggle}>Edit Article</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={formSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Aname">Article Name</Label>
                    <Input
                      type="text"
                      name="aname"
                      id="aname"
                      placeholder="Article Name"
                      required
                      onChange={(e) => setArticleName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="description">Image Upload</Label>
                    <Input
                      type="file"
                      name="file"
                      id="fileUpload"
                      onChange={onFileChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">Select Category</Label>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <TagsInput
                      value={tags}
                      onChange={(tags) => setTags(tags)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Button color="primary">Edit Article</Button>
                </Col>
                <Col md={9}>
                  <Button
                    className="float-right"
                    color="danger"
                    onClick={toggle}
                  >
                    Close
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditModal;
