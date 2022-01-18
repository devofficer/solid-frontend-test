import './stylesheets/index.scss'

import AppRouter from './routes'
import * as ethers from "ethers";
import DropdownLink from './DropdownLink'
import { BrowserRouter } from "react-router-dom";
import { TOKEN_ABI, CONTRACT_ADDR } from './constants';

window.provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
window.tokenContract = new ethers.Contract(CONTRACT_ADDR, TOKEN_ABI, window.provider);

const App = () => (
  <nav className="nav">
    <BrowserRouter>
      <DropdownLink />
      <AppRouter />
    </BrowserRouter>
  </nav>
)

export default App
