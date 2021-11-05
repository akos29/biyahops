import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projectStyle from '../styles/Project.module.css';
import workStyle from '../styles/HowWeWork.module.css';
import Link from 'next/link';

const gallery = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<Container className='ip-5'>
				<h1>Gallery</h1>
				<Row className='justify-content-md-center g-5'>
					<Col md={3}>
						<div className={cx(projectStyle.flipBox, 'ip-1')}>
							<div className={cx(projectStyle.flipBoxInner, 'center')}>
								<div
									className={cx(
										projectStyle.flipBoxFront,
										projectStyle.bgImage,
										projectStyle.bld
									)}
								>
									<h4 className={projectStyle.bgText}>Building Construction</h4>
								</div>
								<Link href='/Services/building' as={`/project/building`}>
									<div className={cx(projectStyle.flipBoxBack)}>
										<h4 className='ip-5'>Building Construction</h4>
										<p className={(projectStyle.text, 'ip-1')}>
											Cillum laboris deserunt voluptate et deserunt sit cillum
											aliquip consequat proident aute voluptate veniam. Nisi
											culpa occaecat adipisicing laboris deserunt aute .
										</p>
										<button className='btn btn-danger ip-2'>Read More</button>
									</div>
								</Link>
							</div>
						</div>
					</Col>

					{/* Road */}

					<Col md={3}>
						<div className={cx(projectStyle.flipBox, 'ip-1')}>
							<div className={cx(projectStyle.flipBoxInner, 'center')}>
								<div
									className={cx(
										projectStyle.flipBoxFront,
										projectStyle.bgImage,
										projectStyle.road
									)}
								>
									<h4 className={projectStyle.bgText}>Road Construction</h4>
								</div>
								<Link href='/Services/Road' as={`/project/Road`}>
									<div className={cx(projectStyle.flipBoxBack)}>
										<h4 className='ip-5'>Road Construction</h4>
										<p className={(projectStyle.text, 'ip-1')}>
											Cillum laboris deserunt voluptate et deserunt sit cillum
											aliquip consequat proident aute voluptate veniam.
										</p>
										<button className='btn btn-danger ip-2'>Read More</button>
									</div>
								</Link>
							</div>
						</div>
					</Col>

					{/*Landscape   */}

					<Col md={3}>
						<div className={cx(projectStyle.flipBox, 'ip-1')}>
							<div className={cx(projectStyle.flipBoxInner, 'center')}>
								<div
									className={cx(
										projectStyle.flipBoxFront,
										projectStyle.bgImage,
										projectStyle.landscape
									)}
								>
									<h4 className={projectStyle.bgText}>Landscape Design</h4>
								</div>
								<Link href='/services/Landscape' as={`/service/Landscape`}>
									<div className={cx(projectStyle.flipBoxBack)}>
										<h4 className='ip-5'>Landscape Design</h4>
										<p className={(projectStyle.text, 'ip-1')}>
											Cillum laboris deserunt voluptate et deserunt sit cillum
											aliquip consequat proident aute voluptate veniam. Nisi
											culpa occaecat adipisicing laboris deserunt aute .
										</p>
										<button className='btn btn-danger ip-2'>Read More</button>
									</div>
								</Link>
							</div>
						</div>
					</Col>

					{/* Finishing */}
					<Col md={3}>
						<div className={cx(projectStyle.flipBox, 'ip-1')}>
							<div className={cx(projectStyle.flipBoxInner, 'center')}>
								<div
									className={cx(
										projectStyle.flipBoxFront,
										projectStyle.bgImage,
										projectStyle.finishing
									)}
								>
									<h4 className={projectStyle.bgText}>Finishing Works</h4>
								</div>
								<Link href='/Services/Finishing' as={`/project/Finishing`}>
									<div className={cx(projectStyle.flipBoxBack)}>
										<h4 className='ip-5'>Finishing Works</h4>
										<p className={(projectStyle.text, 'ip-1')}>
											Cillum laboris deserunt voluptate et deserunt sit cillum
											aliquip consequat proident aute voluptate veniam. Nisi
											culpa occaecat adipisicing laboris deserunt aute .
										</p>
										<button className='btn btn-danger ip-2'>Read More</button>
									</div>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div style={{ background: '#f8f9fa' }}>
				<Row className='ip-5'>
					<h2>Our Activities</h2>
					<Col sm={3}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/roadConstruction.jfif'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={3}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/volvo.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={3}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/slide3.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={3}>
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
				<Row className='ip-5'>
					<Col sm={3}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/roadConstruction.jfif'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={3}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/volvo.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={3}>
						{' '}
						<img
							className={workStyle.image}
							src={prefix + '/slide3.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
					<Col sm={3}>
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

export default gallery;
