import { useNavigate } from "react-router-dom";

const BalanceDlg = () => {
  const navigate = useNavigate();

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
        <div className="modal__content-balance">
        </div>
      </div>
    </div>
  );
}

export default BalanceDlg
