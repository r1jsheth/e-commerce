import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../css/Login.css";
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event) {
		if(password === 'admin'){
			localStorage.setItem('isUsedLoggedIn', true);
			props.setUserLoggedIn(true);
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
					<FormControl
						autoFocus
						type="text"
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder = "email"
						/>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<FormControl
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
						placeholder = "password"
					/>
				</FormGroup>
				<br></br><br></br>
				<button type="submit" className = "loginBtn">
					Login
				</button>
			</form>
		</div>
	);
}
