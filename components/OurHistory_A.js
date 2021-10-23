import React from 'react';
import Media from 'react-bootstrap/Media';

const OurHistory_A = () => {
	return (
		<>
			<h2 className='ip-3' style={{ textAlign: 'center' }}>
				Our History
			</h2>
			<Media>
				<img
					width={64}
					height={64}
					className='align-self-start mr-3'
					src='smooth-wheel-compactor.jpg'
					alt='Generic placeholder'
				/>
				<div className='ratio ratio-1x1'>
					<div>1x1</div>
				</div>
				<Media.Body>
					<h5>Media Heading</h5>
					<p>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
						scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
						in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
						nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</p>
				</Media.Body>
				<Media>
					<img
						width={64}
						height={64}
						className='align-self-start mr-3'
						src='fire.jpg'
						alt='Generic placeholder'
					/>
					<Media.Body>
						<h5>Media Heading</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
							in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>

						<p>
							Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
							eu leo. Cum sociis natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus.
						</p>
					</Media.Body>
				</Media>

				<Media>
					<img
						width={64}
						height={64}
						className='align-self-center mr-3'
						src='fire.jpg'
						alt='Generic placeholder'
					/>
					<Media.Body>
						<h5>Media Heading</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
							in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>

						<p>
							Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
							eu leo. Cum sociis natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus.
						</p>
					</Media.Body>
				</Media>

				<Media>
					<img
						width={64}
						height={64}
						className='align-self-end mr-3'
						src='fire.jpg'
						alt='Generic placeholder'
					/>
					<Media.Body>
						<h5>Media Heading</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
							in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>

						<p className='mb-0'>
							Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
							eu leo. Cum sociis natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus.
						</p>
					</Media.Body>
				</Media>
			</Media>
		</>
	);
};

export default OurHistory_A;
