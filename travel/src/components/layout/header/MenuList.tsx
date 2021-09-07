import styles from './MenuList.module.scss';
import MenuItem from './MenuItem';

const MenuList: React.FC = props => (
	  <ul className = {styles['menu__list']}>
         <MenuItem link = "/" exact> Home </MenuItem>
		  <MenuItem link = "/auth" > Authenticate </MenuItem>
		 <MenuItem link = "/about"> About </MenuItem>
      </ul>
);

export default MenuList;