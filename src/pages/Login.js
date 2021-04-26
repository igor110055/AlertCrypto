import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useHistory } from 'react-router-dom';

export const Login = () => {

	const history = useHistory();

	return (
		<div className="login-body">
			<div className="login-wrapper">
				<div className="login-panel">
		
					<InputText id="email" placeholder="Email" />
					<Password id="password" placeholder="Password" />
					<Button label="LOGIN" type="button" ></Button>
					<button className="p-link">forget password?</button>
					<p>Don’t you have an account, <a href="#">sign up</a></p>
				</div>
				<div className="login-footer">
					<h4>freya</h4>
					<h6>Copyright Ⓒ PrimeTek Informatics</h6>
				</div>
			</div>
		</div>
	)
}