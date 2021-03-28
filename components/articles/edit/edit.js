import React, { useState, useEffect } from "react";
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

const EditModal = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = useState(true);
  const [articleName, setArticleName] = useState("" || []);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [imageFormData, setImageFormData] = useState(null);
  const formSubmit = (e) => {
    e.preventDefault();
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

  const getFormData = () => {
    firebase
      .database()
      .ref("/articles/" + props.id)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
        setArticleName(snapshot.val().articleName);
        setDescription(snapshot.val().description);
        setCategory(snapshot.val().category);
        //setTags(snapshot.val().tags);
        setLoading(false);
        //setArticleData(snapshotToArray(snapshot.val()));
      });
  };

  useEffect(() => {
    getFormData();
  }, []);

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
          {loading ? (
            "Loading..."
          ) : (
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
                        value={articleName}
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
                        value={description}
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
                        value={category}
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
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditModal;
