import Link from 'next/link';
import Meta from '../../../components/Meta';

export default function index() {
	return (
		<>
			<Meta title='Landscape Design' description='Lihops ladnscape design' />
			<div className='container'>
				<h1 className='ip-5'>Landscape</h1>
				<div className='overflow'></div>
				<div className='overflow'></div>

				<br />
				<Link href='/'> Go Back &larr;</Link>
			</div>
		</>
	);
}
