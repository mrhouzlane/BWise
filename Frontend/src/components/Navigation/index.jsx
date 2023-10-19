import style from './Navigation.module.scss';
import { menus } from '../../App';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.menu}>
      {menus.map((m) => (
        <NavLink
          key={m.name}
          to={m.path}
          className={({ isActive }) =>
            isActive ? `${style.menuItem} ${style.menuItemActive}` : style.menuItem
          }>
            <img src={m.image} className={style.menuIcon} alt="Icon" />
            {m.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;