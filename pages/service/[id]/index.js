import Building_P from '../../../components/Building_P';
import Road_P from '../../../components/Road_P';
import Finishing from '../../../components/Finishing';
import Landscape from '../../../components/Landscape';
import { useRouter } from 'next/router';

export default function index() {
	const router = useRouter();
	const { id } = router.query;
	if (id === 'building') {
		return (
			<>
				<Building_P />
			</>
		);
	} else if (id === 'road') {
		return (
			<>
				<Road_P />
			</>
		);
	} else if (id === 'landscape') {
		return (
			<>
				<Landscape />
			</>
		);
	} else if (id === 'finishing') {
		return (
			<>
				<Finishing />
			</>
		);
	} else {
		return <>Hello</>;
	}
}
