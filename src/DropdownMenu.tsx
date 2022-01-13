import MenuLink from './MenuLink'
import Companies from './Companies'

const DropdownMenu = () => (
  <div className="nav__dropdown-menu">
    <Companies />

    <div className="nav__dropdown-menu-group">
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
      />

      <MenuLink
        text="Community"
        icon="people"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
      />
    </div>

    <div className="nav__dropdown-menu-group">
      <MenuLink
        text="Settings"
        icon="settings"
      />
      
      <MenuLink
        text="Connect to Wallet"
        icon="account_balance_wallet"
      />

      <MenuLink
        text="Log out"
        icon="exit_to_app"
      />
    </div>
  </div>
)

export default DropdownMenu
