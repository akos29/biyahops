import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Building from '../components/Building_P';
import Road from '../components/Road_P';
import Others from '../components/Others_P';

const projects = () => {
	return (
		<>
			<Container>
				<h1 className='ip-5'>Our Projects</h1>

				<Tab.Container
					id='list-group-tabs-example'
					defaultActiveKey='#Building'
				>
					<Row>
						<Col sm={4}>
							<ListGroup>
								<ListGroup.Item action href='#Building'>
									Building Construction
								</ListGroup.Item>
								<ListGroup.Item action href='#Road'>
									Road Construction
								</ListGroup.Item>
								<ListGroup.Item action href='#Others'>
									Others
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col sm={8}>
							<Tab.Content>
								<Tab.Pane eventKey='#Building'>
									<Building />
								</Tab.Pane>
								<Tab.Pane eventKey='#Road'>
									<Road />
								</Tab.Pane>
								<Tab.Pane eventKey='#Others'>
									<Others />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		</>
	);
};

export default projects;
