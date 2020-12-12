import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, handleDeleteButton, handleEditButton }) => (
  <article className="row">
    <table className="table table-bordered table-striped table-responsive-sm bg-white mb-5">
      {(() => {
        if (contacts.length > 0) {
          return (
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
                  const {
                    id, firstName, lastName, email,
                  } = person;

                  return (
                    <tr key={id}>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{email}</td>
                      <td>
                        <button
                          type="submit"
                          onClick={() => handleDeleteButton(id)}
                          className="btn btn-danger m-1"
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button
                          type="submit"
                          onClick={() => handleEditButton(id)}
                          className="btn btn-dark m-1"
                        >
                          <i className="fas fa-edit" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          );
        }
        return <div />;
      })()}
    </table>
  </article>
);

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.string.isRequired,
  handleDeleteButton: PropTypes.string.isRequired,
  handleEditButton: PropTypes.string.isRequired,
};
