import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import meteor from '../resources/meteor.svg'
import Contacts from '../components/Contacts'

const App = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [contacts, setContacts] = useState([])
	const inputFocus = useRef()

	const handleNameInput = (event) => {
		setName(event.target.value)
	}

	const handleEmailInput = (event) => {
		setEmail(event.target.value)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()

		if ((name, email)) {
			const person = { name, email }

			setContacts((contacts) => {
				return [...contacts, person]
			})

			setName('')
			setEmail('')
		}
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
									htmlFor="inputName"
									className="text-white col-sm-2 col-form-label"
								>
									Name:
								</label>
								<input
									className="form-control col-sm-10"
									type="text"
									id="inputName"
									placeholder="John Doe"
									ref={inputFocus}
									value={name}
									onChange={handleNameInput}
								/>
							</div>

							<div className="form-group row">
								<label
									htmlFor="inputEmail"
									className="text-white col-sm-2 col-form-label"
								>
									Email:
								</label>
								<input
									className="form-control col-sm-10"
									type="email"
									id="inputEmail"
									placeholder="johndoe@email.com"
									value={email}
									onChange={handleEmailInput}
								/>
							</div>

							<div className="form-group row">
								<button type="submit" className="col-sm-12 btn btn-danger">
									Add contact
								</button>
							</div>
						</form>
					</article>

					<Contacts contacts={contacts} />
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
