import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, handleDeleteButton, handleEditButton }) => (
  <table className="table table-bordered table-striped table-responsive-sm bg-white mb-5">
    {(() =>
      contacts.length > 0 && (
        <>
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((person) => {
              const { id, firstName, lastName, email } = person;

              return (
                <tr key={id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>
                    <Row className="w-100">
                      <Col xl={6} md={4}>
                        <button
                          type="submit"
                          onClick={() => handleDeleteButton(id)}
                          className="btn btn-danger m-1"
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </Col>
                      <Col xl={4} md={6}>
                        <button
                          type="submit"
                          onClick={() => handleEditButton(id)}
                          className="btn btn-dark m-1"
                        >
                          <i className="fas fa-edit" />
                        </button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      ))()}
  </table>
);

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.string.isRequired,
  handleDeleteButton: PropTypes.string.isRequired,
  handleEditButton: PropTypes.string.isRequired,
};
