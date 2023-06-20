import {useEffect, useState} from "react";
import {FormInput} from "../../components";
import s from "../../components/formInput/FormInput.module.css";
import {Link} from "react-router-dom";

const Register = () => {
	const [values, setValues] = useState({
		email: "",
		name: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "email",
			label: "email",
			required: true,
			errorMessage: "Please enter a valid email format",
		},
		{
			id: 2,
			name: "name",
			type: "text",
			label: "fullname",
			required: true,
			errorMessage: "Please enter your full name",
			pattern: "^[a-z/s]*$",
		},
		{
			id: 3,
			name: "password",
			type: "password",
			label: "password",
			required: true,
			errorMessage:
				"Password should be 8-20 characters and includes at least 1 letter 1 number and 1 special character ",
			pattern:
				"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$^&*]{8,20}$",
		},
		{
			id: 4,
			name: "confirmPassword",
			type: "password",
			label: "confirm password",
			required: true,
			errorMessage: "Passwords don`t match",
			pattern: values.password,
		},
	];

	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value});
	};

	const handleClick = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		document.title = "Register | AFRI-K ";
	}, []);

	return (
		<div className={s.form}>
			<div className={s.box}>
				<h2>sign up</h2>
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

					<button type="submit">sign up</button>
					<p>
						Already have an account ? <Link to="/login">login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
