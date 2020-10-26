import React from 'react'

const Contacts = ({ contacts }) => {
	const renderContacts = () => {
		if (contacts.length > 0) {
			return (
				<>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Email</th>
					{contacts &&
						contacts.map((person) => {
							const { firstName, lastName, email } = person

							return (
								<tr>
									<td>{firstName}</td>
									<td>{lastName}</td>
									<td>{email}</td>
								</tr>
							)
						})}
				</>
			)
		}
	}

	return (
		<article className="row">
			<table className="table table-bordered table-striped bg-white mb-5">
				<tbody>{renderContacts()}</tbody>
			</table>
		</article>
	)
}

export default Contacts
