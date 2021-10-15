import Link from 'next/link';
import navStyle from '../styles/Nav.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faSearch, faPhone } from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import ScrollArrow from './ScrollArrow';

const Navigation = () => {
	const cx = (...classNames) => classNames.join(' ');
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

	return (
		<>
			<div className={navStyle.topBox}>
				<p className={navStyle.social}>
					<FontAwesomeIcon icon={faPhone} />
					+251 999 996 968
				</p>
				<p className={navStyle.social}>
					<FontAwesomeIcon icon={faSearch} />
				</p>
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
							src={prefix + '/bdlogo5.png'}
							alt='Lithops logo'
							className={navStyle.brand}
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Link href='/' passHref>
							<Nav.Link>Home</Nav.Link>
						</Link>
						<NavDropdown title='About Us'>
							<NavDropdown.Item href='/about'>
								<Link className='navlink' href='/about' passHref>
									<Nav.Link>About BD lithops Con</Nav.Link>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item href='#howwework'>
								<Link className='navlink' href='/howWeWork' passHref>
									<Nav.Link>How We Work</Nav.Link>
								</Link>
							</NavDropdown.Item>
						</NavDropdown>

						<Link href='/projects' passHref>
							<Nav.Link>Projects</Nav.Link>
						</Link>
						<NavDropdown title='Media'>
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
						</NavDropdown>
						<Link href='/contact' passHref>
							<Nav.Link>Contact Us</Nav.Link>
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
