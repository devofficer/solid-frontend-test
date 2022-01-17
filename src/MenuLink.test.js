import { shallow } from 'enzyme'
import MenuLink from './MenuLink'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}))

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))

describe('<MenuLink />', () => {
  it('renders link', () => {
    expect(shallow(
      <MenuLink icon="phone" text="Call me" path="/" />
    )).toMatchSnapshot()
  })
})
