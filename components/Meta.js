import Head from 'next/head';

const Meta = ({ keyword, description, title }) => {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='keyword' content={keyword} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />

				{/* 	<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'
					rel='stylesheet'
				/> */}
				<title>{title}</title>
			</Head>
		</>
	);
};

Meta.defaultProps = {
	title: 'Lithops Construction',
	keyword:
		'Ethiopian construction, road constrution, building construction, ethiopia road, ethiopia building',
	description: 'Building your future! Building your roads. ',
};
export default Meta;
