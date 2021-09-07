import {useState} from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Layout.module.scss';
import Header from "./header/Header";
import Sidebar from "./Sidebar";

const routesWhenHeaderIsNotVisible: Array<string> = ['/', '/destination'];
const routesWhenSidebarIsNotVisible: Array<string> = [];

const Layout: React.FC = props => {
	const location = useLocation();
	

	let foundRouteForHeader: string | undefined = undefined;
	let foundRouteForSidebar: string | undefined = undefined;

	if(routesWhenHeaderIsNotVisible.length > 0){
		 foundRouteForHeader = routesWhenHeaderIsNotVisible.find(route => route === location.pathname);
	}

	if(routesWhenSidebarIsNotVisible.length > 0){
		foundRouteForSidebar = routesWhenSidebarIsNotVisible.find(route => route === location.pathname);
	}
	
	const headerIsVisible = foundRouteForHeader ? false : true;
	const sidebarIsVisible = foundRouteForSidebar ? false : true;
	

	return (
        <>
            {headerIsVisible &&	<Header />}
			{sidebarIsVisible && <Sidebar />}
            <main className = {styles.page}>
					{props.children}
            </main>
        </>
	);
};

export default Layout;