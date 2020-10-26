import React from 'react'

const Contacts = ({ contacts, handleDeleteButton, handleEditButton }) => {
	return (
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
										const { id, firstName, lastName, email } = person

										return (
											<tr key={id}>
												<td>{firstName}</td>
												<td>{lastName}</td>
												<td>{email}</td>
												<td>
													<button
														onClick={() => handleDeleteButton(id)}
														className="btn btn-danger m-1"
													>
														<i class="fas fa-trash-alt"></i>
													</button>
													<button
														onClick={() => handleEditButton(id)}
														className="btn btn-dark m-1"
													>
														<i class="fas fa-edit"></i>
													</button>
												</td>
											</tr>
										)
									})}
								</tbody>
							</>
						)
					}
				})()}
			</table>
		</article>
	)
}

export default Contacts
