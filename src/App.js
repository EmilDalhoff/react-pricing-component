import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Vores Pakker</h1>
          <div className="header-row">
            <p>Månedlig</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Årlig</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMonthly ? "25.99$" : "199.9$"}
            storage="60 GB Lagerplads"
            users="5"
            sendUp="5"
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "34.99$" : "299.9$"}
            storage="70 GB Lagerplads"
            users="10"
            sendUp="10"
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "79.99$" : "499.9$"}
            storage="90 GB Lagerplads"
            users="20"
            sendUp="20"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
