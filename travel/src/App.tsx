import React, {Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/HomePage';

import Layout from './components/layout/Layout';
import Spinner from './components/ui/Spinner';

const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ComparePage = React.lazy(() => import('./pages/ComparePage'));
const DestinationPage = React.lazy(() => import('./pages/DestinationPage'));


const App: React.FC = () => {
	let routes;
	
	routes = (
		<Switch>
			<Route path = "/" exact><HomePage /></Route>
			<Route path = "/compare"><ComparePage /></Route>
			<Route path = "/search"><SearchPage /></Route>
			<Route path = "/destination"><DestinationPage /></Route>
			<Redirect to = "/" />
		</Switch>
	);
	
  return (
			<Layout>
					<Suspense fallback = {<Spinner />}>{routes}</Suspense>
			</Layout>		
  );
};

export default App;
