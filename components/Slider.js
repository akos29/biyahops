import Link from 'next/link';

export default function SLider() {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<div className='slider'>
				<div className='slides'>
					<div name='slide-1' id='slide-1'>
						<img
							src={prefix + '/slide1.jpg'}
							alt='Smooth-Wheel-Compactor'
							className='slides'
						/>
					</div>
					<div name='slide-2' id='slide-2'>
						<img
							src={prefix + '/slide2.jpg'}
							alt='Smooth-Wheel-Compactor'
							className='slides'
						/>
					</div>
					<div id='slide-3'>
						<img
							src={prefix + '/slide3.jpg'}
							alt='Smooth-Wheel-Compactor'
							className='slides'
						/>
					</div>
					<div id='slide-4'>
						<img
							src={prefix + '/slide4.jpg'}
							alt='Smooth-Wheel-Compactor'
							className='slides'
						/>
					</div>
					<div id='slide-5'>
						<img
							src={prefix + '/slide4.jpg'}
							alt='Smooth-Wheel-Compactor'
							className='slides'
						/>
					</div>
				</div>

				<Link href='#slide-1' scroll={false}>
					<a>1</a>
				</Link>
				<Link href='#slide-2' scroll={false}>
					<a>2</a>
				</Link>
				<Link href='#slide-3' scroll={false}>
					<a>3</a>
				</Link>
				<Link href='#slide-4' scroll={false}>
					<a>4</a>
				</Link>
				<Link href='#slide-5' scroll={false}>
					<a>5</a>
				</Link>
			</div>
		</>
	);
}
