import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        displayType="text"
        prefix={"$"}
        thousandSeperater={true}
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items):{" "}
                <strong>${`${getBasketTotal(basket)} `} </strong>
              </p>
              <small className="gift">
                <input type="checkbox" /> This Order contains Gift
              </small>
            </>
          );
        }}
        value={getBasketTotal(basket)}
      />
      <button className="button">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;