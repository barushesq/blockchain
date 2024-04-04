import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ timestamp, addressFrom, addressTo, amount, keyword, message }) => {
  return (
    <div className="bg-[#181918] p-3 rounded-md hover:shadow-2xl w-full border-b border-[#121212] mb-1">
      <div className="flex flex-col items-start w-auto">
        <div className="flex justify-between w-auto mb-0.5">
          <p className="text-white text-sm">{timestamp}</p>
        </div>
        <div className="flex justify-between w-full mb-0.5">
        <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {(addressFrom)}</p>
          </a>
          <p className="text-white text-sm">-{amount} ETH</p>
        </div>
        <div className="flex justify-between w-full mb-0.5">
        <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {(addressTo)}</p>
          </a>
          <p className="text-white text-sm">+{amount} ETH</p>
        </div>
        {keyword && (
          <div className="flex justify-between w-full mb-0.5">
            <p className="text-white text-sm">CONCEPTO: {keyword}</p>
          </div>
        )}
        <div className="flex justify-between w-full mb-0.5">
          <p className="text-white text-sm">MENSAJE: {message}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  const reversedTransactions = transactions.slice().reverse();

  return (
    <div className="flex justify-center items-center w-full gradient-bg-transactions">
      <div className="flex flex-col md:p-10 py-10 px-2">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">ULTIMAS TRANSACCIONES</h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">CONECTA TU CUENTA PARA VER LAS ULTIMAS TRANSACCIONES</h3>
        )}

        <div className="flex flex-col items-center mt-10">
          {reversedTransactions.map((transaction, index) => (
            <div key={index} className="w-full">
              <TransactionsCard {...transaction} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;