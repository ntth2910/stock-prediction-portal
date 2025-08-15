import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <>
  
      <div className="container mt-5">
        <div className="p-5 text-center bg-light-dark rouded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            This stock prediction application utilizes machine learning
            techniques, specifically employing Keras, and LSTM recurrent neural
            networks, to forecast stock prices. The model is trained on
            historical stock data, enabling it to predict future price movements
            based on patterns and trends in the data.
          </p>
          <Button text="Login" className="btn-outline-info"/>
        </div>
      </div>
  
    </>
  );
};

export default Home;
