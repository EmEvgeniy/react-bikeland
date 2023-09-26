import { useState } from "react";
import { useGetBlogQuery } from "../../../store/middleWares/blogApi";
import Container from "../../../components/container/Container";
import BlogCard from "../../../components/UI/blogCard/BlogCard";

const BlogCatalog = () => {
	const [active, setActive] = useState(false);
	const { data = [], isSuccess } = useGetBlogQuery();
	return (
		<>
			{isSuccess && data?.items?.length !== 0 && (
				<Container>
					{isSuccess && data.items.length !== 0 && (
						<div className='inner'>
							{active
								? data?.items?.map((el, index) => (
										<BlogCard data={el} key={index} index={index} />))
								: data?.items
										?.slice(0, 4)
										.map((el, index) => (
											<BlogCard data={el} key={index} index={index} />
										))}
						</div>
					)}
					<div className='main_btn_wrap'>
						{data?.items?.length && (
							<span
								className={active ? `main_btn active` : `main_btn`}
								onClick={() => setActive(true)}>
								Загрузить ещё
							</span>
						)}
					</div>
				</Container>
			)}
		</>
	);
};

export default BlogCatalog;
