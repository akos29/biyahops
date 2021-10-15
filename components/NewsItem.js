import React from 'react';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import projectStyle from '../styles/Project.module.css';

const NewsItem = ({ project }) => {
	const cx = (...classNames) => classNames.join(' ');
	return (
		<>
			<Col md={4}>
				<Link href='/project/[id]' as={`/project/${project.id}`}>
					<div className={cx(projectStyle.flipBox, 'ip-1')}>
						<div className={cx(projectStyle.flipBoxInner, 'center')}>
							<div
								className={cx(projectStyle.flipBoxFront, projectStyle.bgImage)}
								style={{
									background: "url('./security.jpg')",
									filter: 'blur(0.1px)',
									WebkitFilter: 'blur(0.1px)',
									height: '100%',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
								}}
							>
								<h3 className={projectStyle.bgText}>
									{project.title.rendered}
								</h3>
							</div>
							<div className={cx(projectStyle.flipBoxBack)}>
								<h3 className='ip-5'>{project.title.rendered}</h3>
								<div
									className='ip-0'
									dangerouslySetInnerHTML={{ __html: project.content.rendered }}
								></div>
								<button className='btn btn-danger ip-2'>Read More</button>
							</div>
						</div>
					</div>
				</Link>
			</Col>
		</>
	);
};

export default NewsItem;
