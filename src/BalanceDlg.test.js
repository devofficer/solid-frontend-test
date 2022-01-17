import { shallow } from 'enzyme'
import BalanceDlg from './BalanceDlg'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}))


describe('<BalanceDlg />', () => {
  it('renders dialog', () => {
    expect(shallow(
      <BalanceDlg />
    )).toMatchSnapshot()
  })
})
