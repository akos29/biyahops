import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workStyle from '../styles/HowWeWork.module.css';

const WhereWeOperate_A = () => {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<div className='ip-5'>
				<Row>
					<h2 className='ip-5' style={{ textAlign: 'center' }}>
						Where We Operate{' '}
					</h2>
					<Col sm={6}>
						<p className={workStyle.text}>
							The varied background and location of residence of our employees
							and equipment plays a pivotal role in the effortless deployment of
							our services in any corner of the country. With projects across
							the country from the most populous regions of Oromia and Amhara to
							the capital Addis Ababa, our presence is felt in different
							ventures of roads and construction across Ethiopia.
						</p>
					</Col>
					<Col sm={6}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/slide1.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default WhereWeOperate_A;
