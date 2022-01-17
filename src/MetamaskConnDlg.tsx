import { useNavigate } from "react-router-dom";

const MetamaskConnDlg = () => {
  const navigate = useNavigate();

  const handleConnectWithMetamask = async () => {
    await window.provider.send("eth_requestAccounts", []);
    navigate('/get-balance');
  }

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className="modal__container">
      <div className="modal">
        <div className="modal__header">
          <span>Connect to Wallet</span>
          <div className="modal__close-btn" onClick={handleClose}>
            <i className="material-icons">
              close
            </i>
          </div>
        </div>
        <div className="modal__content-metamask">
          <div className="btn" onClick={handleConnectWithMetamask}>
            Connect with Metamask
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetamaskConnDlg
