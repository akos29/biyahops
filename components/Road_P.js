import { Row, Col } from 'react-bootstrap';
import buildingStyle from '../styles/Building_P.module.css';

const Road_P = () => {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<div className='ip-5'>
				<Row className='ip-5'>
					<h2 className='ip-5' style={{ textAlign: 'center' }}>
						Our Road Constructions
					</h2>
					<Col sm={6} className={buildingStyle.shadowContainer}>
						{' '}
						<p className={buildingStyle.text}>
							Looking for earthmoving plant hire services in Sydney, Brisbane or
							Melbourne? From small domestic projects to major commercial
							developments – you can trust Eastern Plant Hire!
						</p>
					</Col>
					<Col sm={6}>
						{' '}
						<img
							className={buildingStyle.image}
							src={prefix + '/Smooth-Wheel-Compactor.jpg'}
							alt='Smooth-Wheel-Compactor'
							style={{ width: 300, height: 'auto' }}
						/>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Road_P;
