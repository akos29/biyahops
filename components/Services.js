import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projectStyle from '../styles/Project.module.css';
import Link from 'next/link';

const Services = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<Container>
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
									style={{
										backgroundSize: 'cover',
									}}
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
										projectStyle.bgImage
									)}
									style={{
										background: `url(${prefix}+'/security.jpg')`,
										filter: 'blur(0.1px)',
										WebkitFilter: 'blur(0.1px)',
										height: '100%',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
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
										projectStyle.bgImage
									)}
									style={{
										background: `url(${prefix}+'/security.jpg')`,
										filter: 'blur(0.1px)',
										WebkitFilter: 'blur(0.1px)',
										height: '100%',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
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

				{/*   {projects.map((project) => (
            <NewsItem project={project} key={project.id} />
          ))} */}
			</Container>
		</>
	);
};

export default Services;
