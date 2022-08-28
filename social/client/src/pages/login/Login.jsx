import { useRef } from "react";
import "./login.css"

export default function Login() {
	const email = useRef();
	const password = useRef();
	const handleClick = (e) => {
		e.preventDefault()
		console.log(email)
	}
	return (
	<div className="login">
		<div className="loginWrapper">
			<div className="loginLeft">
				<h3 className="loginLogo">OurSocial</h3>
				<span className="loginDesc">
					Connect with friends and the world around you on OurSocial.
				</span>
			</div>
			<div className="loginRight">
				<form className="loginBox" onSubmit={handleClick}>
					<input placeholder="Eamil" type="email" required className="loginInput" ref={email}/>
					<input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
					<button className="loginButton">Log In</button>
					<span className="loginForget">Forget Password?</span>
					<button className="loginRegisterButton">
						Create a New Accout
					</button>
				</form>
			</div>
		</div>
	</div>
  )
}
