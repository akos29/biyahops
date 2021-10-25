import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workStyle from '../styles/HowWeWork.module.css';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const howWeWork = () => {
	return (
		<>
			<div className='ip-5'>
				<Row>
					<h2 className='ip-5' style={{ textAlign: 'center' }}>
						How We Work
					</h2>
					<Col sm={6}>
						{' '}
						<p className={workStyle.text}>
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
							className={workStyle.image}
							src={prefix + '/Internal-Wall-Painting.jpg'}
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

export default howWeWork;
