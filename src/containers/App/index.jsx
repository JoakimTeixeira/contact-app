import React from 'react'
import './index.css'
import meteor from '../../resources/meteor.svg'

const App = () => {
	return (
		<>
			<div className="p-5">
				<section className="container col-12 col-md-7 col-lg-6 float-left">
					<header>
						<h1 className="text-white pt-3 pb-5">Contact App</h1>
					</header>

					<article className="pb-5">
						<form>
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
								/>
							</div>

							<div className="form-group row">
								<button type="submit" className="col-sm-12 btn btn-danger">
									Add contact
								</button>
							</div>
						</form>
					</article>

					<article className="row">
						<table className="table table-bordered bg-white mb-5">
							<tbody>
								<tr>
									<td>test</td>
								</tr>
							</tbody>
						</table>
					</article>
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
