import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import testimonialStyle from '../styles/Testimonial.module.css';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const Testimonial = () => {
	const cx = (...classNames) => classNames.join(' ');

	return (
		<>
			<Container
				fluid
				style={{ background: 'var(--bs-primary)', minHeight: '207px' }}
			>
				<Container>
					<h2 className={cx(testimonialStyle.header, 'ip-3')}>Testimonials</h2>
					<Row>
						<Col md={6}>
							<blockquote className='blockquote'>
								<p className={cx(testimonialStyle.quote, 'mb-0 ip-3')}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
									a.
								</p>
								<footer className='blockquote-footer '>
									Mr. Belay Adera{' '}
									<cite title='CEO, BD Lithops'>CEO, BD Lithops</cite>{' '}
									<img
										src={prefix + '/Biya.jpg'}
										alt=''
										height='50px'
										style={{
											borderRadius: '25px',
											filter: 'brightness(90%)',
											filter: 'grayscale(70%)',
										}}
									/>
								</footer>
							</blockquote>
						</Col>
						<Col md={6}>
							<blockquote className='blockquote'>
								<p className={cx(testimonialStyle.quote, 'mb-0 ip-3')}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
									a.
								</p>
								<footer
									className={cx(
										/* testimonialStyle.quote, */ 'blockquote-footer '
									)}
								>
									Mr. Dawit Adera{' '}
									<cite title='Board Member, BD Lithops'>
										Board Member, BD Lithops
									</cite>{' '}
									<img
										src={prefix + '/Dawit-Adera.jpg'}
										alt='Dawit Adera'
										height='50'
										style={{
											borderRadius: '25px',
											filter: 'brightness(90%)',
											filter: 'grayscale(70%)',
										}}
									/>
								</footer>
							</blockquote>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Testimonial;
