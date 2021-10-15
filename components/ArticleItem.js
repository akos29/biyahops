import Link from 'next/link';
import articleStyle from '../styles/ArticleItem.module.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ArticleItem = ({ project }) => {
	return (
		<Col md={6}>
			<Link
				href='/project/[id]'
				as={`/project/${project.id}`}
				project={project}
			>
				<Card className={articleStyle.card}>
					<Card.Body>
						<h3> {project.title.rendered}</h3>
						{/* <Card.Text> */}
						<div
							className='ip-0'
							dangerouslySetInnerHTML={{ __html: project.content.rendered }}
						></div>
						{/* </Card.Text> */}
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default ArticleItem;
