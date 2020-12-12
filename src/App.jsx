import React, { useState, useEffect, useRef } from 'react';
import Contacts from 'components/Contacts';
import SearchBar from 'components/SearchBar';
import { Form, Col, Button, Container } from 'react-bootstrap';
import meteor from 'resources/meteor.svg';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputFocus = useRef(null);
  const formSubmitButton = useRef(null);
  const searchBar = useRef(null);
  const cachedId = useRef(null);

  const capitalize = (string) => {
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchBar.current.value) {
      searchBar.current.classList.toggle('collapse');
    } else {
      searchBar.current.classList.add('collapse');
      searchBar.current.value = null;
      setSearchQuery('');
    }
  };

  const handleSearchBar = (event) => {
    setSearchQuery(event.target.value);
  };

  const renderSearchedContacts = () => {
    const filteredContacts = contacts.filter((contact) =>
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredContacts;
  };

  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const capitalizedFirstName = capitalize(firstName);
    const capitalizedLastName = capitalize(lastName);

    if (firstName && lastName && email) {
      if (edit) {
        const newPerson = {
          id: cachedId.current,
          firstName: capitalizedFirstName,
          lastName: capitalizedLastName,
          email,
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === cachedId.current);

        newContacts[index] = newPerson;
        setContacts(newContacts);

        formSubmitButton.current.innerText = 'Add contact';
        formSubmitButton.current.classList.remove('btn-dark');
        formSubmitButton.current.classList.add('btn-danger');
        cachedId.current = null;
        setEdit(false);
        setFirstName('');
        setLastName('');
        setEmail('');
      } else if (edit === false) {
        const person = {
          id: new Date().getTime().toString(),
          firstName: capitalizedFirstName,
          lastName: capitalizedLastName,
          email,
        };

        setContacts([...contacts, person]);

        setFirstName('');
        setLastName('');
        setEmail('');
      }
    }
  };

  const handleDeleteButton = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const handleEditButton = (id) => {
    const person = contacts.find((contact) => contact.id === id);
    setFirstName(person.firstName);
    setLastName(person.lastName);
    setEmail(person.email);
    setEdit(true);
    cachedId.current = id;

    formSubmitButton.current.innerText = 'Edit contact';
    formSubmitButton.current.classList.remove('btn-danger');
    formSubmitButton.current.classList.add('btn-dark');
  };

  useEffect(() => {
    inputFocus.current.focus();
  }, [contacts]);

  return (
    <>
      <Container className="pt-5">
        <section className="col-12 col-lg-6 float-left">
          <header>
            <h1 className="text-white pb-5">Contact App</h1>
            <SearchBar
              handleSearchBar={handleSearchBar}
              handleSearchSubmit={handleSearchSubmit}
              searchBar={searchBar}
              searchQuery={searchQuery}
            />
          </header>

          <article className="pb-5">
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="justify-content-between mb-4" controlId="formGridFirstName">
                <Form.Row>
                  <Col sm={3}>
                    <Form.Label className="text-white">First Name:</Form.Label>
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      placeholder="John"
                      ref={inputFocus}
                      value={firstName}
                      onChange={handleFirstNameInput}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group className="justify-content-between mb-4" controlId="formGridLastName">
                <Form.Row>
                  <Col sm={3}>
                    <Form.Label className="text-white">Last Name:</Form.Label>
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={handleLastNameInput}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group className="justify-content-between mb-4" controlId="formGridEmail">
                <Form.Row>
                  <Col sm={3}>
                    <Form.Label className="text-white">Email:</Form.Label>
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type="email"
                      placeholder="johndoe@email.com"
                      value={email}
                      onChange={handleEmailInput}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group className="justify-content-between mb-4" controlId="submitButton">
                <Button ref={formSubmitButton} type="submit" className="col-12 btn btn-danger">
                  Add contact
                </Button>
              </Form.Group>
            </Form>
          </article>

          <article>
            <Contacts
              contacts={renderSearchedContacts()}
              handleDeleteButton={handleDeleteButton}
              handleEditButton={handleEditButton}
            />
          </article>
        </section>

        <section>
          <img
            className="d-none d-sm-none d-md-none d-lg-block col-md-5 float-right pl-5 pt-4"
            src={meteor}
            alt="meteor"
            width="100%"
          />
        </section>
      </Container>
    </>
  );
};

export default App;
