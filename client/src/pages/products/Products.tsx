import s from "./Products.module.css";
import baskets from "../../assets/images/products/Baskets.jpg";
import trinkets from "../../assets/images/products/Trinkets.jpg";
import jewelry from "../../assets/images/products/Jewelry.jpg";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const Products = () => {
	useEffect(() => {
		document.title = "Products | Afrik";
	}, []);
	return (
		<div className={s.products}>
			<Link to={`/products/baskets`}>
				<img src={baskets} alt="banner" />
			</Link>
			<Link to={`/products/trinkets`}>
				<img src={trinkets} alt="banner" />
			</Link>
			<Link to={`/products/jewelry`}>
				<img src={jewelry} alt="banner" />
			</Link>

			{/* <img src={banner} alt="" />
			<img src={banner} alt="" />
			<img src={banner} alt="" /> */}
		</div>
	);
};

export default Products;
