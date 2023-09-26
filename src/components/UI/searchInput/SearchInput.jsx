import { useEffect, useState } from "react";
import SearchIcon from "./icon/SearchIcon";
import { useDispatch } from "react-redux";
import {
	addCardItem,
	changeCardStatus,
} from "../../../store/slices/cardDetailsSlice";
import axios from "axios";
import classes from "./searchItem.module.css";

const SearchInput = () => {
	const [list, setList] = useState([]);
	const [searchItem, setSearchItem] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		const getListData = async (item) => {
			await axios
				.get(
					`https://api.it-test.uz/v1/products?title=${item}&status_id=4&page=1&size=50`
				)
				.then((res) => setList(res.data));
		};
		getListData(searchItem);
	}, [searchItem]);

	return (
		<div className={classes.SearchInput}>
			<div className={classes.SearchInput_wrapper}>
				<SearchIcon className='icon' />
				<input
					type='text'
					placeholder='Искать на сайте'
					value={searchItem}
					onChange={(e) => setSearchItem(e.target.value)}
				/>
			</div>
			<div
				className={
					searchItem ? `${classes.list} ${classes.active}` : `${classes.list}`
				}>
				{list?.items?.length ? (
					list?.items?.map((el, index) => (
						<p
							key={index}
							onClick={() =>
								dispatch(addCardItem(el)) & dispatch(changeCardStatus(true))
							}>
							{el.title}
						</p>
					))
				) : (
					<p>Ничего не найдено</p>
				)}
			</div>
		</div>
	);
};

export default SearchInput;
