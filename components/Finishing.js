import { Row, Col } from 'react-bootstrap';
import buildingStyle from '../styles/Building_P.module.css';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

export default function Finishing() {
	const cx = (...classNames) => classNames.join(' ');
	return (
		<>
			<div className='container'>
				<h2 className='ip-5' style={{ textAlign: 'center' }}>
					Our Finishing Works
				</h2>
				<div className={cx(buildingStyle.container)}>
					<div
						className={cx(buildingStyle.shadowContainer, buildingStyle.item1)}
					>
						{' '}
						<p className={buildingStyle.text}>
							Devoted to enhancing the road construction industry in Ethiopia by
							providing the highest quality projects and services, utilizing
							high-end technologies and approaches and working in partnership
							with clients to deliver top-quality solutions. Our work practices
							are highlighted by a culture for environmental responsibility and
							safety while creating an environment of growth and respect amongst
							our employees and for the communities that we serve.
						</p>
					</div>
					<div className={cx(buildingStyle.item2)}>
						{' '}
						<img
							className={buildingStyle.image}
							src={prefix + '/finishing1.jpg'}
							alt='How we work'
							height='324px'
							/* width='300px'
							height='500px' */
						/>
					</div>
					<div
						className={cx(buildingStyle.shadowContainer, buildingStyle.item1)}
					>
						{' '}
						<p className={buildingStyle.text}>
							Devoted to enhancing the road construction industry in Ethiopia by
							providing the highest quality projects and services, utilizing
							high-end technologies and approaches and working in partnership
							with clients to deliver top-quality solutions. Our work practices
							are highlighted by a culture for environmental responsibility and
							safety while creating an environment of growth and respect amongst
							our employees and for the communities that we serve.
						</p>
					</div>{' '}
					<div className={cx(buildingStyle.item2)}>
						{' '}
						<img
							className={buildingStyle.image}
							src={prefix + '/finishing2.jpg'}
							alt='How we work'
							height='324px'
							/* width='300px'
							height='500px' */
						/>
					</div>
				</div>
			</div>
		</>
	);
}
