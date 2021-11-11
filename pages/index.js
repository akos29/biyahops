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
	/* 	const res1 = await fetch(`${server}/wp-json/wp/v2/project`);
	const projects = await res1.json(); */
	const projects = [
		{
			id: '1',
			title: 'GitHub introduces dark mode and auto-merge pull request',
			excerpt:
				'GitHub today announced a bunch of new features at its virtual GitHub...',
			body: 'GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?',
		},
		{
			id: '2',
			title: 'What’s multi-cloud? And why should developers care?',
			excerpt:
				'Most developers don’t care about multi-cloud. But they should...',
			body: 'Most developers don’t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers',
		},
	];

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
