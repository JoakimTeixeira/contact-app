import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import meteor from '../resources/meteor.svg'
import Contacts from '../components/Contacts'

const App = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [contacts, setContacts] = useState([])
	const inputFocus = useRef()

	const handleFirstNameInput = (event) => {
		setFirstName(event.target.value)
	}

	const handleLastNameInput = (event) => {
		setLastName(event.target.value)
	}

	const handleEmailInput = (event) => {
		setEmail(event.target.value)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()

		if ((firstName, lastName, email)) {
			const person = {
				id: new Date().getTime().toString(),
				firstName,
				lastName,
				email,
			}

			setContacts((contacts) => {
				return [...contacts, person]
			})

			setFirstName('')
			setLastName('')
			setEmail('')
		}
	}

	const handleDeleteButton = (id) => {
		const newContacts = contacts.filter((contact) => contact.id !== id)
		setContacts(newContacts)
	}

	useEffect(() => {
		inputFocus.current.focus()
	}, [contacts])

	return (
		<>
			<div className="p-5">
				<section className="container col-12 col-md-7 col-lg-6 float-left">
					<header>
						<h1 className="text-white pt-3 pb-5">Contact App</h1>
					</header>

					<article className="pb-5">
						<form onSubmit={handleFormSubmit}>
							<div className="form-group row">
								<label
									htmlFor="inputFirstName"
									className="text-white col-3 col-form-label"
								>
									First Name:
								</label>
								<input
									className="form-control col-9"
									type="text"
									id="inputFirstName"
									placeholder="John"
									ref={inputFocus}
									value={firstName}
									onChange={handleFirstNameInput}
								/>
							</div>

							<div className="form-group row">
								<label
									htmlFor="inputLastName"
									className="text-white col-3 col-form-label"
								>
									Last Name:
								</label>
								<input
									className="form-control col-9"
									type="text"
									id="inputLastName"
									placeholder="Doe"
									value={lastName}
									onChange={handleLastNameInput}
								/>
							</div>

							<div className="form-group row">
								<label
									htmlFor="inputEmail"
									className="text-white col-3 col-form-label"
								>
									Email:
								</label>
								<input
									className="form-control col-9"
									type="email"
									id="inputEmail"
									placeholder="johndoe@email.com"
									value={email}
									onChange={handleEmailInput}
								/>
							</div>

							<div className="form-group row">
								<button type="submit" className="col-12 btn btn-danger">
									Add contact
								</button>
							</div>
						</form>
					</article>

					<Contacts
						contacts={contacts}
						handleDeleteButton={handleDeleteButton}
					/>
				</section>

				<section>
					<img
						className="d-none d-sm-none d-md-block col-md-5 float-right pl-5 pt-4"
						src={meteor}
						alt="meteor"
						width="100%"
					/>
				</section>
			</div>
		</>
	)
}

export default App
