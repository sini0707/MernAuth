import {useState} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';

const UsersDataTable = ({ users }) => {
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <td>{<Button type="submit" variant="primary" className="mt-3"> Update </Button>}</td>
            <td>{<Button type="submit" variant="danger" className="mt-3"> Delete </Button>}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Form>
      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search users:</Form.Label>
        <Form.Control style={{width:"500px"}} value={searchQuery} type="text" placeholder="Enter Name or email........" onChange={handleSearch} />
      </Form.Group>
    </Form>
    </>
  );
};

export default UsersDataTable;