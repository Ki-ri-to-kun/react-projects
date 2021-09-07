import {useContext} from 'react';
import { ContextReplacementPlugin } from 'webpack';

import Destination from '../components/Destination';
import sidebarContext from '../store/sidebar-context';

const DestinationPage: React.FC = () => {
	const ctx = useContext(sidebarContext);

	return (
			<Destination destination = {ctx.enteredDestination.toLowerCase()}/>
	);
};

export default DestinationPage;