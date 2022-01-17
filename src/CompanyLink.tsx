import { Company } from './types'

type Props = Company & {
  selected: boolean,
  onSelectCompany: (id: number) => void,
}

const CompanyLink = ({ id, name, selected, onSelectCompany }: Props) => (
  <div
    className={`nav__dropdown-menu-item company-item ${selected ? 'selected' : ''}`}
    onClick={() => onSelectCompany(id)}
  >
    <span>{name}</span>
    {selected && (
      <i className='material-icons'>
        check
      </i>
    )}
  </div>
)

export default CompanyLink
