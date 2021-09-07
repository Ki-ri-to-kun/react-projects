import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import SidebarContext from '../../store/sidebar-context';

import styles from './Sidebar.module.scss';

const destinationList = ['Maldives', 'Carribean', 'Canary Islands'];

const Sidebar: React.FC = props => {
	const history = useHistory();
	const[calendarIsVisible, setCalendarIsVisible] = useState(false);
	const[searchIsActive, setSearchIsActive] = useState(false);
	const[calendarYear, setCalendarYear] = useState(2022);
	
	const ctx = useContext(SidebarContext);

	const toggleCalendarHandler = () => {
		setCalendarIsVisible(prevState => !prevState);
	};
	const incrementCalendarYearHandler = () => {
		setCalendarYear(prevState => ++prevState);
	};
	const decrementCalendarYearHandler = () => {
		setCalendarYear(prevState => --prevState);
	};

	const makeSearchActiveHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.placeholder = "";
		setSearchIsActive(true);
		history.push('/destination');
	};

	const makeSearchInactiveHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.placeholder = "Departure Port & Destination";
		setSearchIsActive(false);
		history.push('/');
	};

	

	const filteredDestinationList = destinationList.filter(destination => destination.toLowerCase().includes(ctx.enteredDestination.toLowerCase()));
	const searchResultsList = (
		<ul>
			{filteredDestinationList.map(destination => <li>{destination}</li>)}
		</ul>
	);

	console.log(ctx.enteredDestination);
	return (
	<aside className = {styles.sidebar} >
		 <Link to = "/" className = {styles['sidebar__logo']}>Travel One Cruise</Link> 
		 <h1 className = {styles['sidebar__title']}>Search, compare <br /> & book cruises <br />online </h1>
			<form className= {styles.search}>
				<input className = {`${styles['search__input']} ${searchIsActive && styles.active}`} type = "text" placeholder = "Departure Port & Destination" onFocus = {makeSearchActiveHandler} onBlur = {makeSearchInactiveHandler} onChange = {ctx.changeInputHandler} value = {ctx.enteredDestination}/>
				<span className = {`icon icon-map-marker marker-map-icon icon-mask ${searchIsActive && styles['icon-active']}`}></span>
				{searchIsActive && <div className={styles['search__results']}>{searchResultsList}</div>}
				{!searchIsActive && <input className = {`${styles['search__input']} ${styles['search__dates']} ${calendarIsVisible && styles.active}`} value = {calendarIsVisible ? 'Select month' : 'Select dates'} type = "button" onClick = {toggleCalendarHandler}/>}
				{!searchIsActive && <span className = {`icon icon-calendar calendar-icon icon-mask ${calendarIsVisible && styles['icon-active']}`}></span>}
				{calendarIsVisible && <div className = {styles['search__calendar']}>
				<div className = {styles['search__calendar-header']}>
					<span className = "icon icon-left left-icon icon-mask" onClick = {decrementCalendarYearHandler}></span>
					<span>{calendarYear}</span>
					<span className = "icon icon-right right-icon icon-mask" onClick = {incrementCalendarYearHandler}></span>
				</div>
				<div className = {styles['search__calendar-months']}>
					<div className="row">
						<div className="col col-25"><input type = "checkbox" value = "Jan" id = "Jan"/><label htmlFor = "Jan">Jan</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Feb" id = "Feb"/><label htmlFor = "Feb">Feb</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Mar" id = "Mar"/><label htmlFor = "Mar">Mar</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Apr" id = "Apr"/><label htmlFor = "Apr">Apr</label></div>
					</div>
					<div className="row">
						<div className="col col-25"><input type = "checkbox" value = "May" id = "May"/><label htmlFor = "May">May</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Jun" id = "Jun"/><label htmlFor = "Jun">Jun</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Jul" id = "Jul"/><label htmlFor = "Jul">Jul</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Aug" id = "Aug"/><label htmlFor = "Aug">Aug</label></div>
					</div>
					<div className="row">
						<div className="col col-25"><input type = "checkbox" value = "Sep" id = "Sep"/><label htmlFor = "Sep">Sep</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Oct" id = "Oct"/><label htmlFor = "Oct">Oct</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Nov" id = "Nov"/><label htmlFor = "Nov">Nov</label></div>
						<div className="col col-25"><input type = "checkbox" value = "Dec" id = "Dec"/><label htmlFor = "Dec">Dec</label></div>
					</div>
				</div>
				<div className = {styles['search__calendar-footer']}><Link to = "/search">Select all dates</Link></div>
				</div>}
				{!searchIsActive && <input className = {`${styles['search__input']} ${styles['search__submit']}`} type = "submit" value = "Search"/>}
				{!searchIsActive && <span className = "icon icon-search search-icon"></span>}
				{!searchIsActive && <div className = {styles['search__link']} ><Link to = "/search" >I’m feeling lucky: <br />show random cruise</Link></div>}
			</form>
	</aside>
	);
};

export default Sidebar;