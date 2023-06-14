import {AiOutlineCaretLeft, AiOutlineCaretRight} from "react-icons/ai";

import {massai, decor, safari} from "../../assets";
import {useState, useCallback, useEffect} from "react";

import s from "./Hero.module.css";
const imageData = [
	{
		label: "image1",
		alt: "soule",
		url: massai,
	},
	{
		label: "image2",
		alt: "soule",
		url: decor,
	},
	{
		label: "image3",
		alt: "soule",
		url: safari,
	},
];
const Carousel = ({effect = "slide"}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = useCallback(() => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
		);
	}, [imageData.length]);
	const handleNext = useCallback(() => {
		setActiveIndex((prevIndex) =>
			prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
		);
	}, [imageData.length]);

	useEffect(() => {
		const timer = setInterval(() => {
			handleNext();
		}, 5000);
		return () => clearInterval(timer);
	}, [handleNext]);
	return (
		<div
			className={`${s.hero}${effect}`}
			aria-live="polite"
			aria-roledescription="carousel"
		>
			<div className={s.carouselWrapper}>
				{imageData.map((image, index) => (
					<div
						key={index}
						className={s.slider}
						style={
							effect === "slide"
								? {transform: `translateX(-${activeIndex * 100}%)`}
								: {}
						}
					>
						<img src={image.url} alt={image.alt} />
						<h2>{image.label}</h2>
					</div>
				))}
			</div>

			<>
				<button
					className={s.control}
					onClick={handlePrev}
					aria-label="Previous slide"
				>
					<AiOutlineCaretLeft size={25} />
				</button>
				<button
					className={s.control}
					onClick={handleNext}
					aria-label="Next slide"
				>
					<AiOutlineCaretRight size={25} />
				</button>
			</>
		</div>
	);
};
export default Carousel;
