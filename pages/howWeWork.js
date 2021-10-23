import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Sustainbility from '../components/Sustainablity_H';
import SafetyProcedure from '../components/SafetyProcedure_H';
import Quality from '../components/Quality_H';
import OurValues from '../components/OurValues_H';
import OrganizationalPolicy from '../components/OrganizationalPolicy_H';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const howWeWork = () => {
	return (
		<>
			<Container>
				<h1 className='ip-5'>How We Work</h1>

				{/* <Tab.Container
					id='list-group-tabs-example'
					defaultActiveKey='#SafetyProcedure'
				>
					<Row>
						<Col sm={4}>
							<ListGroup>
								<ListGroup.Item action href='#SafetyProcedure'>
									Safety Procedure
								</ListGroup.Item>
								<ListGroup.Item action href='#Sustainbility'>
									Sustainbility
								</ListGroup.Item>
								<ListGroup.Item action href='#Quality'>
									Quality
								</ListGroup.Item>
								<ListGroup.Item action href='#OurValues'>
									Our Values
								</ListGroup.Item>
								<ListGroup.Item action href='#OrganizationalPolicy'>
									Organizational Policy
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col sm={8}>
							<Tab.Content>
								<Tab.Pane eventKey='#SafetyProcedure'>
									<SafetyProcedure />
								</Tab.Pane>
								<Tab.Pane eventKey='#Sustainbility'>
									<Sustainbility />
								</Tab.Pane>
								<Tab.Pane eventKey='#Quality'>
									<Quality />
								</Tab.Pane>
								<Tab.Pane eventKey='#OurValues'>
									<OurValues />
								</Tab.Pane>
								<Tab.Pane eventKey='#OrganizationalPolicy'>
									<OrganizationalPolicy />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container> */}

				<Row>
					<Col sm={6}>
						{' '}
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
					<Col sm={4}>
						{' '}
						<img
							src={prefix + '/slide1.jpg'}
							alt='How we work'
							/* width='300px'
							height='500px' */
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default howWeWork;
