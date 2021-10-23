import Meta from '../components/Meta';
import aboutStyle from '../styles/About.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import WhereWeOperate_A from '../components/WhereWeOperate_A';
import OurValues_H from '../components/OurValues_H';
import OurHistory_A from '../components/OurHistory_A';
import VisionMission_A from '../components/VisionMission_A';
import TeamMembers_A from '../components/TeamMembers_A';
import Contact from '../components/Contact';

const about = () => {
	return (
		<>
			<Meta
				title='About BD Lithops construction'
				keyword='Where bdlithops work, bd lithops values, history, teamwork'
			/>
			<div className='bdw-14 ip-5 align-items-center'>
				{/* 	<h1 className='ip-5'>About</h1> */}

				<Tab.Container defaultActiveKey='#OurValues'>
					<Row>
						<Col sm={4}>
							{/* <div className={aboutStyle.optionBox}> */}
							<ListGroup id='tclist'>
								<ListGroup.Item action href='#WhereWeWork'>
									Where We Work
								</ListGroup.Item>
								<ListGroup.Item action href='#OurValues'>
									Our Values
								</ListGroup.Item>
								<ListGroup.Item action href='#OurHistory'>
									Our History
								</ListGroup.Item>
								<ListGroup.Item action href='#VisionMission'>
									BD Lithops' Vision &amp; Mission
								</ListGroup.Item>
								<ListGroup.Item action href='#TeamMembers'>
									Team Members
								</ListGroup.Item>
							</ListGroup>
							{/* </div> */}
						</Col>
						<Col sm={8}>
							<div className={aboutStyle.aboutContainer}>
								<Tab.Content
									data-bs-target='#tclist'
									data-bs-spy='scroll'
									tabIndex='0'
								>
									<Tab.Pane eventKey='#WhereWeWork'>
										<div className={aboutStyle.panelContent}>
											<WhereWeOperate_A />
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey='#OurValues'>
										<div className={aboutStyle.panelContent}>
											<OurValues_H />
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey='#OurHistory'>
										<div className={aboutStyle.panelContent}>
											<OurHistory_A />
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey='#VisionMission'>
										<div className={aboutStyle.panelContent}>
											<VisionMission_A />
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey='#TeamMembers'>
										<div className={aboutStyle.panelContent}>
											<TeamMembers_A />
										</div>
									</Tab.Pane>
								</Tab.Content>
							</div>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</>
	);
};

export default about;
