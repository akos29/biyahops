import React from 'react';

import projectStyle from '../styles/Project.module.css';
import workStyle from '../styles/HowWeWork.module.css';
import Link from 'next/link';

const gallery = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<div className='container' style={{ backgroundColor: '#edf1fc' }}>
				<h2 className='ip-5'>Our Activities</h2>
				<div className={workStyle.container}>
					<div className={workStyle.item}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/road.jpg'}
							alt='How we work'
							style={{ animationDuration: '1s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/landscape.jpg'}
							alt='Landscaping'
							style={{ animationDuration: '2s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/slide2.jpg'}
							alt='How we work'
							style={{ animationDuration: '3s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/slide1.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */ style={{ animationDuration: '4s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/Internal-Wall-Painting.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */ style={{ animationDuration: '4.5s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/roadConstruction.jfif'}
							alt='How we work'
							style={{ animationDuration: '5s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/volvo.jpg'}
							alt='How we work'
							style={{ animationDuration: '5s' }}
						/>
					</div>
					<div className={workStyle.item}>
						<img
							className={workStyle.image}
							src={prefix + '/Smooth-Wheel-Compactor.jpg'}
							alt='How we work'
							style={{ animationDuration: '5s' }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default gallery;
