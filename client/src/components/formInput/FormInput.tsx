import {useState} from "react";
import s from "./FormInput.module.css";

const FormInput = ({label, onChange, errorMessage, ...inputsProps}) => {
	const [focused, setFocused] = useState(false);

	const handleFocused = (e) => {
		setFocused(true);
	};

	return (
		<div className={s.formInput}>
			<input
				{...inputsProps}
				onBlur={handleFocused}
				onFocus={() =>
					inputsProps.name === "confirmPassword" && setFocused(true)
				}
				onChange={onChange}
				focused={focused.toString()}
			/>
			<span>{label}</span>
			<i></i>
			<small>{errorMessage}</small>
		</div>
	);
};

export default FormInput;
