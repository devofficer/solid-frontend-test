import MenuLink from './MenuLink'
import Companies from './Companies'

const DropdownMenu = () => (
  <div className="nav__dropdown-menu">
    <Companies />

    <div className="nav__dropdown-menu-group">
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
        path="#"
      />

      <MenuLink
        text="Community"
        icon="people"
        path="#"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
        path="#"
      />
    </div>

    <div className="nav__dropdown-menu-group">
      <MenuLink
        text="Settings"
        icon="settings"
        path="#"
      />
      
      <MenuLink
        text="Connect to Wallet"
        icon="account_balance_wallet"
        path="/connect-with-metamask"
      />

      <MenuLink
        text="Log out"
        icon="exit_to_app"
        color="red"
        path="#"
      />
    </div>
  </div>
)

export default DropdownMenu
