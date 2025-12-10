
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light position-fixed w-100 top-0 z-3 ">
			<div className="container">
				<NavLink className="navbar-brand text-uppercase text-white fs-2 fw-bold" to="/">Start Framework</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									'nav-link text-white text-uppercase text-bold' + (isActive ? ' active-navlink' : '')
								}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/portfolio"
								className={({ isActive }) =>
									'nav-link text-white text-uppercase text-bold' + (isActive ? ' active-navlink' : '')
								}
							>
								Portfolio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									'nav-link text-white text-uppercase text-bold' + (isActive ? ' active-navlink' : '')
								}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

