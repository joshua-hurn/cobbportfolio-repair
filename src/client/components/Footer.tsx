import React, { useState } from 'react';
import Meet from './Meet';
import "../scss/app.scss"

const Footer = () => {
	const [meetToggle, setMeetToggle] = useState(false);

	const showMeet = meetToggle ? 'width1' : '';
	

	return (
		<div className='footer'>
			<p
				className='meetfooter'
				onClick={() => {
					setMeetToggle(!meetToggle);
				}}>
				Meet Christopher
			</p>
			<a href='mailto:cbcobb4@gmail.com'>
				<i className='fas fa-envelope'></i>
			</a>
			<a href='https://github.com/ChristopherCobb'>
				<i className='fab fa-github'></i>
			</a>
			<a href='https://www.linkedin.com/in/Christopher-Cobb4/'>
				<i className='fab fa-linkedin'></i>
			</a>
			{/* <i className='fab fa-instagram'></i> */}
			<div className={`contentBox ${showMeet}`}>
				<Meet />
				<p
					className='close'
					onClick={() => {
						setMeetToggle(false);
					}}>
					close
				</p>
			</div>
		</div>
	);
};
export default Footer;
