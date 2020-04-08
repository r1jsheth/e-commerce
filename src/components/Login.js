import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../css/Login.css";
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		if(password === 'admin'){
			store.addNotification({
				title: "Successful login!",
				message: "Welcome to Infa-commerce",
				type: "success",
				insert: "top",
				container: "top-center",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
					duration: 1000,
					onScreen: true,
					pauseOnHover: true
				}
			});
		}
		else{
			store.addNotification({
				title: "Wrong Password!",
				message: "Wrong Password!",
				type: "danger",
				insert: "top",
				container: "top-center",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
					duration: 1000,
					onScreen: true,
					pauseOnHover: true
				}
			});
		}
		event.preventDefault();
	}

	return (
		<div className="Login">
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="email" bsSize="large">
					<h2>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
					<FormControl
						autoFocus
						type="text"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<h2>Password &nbsp;&nbsp;</h2>
					<FormControl
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					/>
				</FormGroup>
				<br></br><br></br>
				<Button block bsSize="large" disabled={!validateForm()} type="submit">
					Login
				</Button>
			</form>
		</div>
	);
}
