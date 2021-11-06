import buildingStyle from '../styles/Building_P.module.css';
import { Row, Col } from 'react-bootstrap';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

export default function Landscape() {
	return (
		<>
			<div className='ip-5'>
				<Row className='ip-5'>
					<h2 className='ip-5' style={{ textAlign: 'center' }}>
						Our Landscape Works
					</h2>
					<Col sm={6} className={buildingStyle.shadowContainer}>
						{' '}
						<p className={buildingStyle.text}>
							Devoted to enhancing the road construction industry in Ethiopia by
							providing the highest quality projects and services, utilizing
							high-end technologies and approaches and working in partnership
							with clients to deliver top-quality solutions. Our work practices
							are highlighted by a culture for environmental responsibility and
							safety while creating an environment of growth and respect amongst
							our employees and for the communities that we serve.
						</p>
					</Col>
					<Col sm={6}>
						{' '}
						<img
							className={buildingStyle.image}
							src={prefix + '/landscape1.jpg'}
							alt='How we work'
							height='324px'
							/* width='300px'
							height='500px' */
						/>
					</Col>
				</Row>
				<Row className='ip-5'>
					<Col sm={6}>
						{' '}
						<img
							className={buildingStyle.image}
							src={prefix + '/landscape2.jpg'}
							alt='How we work'
							height='324px'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={6} className={buildingStyle.shadowContainer}>
						{' '}
						<p className={buildingStyle.text}>
							Devoted to enhancing the road construction industry in Ethiopia by
							providing the highest quality projects and services, utilizing
							high-end technologies and approaches and working in partnership
							with clients to deliver top-quality solutions. Our work practices
							are highlighted by a culture for environmental responsibility and
							safety while creating an environment of growth and respect amongst
							our employees and for the communities that we serve.
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
}
