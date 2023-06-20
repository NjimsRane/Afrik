import {useEffect, useState} from "react";
import {FormInput} from "../../components";
import s from "../../components/formInput/FormInput.module.css";
import {Link} from "react-router-dom";

const Login = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "email",
			label: "email",
			required: true,
			errorMessage: "Please enter a valid email",
		},
		{
			id: 2,
			name: "password",
			type: "password",
			label: "password",
			required: true,
			errorMessage: "Wrong password",
		},
	];

	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value});
	};

	const handleClick = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		document.title = "Login | AFRI-K ";
	}, []);

	return (
		<div className={s.form}>
			<div className={s.box}>
				<h2>login</h2>
				<form onClick={handleClick}>
					<div>
						{inputs.map((input) => (
							<FormInput
								key={input.id}
								{...input}
								onChange={handleChange}
								value={values[input.name]}
							/>
						))}
					</div>

					<button type="submit">login</button>
					<p>
						Don`t have an account ? <Link to="/register">register</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
