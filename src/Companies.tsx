import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies } from './selectors'

import CompanyLink from './CompanyLink'

type ReduxProps = {
  companies: Array<Company>,
}

export const Companies = ({ companies }: ReduxProps) => (
  <div className="nav__company-group">
    <div className="company-header">Your companies</div>
    <div className="company-body">
      {companies.map((company) => <CompanyLink key={company.id} {...company} />)}
    </div>
  </div>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  })
)(Companies)
