import React from 'react'

const Contacts = ({ contacts, handleDeleteButton }) => {
	return (
		<article className="row">
			<table className="table table-bordered table-striped bg-white mb-5">
				<tbody>
					{(() => {
						if (contacts.length > 0) {
							return (
								<>
									<th scope="col">First Name</th>
									<th scope="col">Last Name</th>
									<th scope="col">Email</th>
									<th scope="col">Actions</th>
									{contacts.map((person) => {
										const { id, firstName, lastName, email } = person

										return (
											<tr>
												<td>{firstName}</td>
												<td>{lastName}</td>
												<td>{email}</td>
												<td>
													<button
														onClick={() => handleDeleteButton(id)}
														className="btn btn-danger"
													>
														Delete
													</button>
												</td>
											</tr>
										)
									})}
								</>
							)
						}
					})()}
				</tbody>
			</table>
		</article>
	)
}

export default Contacts
