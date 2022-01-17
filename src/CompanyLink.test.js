import { shallow } from 'enzyme'
import CompanyLink from './CompanyLink'

describe('<CompanyLink />', () => {
  const setSelectedCompanyIdMock = jest.fn()

  const render = (props) => shallow(
    <CompanyLink
      onSelectCompany={setSelectedCompanyIdMock}
      {...props}
    />
  )

  it('renders link with selected state', () => {
    expect(render({ id: 1, name: 'company', selected: true })).toMatchSnapshot()
  })
})
