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
			<div className={projectStyle.container}>
				<div className={cx(projectStyle.flipBox, projectStyle.item)}>
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
						<Link href='/service/road' as={`/service/road`}>
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

				{/* Finishing */}

				<div className={cx(projectStyle.flipBox, projectStyle.item)}>
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
						<Link href='/service/finishing' as={`/service/finishing`}>
							<div className={cx(projectStyle.flipBoxBack)}>
								<h4 className='ip-5'>Finishing Works</h4>
								<p className={(projectStyle.text, 'ip-1')}>
									Cillum laboris deserunt voluptate et deserunt sit cillum
									aliquip consequat proident aute voluptate veniam. Nisi culpa
									occaecat adipisicing laboris deserunt aute .
								</p>
								<button className='btn btn-danger ip-2'>Read More</button>
							</div>
						</Link>
					</div>
				</div>

				{/* Building */}

				<div className={cx(projectStyle.flipBox, projectStyle.item)}>
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
						<Link href='/service/building' as={`/service/building`}>
							<div className={cx(projectStyle.flipBoxBack)}>
								<h4 className='ip-5'>Building Construction</h4>
								<p className={(projectStyle.text, 'ip-1')}>
									Cillum laboris deserunt voluptate et deserunt sit cillum
									aliquip consequat proident aute voluptate veniam. Nisi culpa
									occaecat adipisicing laboris deserunt aute .
								</p>
								<button className='btn btn-danger ip-2'>Read More</button>
							</div>
						</Link>
					</div>
				</div>

				{/*Landscape   */}

				<div className={cx(projectStyle.flipBox, projectStyle.item)}>
					<div className={cx(projectStyle.flipBoxInner, 'center')}>
						<div
							className={cx(
								projectStyle.flipBoxFront,
								projectStyle.bgImage,
								projectStyle.landscape
							)}
						>
							<h4 className={projectStyle.bgText}>Landscaping</h4>
						</div>
						<Link href='/service/landscape' as={`/service/landscape`}>
							<div className={cx(projectStyle.flipBoxBack)}>
								<h4 className='ip-5'>Landscaping</h4>
								<p className={(projectStyle.text, 'ip-1')}>
									Cillum laboris deserunt voluptate et deserunt sit cillum
									aliquip consequat proident aute voluptate veniam. Nisi culpa
									occaecat adipisicing laboris deserunt aute .
								</p>
								<button className='btn btn-danger ip-2'>Read More</button>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
