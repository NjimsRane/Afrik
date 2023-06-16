import banner from "../../assets/images/products/Baskets.jpg";
import s from "./Products.module.css";
import woven from "../../data/baskets1.json";
import tonga from "../../data/baskets2.json";
import makenge from "../../data/baskets3.json";

const Baskets = () => {
	return (
		<div className={s.baskets} style={{backgroundColor: "white"}}>
			<img src={banner} alt="banner" />
			<div className={s.backetContainer}>
				<h2>WOVEN BASKETS</h2>
				<div className={s.basket}>
					{woven.map((item) => (
						<img src={item.imgUrl} key={item.id} />
					))}
				</div>
			</div>
			<div className={s.backetContainer}>
				<h2>WOVEN MOZAMBIQUE BASKETS</h2>
				<div className={s.basket}>
					{tonga.map((item) => (
						<img src={item.imgUrl} key={item.id} />
					))}
				</div>
			</div>
			<div className={s.backetContainer}>
				<h2>MAKENGE BASKETS</h2>
				<div className={s.basket}>
					{makenge.map((item) => (
						<img src={item.imgUrl} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Baskets;
