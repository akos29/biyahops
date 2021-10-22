// import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
// import { config } from "@fortawesome/fontawesome-svg-core";
//config.autoAddCss = false;
import Layout from '../components/Layout';
import '../styles/globals.css';
/*import "bootstrap/dist/css/bootstrap.css";*/
import '../css/main.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
