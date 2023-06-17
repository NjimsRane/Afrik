import trinket from "../../assets/images/products/Trinkets.jpg";
import s from "./Products.module.css";
import trinkets from "../../data/trinkets.json";
import {useEffect} from "react";

const Trinkets = () => {
	useEffect(() => {
		document.title = "Trinkets-Products | AFRI-K ";
	}, []);

	useEffect(() => {
		console.count("soule");

		const reveal = () => {
			const reveals = document.querySelectorAll(`.${s.reveal}`);

			for (let i = 0; i < reveals.length; i++) {
				const windowHeight = window.innerHeight;
				const revealTop = reveals[i].getBoundingClientRect().top;
				const revealPoint = 150;
				revealTop < windowHeight - revealPoint
					? reveals[i].classList.add(`${s.active}`)
					: reveals[i].classList.remove(`${s.active}`);
			}
		};

		window.addEventListener("scroll", reveal);
	}, []);
	return (
		<div className={s.basketsContainer}>
			<div className={s.banner}>
				<img src={trinket} alt="banner" />
			</div>
			<div className={s.baskets}>
				<div className={`${s.basket} ${s.reveal} ${s.toTop}`}>
					<h3 className={s.title}>LEATHER KEYCHAINS</h3>
					<div className={s.items}>
						{trinkets.keychains.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="keyChain" />
							</div>
						))}
					</div>
				</div>
				<div className={`${s.basket} ${s.reveal} ${s.toTop}`}>
					<hr />
					<h3 className={s.title}>FANS</h3>
					<div className={s.items}>
						{trinkets.fans.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="trinkets" />
							</div>
						))}
					</div>
				</div>
				<div className={`${s.basket} ${s.reveal} ${s.toTop}`}>
					<hr />
					<h3 className={s.title}>MINI INSTRUMENTS</h3>
					<div className={s.items}>
						{trinkets.instruments.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="instruments" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trinkets;
