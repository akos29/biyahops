import headerStyle from '../styles/Header.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<Carousel className={cx(headerStyle.slide)}>
				<Carousel.Item interval={5000}>
					{/* <Link href="/project/[id]" as={`/project/1`}> */}
					{/* <ResponsiveEmbed aspectRatio="16by9"> */}
					<img
						src={prefix + '/slide1.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
					/>
					{/* 
          </ResponsiveEmbed> */}
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>

				<Carousel.Item interval={5000}>
					{/* <Link href="/project/[id]" as={`/project/2`}> */}
					<img
						src={prefix + '/slide2.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>

				<Carousel.Item>
					{/* <Link href="/project/[id]" as={`/project/3`}> */}
					<img
						src={prefix + '/slide3.jpg'}
						alt='Smooth-Wheel-Compactor'
						className={headerStyle.slide}
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
					{/* </Link> */}
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Header;
