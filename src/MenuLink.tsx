type Props = {
  text: string,
  icon: string,
  color?: string,
}

const MenuLink = ({ icon, text, color = '' }: Props) => (
  <div className={`nav__dropdown-menu-item ${color}`}>
    <i className="material-icons-outlined">
      {icon}
    </i>

    {text}
  </div>
)

export default MenuLink
