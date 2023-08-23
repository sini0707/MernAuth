import { useState } from "react";
import { Button, Modal } from "react-bootstrap"; // Import Modal for the confirmation dialog
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useDeleteUserMutation } from "../../slices/adminApiSlice";

const UsersDataTable = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // State for the confirmation dialog
  const [userIdToDelete, setUserIdToDelete] = useState(null); // Track the user ID to delete

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {

      const responseFromApiCall = await deleteUser({ userId: userIdToDelete });
      toast.success("User Deleted Successfully.");
      setUserIdToDelete(null); // Clear the user ID to delete
      setShowConfirmation(false); // Close the confirmation dialog

      // Reload the page to reflect the updated data
      window.location.reload();

    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button type="submit" variant="primary" className="mt-3"> Update </Button>
              </td>
              <td>
                <Button type="submit" variant="danger" className="mt-3" onClick={() => {
                    setUserIdToDelete(user._id); // Set the user ID to delete
                    setShowConfirmation(true); // Open the confirmation dialog
                  }}
                >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <Form>
        <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search users:</Form.Label>
          <Form.Control
            style={{ width: "500px" }}
            value={searchQuery}
            type="text"
            placeholder="Enter Name or email........"
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>

      {/* Confirmation Dialog */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  );
  
};

export default UsersDataTable;
