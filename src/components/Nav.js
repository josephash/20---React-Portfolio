import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<ul className="navbar-nav">
					<li className="nav-item ms-3 me-4">
						<a className="nav-link" href="/">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">
							About Me
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/projects">
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/contact">
							Contact
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/resume">
							Resume
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;