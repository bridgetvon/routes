import React, { useState } from "react";
import Modal from "react-modal";
import { useQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

import "./Donations.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function DonationModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0.0);
<<<<<<< HEAD
  const [donationIdsArray, setDonationIdsArray] = useState([]);
  const [getCheckout, { data }] = useQuery(QUERY_DONATIONS);

  // const addDollar = () => {
  //   setTotalAmount(totalAmount + 1);
  //   setDonationIdsArray.push(data[0]._id);
  // };

  // const addFiveDollar = () => {
  //   setTotalAmount(totalAmount + 5);
  //   setDonationIdsArray.push(data[1]._id);
  // };

  // const addTenDollar = () => {
  //   setTotalAmount(totalAmount + 10);
  //   setDonationIdsArray.push(data[2]._id);
  // };

  function submitCheckout() {}
=======
  function submitCheckout() {
    const donationIds = [];
  }

>>>>>>> parent of 23114cc7 (added function to add ids to array)
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>donate</button>
      <Modal isOpen={modalIsOpen} id="donationModal">
        <button className="exitX" onClick={() => setModalIsOpen(false)}>
          x
        </button>
        <h2>Thanks for Donating!!</h2>
        <h3>${totalAmount}</h3>
        <div>
<<<<<<< HEAD
          <button className="amount">$1.00</button>
          <button lassName="amount">$5.00</button>
          <button className="amount">$10.00</button>
=======
          <button
            onClick={() => setTotalAmount(totalAmount + 1)}
            className="amount"
          >
            $1.00
          </button>
          <button
            onClick={() => setTotalAmount(totalAmount + 5)}
            className="amount"
          >
            $5.00
          </button>
          <button
            onClick={() => setTotalAmount(totalAmount + 10)}
            className="amount"
          >
            $10.00
          </button>
>>>>>>> parent of 23114cc7 (added function to add ids to array)
        </div>
        <div id="donationControls">
          <button id="confirmAmount" onClick={submitCheckout}>
            Donate
          </button>
          <button id="cancelDonation" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}