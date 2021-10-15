import ArticleItem from './ArticleItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ArticleList = ({ projects }) => {
	return (
		<>
			<Container>
				<Row className='justify-content-md-center g-5'>
					{projects.map((project) => (
						<ArticleItem project={project} key={project.id} />
					))}
				</Row>
			</Container>

			{/* <div className={articleStyle.grid}>
        
      </div> */}
		</>
	);
};

export default ArticleList;
