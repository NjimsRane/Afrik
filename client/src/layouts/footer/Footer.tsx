import s from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<p className={s.text}>
				Copyright &copy; <span>{new Date().getFullYear()}</span> Done by
				NjimsRane with <span className="">&hearts;</span>
			</p>
		</footer>
	);
};

export default Footer;
