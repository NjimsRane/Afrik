import jewelryBanner from "../../assets/images/products/Jewelry.jpg";
import s from "./Products.module.css";
import jewelry from "../../data/jewelry.json";

const Jewelry = () => {
	return (
		<div className={s.basketsContainer}>
			<div className={s.banner}>
				<img src={jewelryBanner} alt="banner" />
			</div>
			<div className={s.baskets}>
				<div className={s.basket}>
					<hr />
					<h3 className={s.title}>njimoke rane soulemnaou</h3>
					<div className={s.items}>
						{jewelry.beads.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</div>
				<div className={s.basket}>
					<hr />
					<h3 className={s.title}>njimoke rane soulemnaou</h3>
					<div className={s.items}>
						{jewelry.jewelry.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</div>
				<div className={s.basket}>
					<h3 className={s.title}>njimoke rane soulemnaou</h3>
					<div className={s.items}>
						{jewelry.brass.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jewelry;
