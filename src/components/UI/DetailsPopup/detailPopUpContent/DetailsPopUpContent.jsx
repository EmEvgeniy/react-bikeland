import { useSelector } from "react-redux";
import DetailsPopUpContentSlider from "./detailsPopUpContentSlider/DetailsPopUpContentSlider";
import TextContent from "./textContent/TextContent";
import Image from "next/image";

export default function DetailsPopUpContent() {
	const value = useSelector((state) => state.cardDetails.value);
	console.log(value);
	return (
		<div className='inner'>
			{value?.photos?.length > 1 ? (
				<DetailsPopUpContentSlider items={value.photos} />
			) : (
				<p>asd</p>
			)}
			<TextContent data={value} />
		</div>
	);
}
