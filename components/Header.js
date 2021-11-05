import headerStyle from '../styles/Header.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			{/* <div className='slideContainer'> */}
			<Carousel className={cx(headerStyle.slide)}>
				<Carousel.Item interval={5000}>
					{/* <Link href="/project/[id]" as={`/project/1`}> */}
					{/* <ResponsiveEmbed aspectRatio="16by9"> */}
					<img
						src={prefix + '/slide1.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
						/* style={{ alignContent: 'center'}}  */
					/>
					{/* 
          </ResponsiveEmbed> */}
					<Carousel.Caption className={headerStyle.bgText}>
						<h3 className={headerStyle.heading}>Welcome to Lithops!</h3>
						<p className={headerStyle.text}>
							Building your future! Building your roads.
						</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>

				<Carousel.Item interval={5000}>
					{/* <Link href="/project/[id]" as={`/project/2`}> */}
					<img
						src={prefix + '/Internal-Wall-Painting.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
					/>
					<Carousel.Caption className={headerStyle.bgText}>
						<h3 className={headerStyle.heading}>First slide label</h3>
						<p className={headerStyle.text}>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					{/* <Link href="/project/[id]" as={`/project/2`}> */}
					<img
						src={prefix + '/Interior-Design.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
					/>
					<Carousel.Caption className={headerStyle.bgText}>
						<h3 className={headerStyle.heading}>First slide label</h3>
						<p className={headerStyle.text}>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>

				<Carousel.Item>
					{/* <Link href="/project/[id]" as={`/project/3`}> */}
					<img
						src={prefix + '/slide4.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
					/>
					<Carousel.Caption className={headerStyle.bgText}>
						<h3 className={headerStyle.heading}>First slide label</h3>
						<p className={headerStyle.text}>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>
			</Carousel>
			{/* 	</div> */}
		</>
	);
};

export default Header;
