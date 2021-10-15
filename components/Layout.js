import Nav from './Navigation';
import Meta from './Meta.js';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />

			<Nav />
			{/* <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb> */}
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
