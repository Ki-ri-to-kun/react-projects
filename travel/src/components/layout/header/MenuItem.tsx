import {NavLink} from 'react-router-dom';

import styles from './MenuItem.module.scss';

const MenuItem: React.FC<{link: string; exact?: boolean}> = props => (
	<li className = {styles['menu__item']}>
		<NavLink className = {styles['menu__link']} activeClassName = {styles.active} to = {props.link} exact = {props.exact}> {props.children} </NavLink>
	</li>
);

export default MenuItem;