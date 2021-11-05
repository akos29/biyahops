import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HowWeWork_H from '../components/HowWeWork_H';

import OurValues from '../components/OurValues_H';

import WhereWeOperate_A from '../components/WhereWeOperate_A';
import { useRouter } from 'next/router';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const howWeWork = () => {
	const router = useRouter();
	const { id } = router.query;
	/* if(id==='HowWeWork') */
	console.log(id);

	return (
		<>
			<div className='ip-5'>
				<Tab.Container
					id='list-group-tabs-example'
					defaultActiveKey='#OurValues'
				>
					<Row>
						<Col sm={3}>
							<ListGroup style={{ paddingTop: '3.5rem' }}>
								<ListGroup.Item action href='#HowWeWork'>
									How We Work
								</ListGroup.Item>
								<ListGroup.Item action href='#WhereWeWork'>
									Where We Work
								</ListGroup.Item>

								<ListGroup.Item action href='#OurValues'>
									Our Values
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col sm={8}>
							<Tab.Content>
								<Tab.Pane eventKey='#HowWeWork'>
									<HowWeWork_H />
								</Tab.Pane>
								<Tab.Pane eventKey='#WhereWeWork'>
									<WhereWeOperate_A />
								</Tab.Pane>

								<Tab.Pane eventKey='#OurValues'>
									<OurValues />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
		</>
	);
};

export default howWeWork;
