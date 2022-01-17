import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleDropdownMenuVisibility } from "./actions";

type Props = {
  text: string,
  icon: string,
  color?: string,
  path: string,
}

const MenuLink = ({ icon, text, color = '', path }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(toggleDropdownMenuVisibility());
    navigate(path);
  }

  return (
    <div className={`nav__dropdown-menu-item ${color}`} onClick={handleClick}>
      <i className="material-icons-outlined">
        {icon}
      </i>

      {text}
    </div>
  );
}

export default MenuLink
