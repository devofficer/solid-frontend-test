import './stylesheets/index.scss'

import AppRouter from './routes'
import * as ethers from "ethers";
import DropdownLink from './DropdownLink'
import { BrowserRouter } from "react-router-dom";

window.provider = new ethers.providers.Web3Provider(window.ethereum, "any")

const App = () => (
  <nav className="nav">
    <BrowserRouter>
      <DropdownLink />
      <AppRouter />
    </BrowserRouter>
  </nav>
)

export default App
