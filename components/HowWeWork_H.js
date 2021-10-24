import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const howWeWork = () => {
	return (
		<>
			<div className='ip-5'>
				<Row>
					<Col sm={7}>
						{' '}
						<h1 className='ip-5'>How We Work</h1>
						<p>
							Devoted to enhancing the road construction industry in Ethiopia by
							providing the highest quality projects and services, utilizing
							high-end technologies and approaches and working in partnership
							with clients to deliver top-quality solutions. Our work practices
							are highlighted by a culture for environmental responsibility and
							safety while creating an environment of growth and respect amongst
							our employees and for the communities that we serve.
						</p>
					</Col>
					<Col sm={5}>
						{' '}
						<img
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

export default howWeWork;
