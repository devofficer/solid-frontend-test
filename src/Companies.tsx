import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies, getSelectedCompanyId } from './selectors'
import { setSelectedCompanyId } from './actions'

import CompanyLink from './CompanyLink'

type ReduxProps = {
  companies: Array<Company>,
  selectedCompanyId: number | null,
}
type DispatchProps = {
  setSelectedCompanyId: (id: number) => void,
}

export const Companies = ({ companies, selectedCompanyId, setSelectedCompanyId }: ReduxProps & DispatchProps) => (
  <div className="nav__company-group">
    <div className="company-header">Your companies</div>
    <div className="company-body">
      {companies.map((company) =>
        <CompanyLink
          key={company.id}
          selected={company.id === selectedCompanyId}
          onSelectCompany={setSelectedCompanyId}
          {...company}
        />
      )}
    </div>
  </div>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
    selectedCompanyId: getSelectedCompanyId,
  }),
  { setSelectedCompanyId }
)(Companies)
