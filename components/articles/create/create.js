import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import firebase from "../../../firebase";
import { useToasts } from "react-toast-notifications";

const CreateModal = (props) => {
  const { addToast } = useToasts();
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

    var random = Math.random().toString(36).substring(7);

    firebase
      .database()
      .ref("articles/" + random + "article")
      .set({
        articleName: articleName,
        description: description,
        category: category,
        tags: tags,
        likes: 0,
        dislikes: 0,
        image: image.name,
      })
      .then((data) => {
        addToast("Article Added", {
          appearance: "success",
          autoDismiss: true,
        });
        toggle();
      })
      .catch((error) => {
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  const onFileUpload = (file) => {
    let formData = new FormData();

    formData.append("myFile", file, file.name);

    setImageFormData(formData);
  };

  const onFileChange = async (event) => {
    await setImage(event.target.files[0]);
    await onFileUpload(event.target.files[0]);
  };

  return (
    <div>
      <Button color="info" size="sm" onClick={toggle}>
        Create Article
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        scrollable={true}
        size="lg"
        className={className}
      >
        <ModalHeader toggle={toggle}>Create Article</ModalHeader>
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
                      <option>General</option>
                      <option>Sports</option>
                      <option>Politics</option>
                      <option>Gaming</option>
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
                <Col md={4}>
                  <Button color="primary">Create Article</Button>
                </Col>
                <Col md={8}>
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

export default CreateModal;
