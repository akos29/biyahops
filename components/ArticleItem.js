import Link from 'next/link';
import articleStyle from '../styles/ArticleItem.module.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ArticleItem = ({ project }) => {
	return (
		<Col md={6}>
			<Link href='/project/[id]' as={`/project/${project.id}`}>
				<Card className={articleStyle.card}>
					<Card.Body>
						<h3> {project.title}</h3> {/* rendered */}
						{/* <Card.Text> */}
						<div
							className='ip-0'
							/* dangerouslySetInnerHTML={{ __html: project.content.rendered }} */
						>
							{project.excerpt}
						</div>
						{/* </Card.Text> */}
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default ArticleItem;
