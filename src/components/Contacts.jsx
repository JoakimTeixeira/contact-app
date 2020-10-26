import React from 'react'

const Contacts = ({ contacts }) => {
	const renderContactsTable = () => {
		if (contacts.length > 0) {
			return (
				<>
					<th>Name</th>
					<th>Email</th>
					{contacts &&
						contacts.map((person) => {
							const { name, email } = person

							return (
								<tr>
									<td>{name}</td>
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
				<tbody>{renderContactsTable()}</tbody>
			</table>
		</article>
	)
}

export default Contacts
