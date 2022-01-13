import { Company } from './types'

const CompanyLink = ({ name }: Company) => (
  <div className="nav__dropdown-menu-item company-item">
    <span>{name}</span>
  </div>
)

export default CompanyLink
