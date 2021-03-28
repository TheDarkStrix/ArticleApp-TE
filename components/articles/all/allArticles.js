import { Table, Button, Container } from "reactstrap";
import EditModal from "../Edit/edit";
import CreateModal from "../create/create";

const AllArticles = () => {
  const removeArticle = () => {
    console.log("remove article");
  };

  return (
    <>
      <CreateModal />
      <Table bordered>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>2</td>
            <td>2</td>
            <td>
              <EditModal />
            </td>
            <td>
              <Button size="sm" onClick={removeArticle} color="danger">
                Remove
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AllArticles;
