import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ethers from "ethers";

const BalanceDlg = () => {
  const navigate = useNavigate();
  const [addr, setAddr] = useState<string>('');
  const [balance, setBalance] = useState<string>('');

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/');
  }

  const handleAddrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddr(e.target.value);
  }

  const handleGetBalance = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.provider
      .getBalance(addr)
      .then((bal: string) => {
        const balanceInEth = ethers.utils.formatEther(bal);
        setBalance(balanceInEth);
      })
      .catch((e: Error) => {
        console.log(e);
        setBalance('');
      });
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
          <div className="row">
            <div className="col-3">
              <div className="label">Wallet Address</div>
            </div>
            <div className="col-9">
              <input type="text" placeholder="Write address here" value={addr} onChange={handleAddrChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="label">Balance</div>
            </div>
            <div className="col-9">
              <input type="text" disabled placeholder="--" value={balance} />
              <span className="input-suffix">ETH</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="btn" onClick={handleGetBalance}>
                Get Balance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceDlg
