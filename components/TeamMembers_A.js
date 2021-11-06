import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FaPhoneAlt, FaInbox } from 'react-icons/fa';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const TeamMembers_A = () => {
	const cx = (...classNames) => classNames.join(' ');

	return (
		<>
			<Container>
				<h2 style={{ textAlign: 'center' }}> Our Team Members</h2>
				<Row>
					<Col md={6} className='ip-5'>
						<img
							src={prefix + '/belay.jpg'}
							alt=''
							height='150px'
							style={{
								borderRadius: '25px',
								filter: 'brightness(90%)',
								filter: 'grayscale(70%)',
							}}
						/>
						<p>Mr. Belay Adera </p>
						<cite title='CEO, BD Lithops'>CEO, BD Lithops</cite> <br />
						<a href='tel:+251912055400'>
							<FaPhoneAlt /> +2519 12 05 54 00
						</a>
						<br />
						<a href='mailto:info@lithops.com'>
							<FaInbox />
							&nbsp; info@lithops.com
						</a>
					</Col>
					<Col md={6} className='ip-5'>
						<img
							src={prefix + '/Dawit-Adera.jpg'}
							alt='Dawit Adera'
							height='150'
							style={{
								borderRadius: '25px',
								filter: 'brightness(90%)',
								filter: 'grayscale(70%)',
							}}
						/>
						<p> Mr. Dawit Adera </p>
						<cite title='Board Member, BD Lithops'>
							Board Member, BD Lithops
						</cite>{' '}
						<br />
						<a href='tel:+251912055400'>
							<FaPhoneAlt /> +2519 12 05 54 00
						</a>
						<br />
						<a href='mailto:info@lithops.com'>
							<FaInbox />
							&nbsp; info@lithops.com
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TeamMembers_A;
