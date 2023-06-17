import banner from "../../assets/images/products/Baskets.jpg";
import s from "./Products.module.css";
import basket from "../../data/baskets.json";

const Baskets = () => {
	return (
		<div className={s.basketsContainer}>
			<div className={s.banner}>
				<img src={banner} alt="banner" />
			</div>
			<div className={s.baskets}>
				<div className={s.basket}>
					<hr />
					<h3 className={s.title}>njimoke rane soulemnaou</h3>
					<div className={s.items}>
						{basket.woven.map((item) => (
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
						{basket.tonga.map((item) => (
							<div key={item.id}>
								<img src={item.imgUrl} alt="basket" />
							</div>
						))}
					</div>
				</div>
				<div className={s.basket}>
					<h3 className={s.title}>njimoke rane soulemnaou</h3>
					<div className={s.items}>
						{basket.makenge.map((item) => (
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

export default Baskets;
