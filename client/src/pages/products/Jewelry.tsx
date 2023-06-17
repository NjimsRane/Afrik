import jewelryBanner from "../../assets/images/products/Jewelry.jpg";
import s from "./Products.module.css";
import jewelry from "../../data/jewelry.json";
import {useEffect} from "react";

const Jewelry = () => {
	useEffect(() => {
		document.title = "Jewelry-Products | AFRI-K ";
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
				<img src={jewelryBanner} alt="banner" />
			</div>
			<article className={s.baskets}>
				<section className={`${s.basket} ${s.reveal} ${s.toTop}`}>
					<h3 className={s.title}>Lorem ipsum dolor sit amet.</h3>
					<div className={s.items}>
						{jewelry.beads.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</section>
				<section className={`${s.basket} ${s.reveal} ${s.toTop}`}>
					<hr />
					<h3 className={s.title}>Lorem ipsum dolor sit amet.</h3>
					<div className={s.items}>
						{jewelry.jewelry.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</section>
				<section className={`${s.basket} ${s.reveal} ${s.toTop}`}>
					<hr />
					<h3 className={s.title}>Lorem ipsum dolor sit amet.</h3>
					<div className={s.items}>
						{jewelry.brass.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</section>
			</article>
		</div>
	);
};

export default Jewelry;
