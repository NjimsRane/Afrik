import s from "./Products.module.css";
import banner from "../../assets/images/products/Baskets.jpg";
import {useEffect} from "react";
import {Link} from "react-router-dom";
const Products = () => {
	useEffect(() => {
		document.title = "Products | Afrik";
	}, []);
	return (
		<div className={s.products}>
			<Link to="/baskets">
				<img src={banner} alt="" />
			</Link>
			<img src={banner} alt="" />
			<img src={banner} alt="" />
			<img src={banner} alt="" />
		</div>
	);
};

export default Products;
