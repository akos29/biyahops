import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', checkScrollTop);
	}
	return (
		<FontAwesomeIcon
			icon={faArrowUp}
			className='scrollTop'
			onClick={scrollTop}
			style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
		/>
	);
};

export default ScrollArrow;
