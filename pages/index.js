import { server } from '../config2';
import Meta from '../components/Meta';
import Testimonial from '../components/Testimonial';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';

import Services from '../components/Services';

export default function Home({ projects }) {
	return (
		<>
			<Meta title='Welcome to Lithops' />
			<Header />
			<div className='container' /* style={{ backgroundColor: '#f8f9fa' }} */>
				<h2 className='ip-5'>Our Services </h2>

				<Services />
			</div>
			<Testimonial />
			<div className='container'>
				<h2 className='ip-5'>Projects </h2>

				<ArticleList projects={projects} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	//const res = await fetch(`${server}/api/articles`);
	//const articles = await res.json();
	const res1 = await fetch(`${server}/wp-json/wp/v2/project`);
	const projects = await res1.json();

	return {
		props: { projects }, //articles
	};
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: { articles },
//   };
// };
