import footerStyle from '../styles/Footer.module.css';
import {
	FaFacebook,
	FaTwitter,
	FaTelegram,
	FaInstagram,
	FaLinkedin,
	FaHome,
	FaPhoneAlt,
	FaInbox,
} from 'react-icons/fa';

const Footer = () => {
	const cx = (...classNames) => classNames.join(' ');

	return (
		<>
			<footer className={footerStyle.footer}>
				<section className={footerStyle.ftMain}>
					<div className={footerStyle.Item1}>
						<h2 className={footerStyle.ftTitle}>About</h2>
						<ul className={footerStyle.ftUl}>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									<FaHome /> Addis Ababa, Ethiopia
								</a>
							</li>
							<li>
								<a className={cx(footerStyle.footer)} href='tel:+251912055400'>
									<FaPhoneAlt /> +2519 12 05 54 00
								</a>
							</li>
							<li>
								<a
									className={cx(footerStyle.footer)}
									href='mailto:info@lithops.com'
								>
									<FaInbox />
									info@lithops.com
								</a>
							</li>
						</ul>
					</div>
					<div className={footerStyle.Item2}>
						<h2 className={footerStyle.ftTitle}>Resources</h2>
						<ul className={footerStyle.ftUl}>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									Docs
								</a>
							</li>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									Blog
								</a>
							</li>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									eBooks
								</a>
							</li>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									Webinars
								</a>
							</li>
						</ul>
					</div>
					{/* <div className={footerStyle.Item}>
						<h2 className={footerStyle.ftTitle}>Contact</h2>
						<ul className={footerStyle.ftUl}>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									Help
								</a>
							</li>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									Sales
								</a>
							</li>
							<li>
								<a className={cx(footerStyle.footer)} href='#'>
									Advertise
								</a>
							</li>
						</ul>
					</div> */}
					<div className={footerStyle.Item3}>
						<h2 className={footerStyle.ftTitle}>Stay Updated</h2>
						<p>Subscribe to our newsletter to get our latest news.</p>
						<form className={footerStyle.footerForm}>
							<input
								type='email'
								name='email'
								placeholder='Enter email address'
								className={footerStyle.footerForm}
							/>
							<input
								type='submit'
								value='Subscribe'
								className={footerStyle.footerForm}
							/>
						</form>
					</div>
				</section>

				<section className={footerStyle.ftSocial}>
					<ul className={cx(footerStyle.ftSocialList, footerStyle.ftUl)}>
						<li>
							<a className={cx(footerStyle.footer, 'ip-3')} href='#'>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a className={cx(footerStyle.footer, 'ip-3')} href='#'>
								<FaTwitter />
							</a>
						</li>
						<li>
							<a className={cx(footerStyle.footer, 'ip-3')} href='#'>
								<FaInstagram />
							</a>
						</li>

						<li>
							<a className={cx(footerStyle.footer, 'ip-3')} href='#'>
								<FaLinkedin />
							</a>
						</li>
					</ul>
				</section>

				<section className={footerStyle.ftLegal}>
					<ul className={cx(footerStyle.ftLegalList)}>
						<li className={cx(footerStyle.ftLegalList)}>
							<a className={cx(footerStyle.ftFooter)} href='#'>
								Terms &amp; Conditions
							</a>
						</li>
						<li className={cx(footerStyle.ftLegalList)}>
							<a className={cx(footerStyle.ftFooter)} href='#'>
								Privacy Policy
							</a>
						</li>
						<li className={cx(footerStyle.ftLegalList)}>
							&copy; 2021 Copyright Lithops Construction.
						</li>
					</ul>
				</section>
			</footer>

			{/* <div className={cx(footerStyle.footerBottomBlock)}>
        <p>BD Lithops © 2021</p>
      </div>
      <div className={footerStyle.clearfix}></div> */}
		</>
	);
};

export default Footer;
