import { Table, Button, Container } from "reactstrap";
import EditModal from "../Edit/edit";
import CreateModal from "../create/create";
import { useRouter } from "next/router";
import firebase from "../../../firebase";
import { useToasts } from "react-toast-notifications";
import { useState, useEffect } from "react";

const AllArticles = () => {
  const { addToast } = useToasts();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);

  const [articleData, setArticleData] = useState();

  const snapshotToArray = (snapshot) =>
    Object.entries(snapshot).map((e) => Object.assign(e[1], { key: e[0] }));

  const removeArticle = (id) => {
    var db = firebase.database();
    var ref = db.ref();
    var remove = db.ref("articles/" + id).remove();
    fetchAllArticle();
  };

  const fetchAllArticle = () => {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("/articles")
      .once("value")
      .then((snapshot) => {
        setArticleData(snapshotToArray(snapshot.val()));
      });
  };

  const checkForValidUser = () => {
    console.log("check for valid user");
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
        setUserDetails(user);
        fetchAllArticle();
        setLoading(false);
      } else {
        // No user is signed in.
        addToast("Failed to authenticate. " + error.message, {
          appearance: "error",
          autoDismiss: true,
        });
        console.log("not logged in");
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
          <CreateModal />
          <Table bordered className="mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {articleData &&
                articleData.map((data, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{data.articleName}</td>
                    <td>{data.likes}</td>
                    <td>{data.dislikes}</td>
                    <td>
                      <EditModal id={data.key} />
                    </td>
                    <td>
                      <Button
                        size="sm"
                        onClick={() => removeArticle(data.key)}
                        color="danger"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default AllArticles;
