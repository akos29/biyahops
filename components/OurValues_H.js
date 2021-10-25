import React from 'react';
import valuesStyle from '../styles/OurValues_H.module.css';

const OurValues_H = () => {
	const cx = (...classNames) => classNames.join(' ');

	return (
		<>
			<div className={cx(valuesStyle.valueDetail, 'ip-3')}>
				<h2
					className={cx(valuesStyle.valueDetail, 'ip-3')}
					style={{ textAlign: 'center' }}
				>
					Our Values
				</h2>
				<h3 className={cx(valuesStyle.values, 'ip-3')}>Safety</h3>
				<p className={cx(valuesStyle.valueDetail, 'ip-3')}>
					We give emphasis and priority to the safety of our employees and make
					safety procedures the culture of our company
				</p>

				<h3 className={cx(valuesStyle.values, 'ip-3')}>Accountability</h3>
				<p className={cx(valuesStyle.valueDetail, 'ip-3')}>
					We pride ourselves with holding our accountability as a cornerstone of
					the company
				</p>
				<h3 className={cx(valuesStyle.values, 'ip-3')}>Integrity</h3>
				<p className={cx(valuesStyle.valueDetail, 'ip-3')}>
					We will not compromise the quality of our work, the relation we have
					with our employees or our clients
				</p>
				<h3 className={cx(valuesStyle.values, 'ip-3')}>Teamwork</h3>
				<p className={cx(valuesStyle.valueDetail, 'ip-3')}>
					Our philosophy of teamwork allows us to work together in the company
					as well as with clients to deliver better services
				</p>
			</div>
		</>
	);
};

export default OurValues_H;
