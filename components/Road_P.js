import Container from 'react-bootstrap/Container';

const Road_P = () => {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<Container fluid>
				<h2 className='ip-3' style={{ textAlign: 'center' }}>
					{' '}
					Earthmoving Plant Lalibela, Ethiopia
				</h2>

				<img
					src={prefix + '/Smooth-Wheel-Compactor.jpg'}
					alt='Smooth-Wheel-Compactor'
					style={{ width: 300, height: 'auto' }}
				/>
				<p>
					{' '}
					Looking for earthmoving plant hire services in Sydney, Brisbane or
					Melbourne? From small domestic projects to major commercial
					developments – you can trust Eastern Plant Hire!
				</p>
			</Container>
		</>
	);
};

export default Road_P;
