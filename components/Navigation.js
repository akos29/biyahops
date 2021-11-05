import Link from 'next/link';
import navStyle from '../styles/Nav.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaPhoneAlt, FaFacebook, FaTelegram } from 'react-icons/fa';
import ScrollArrow from './ScrollArrow';

const Navigation = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<div className={navStyle.topBox}>
				<a
					className={navStyle.social}
					href='https://www.facebook.com/safariictsolutionsplc'
				>
					<FaFacebook />
				</a>
				<a href='https://t.me/safariictsolutions' className={navStyle.social}>
					<FaTelegram />
				</a>

				<a href='tel:+251912055400' className={navStyle.social}>
					<FaPhoneAlt />
					{/* +251 912 055 400 */}
				</a>
			</div>

			<Navbar
				fixed='top'
				collapseOnSelect
				expand='lg'
				variant='light'
				sticky='top'
				className={navStyle.myNav}
			>
				<Navbar.Brand href='/' className='nav'>
					<Link href='/'>
						<img
							src={prefix + '/logo.jpg'}
							alt='Lithops logo'
							className={navStyle.brand}
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Link href='/' passHref>
							<Nav.Link className={navStyle.navLink}>Home</Nav.Link>
						</Link>
						<Link className='navlink' href='/about' passHref>
							<Nav.Link className={navStyle.navLink}>About Us</Nav.Link>
						</Link>

						<NavDropdown title='Our Work' className={navStyle.navLink}>
							<NavDropdown.Item href='/howWeWork'>
								<Link href='/OurWork/howWeWork' passHref>
									<Nav.Link>How We Work</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item href='#howwework'>
								<Link className='navlink' href='/OurWork/Where' passHref>
									<Nav.Link>Where We Work</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className='navlink' href='/OurWork/OurValues' passHref>
									<Nav.Link>Our Values</Nav.Link>
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title='Services'>
							<NavDropdown.Item>
								<Link className='navlink' href='/service/building' passHref>
									<Nav.Link>Building</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className='navlink' href='/service/road' passHref>
									<Nav.Link>Road</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className='navlink' href='/service/landscape' passHref>
									<Nav.Link>Landscape</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className='navlink' href='/service/finishing' passHref>
									<Nav.Link>Finishing works</Nav.Link>
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						{/* <Link href='/services' passHref>
							<Nav.Link className={navStyle.navLink}>Services</Nav.Link>
						</Link> */}
						<Link href='/gallery' passHref>
							<Nav.Link className={navStyle.navLink}>Gallery</Nav.Link>
						</Link>
						{/* <NavDropdown title='Media'>
							<NavDropdown.Item href='#gallery'>
								<Link className='navlink' href='/gallery' passHref>
									<Nav.Link>Gallery</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item href='#news'>
								<Link className='navlink' href='/news' passHref>
									<Nav.Link>News</Nav.Link>
								</Link>
							</NavDropdown.Item>
						</NavDropdown> */}
						<Link href='/contact' passHref>
							<Nav.Link className={navStyle.navLink}>Contact Us</Nav.Link>
						</Link>
					</Nav>

					<Nav></Nav>
				</Navbar.Collapse>
			</Navbar>

			<Container fluid>
				{/* <div id={navStyle.backtotop} className={navStyle.visible}>
          <a href="#" title="Go Top"></a>
        </div> */}
				<ScrollArrow />
			</Container>
		</>
	);
};

export default Navigation;
