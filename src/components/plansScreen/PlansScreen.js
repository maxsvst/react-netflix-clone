import "./PlansScreen.css";
import { plans } from "../../common/index";

const PlansScreen = () => {
  return (
    <div className="plansScreen">
      {plans.map((item) => (
        <div key={item.id} className="plansScreen__plan">
          <div className="plansScreen__info">
            <h5>{item.name}</h5>
            <h6>{item.description}</h6>
          </div>
          <button>Subscribe</button>
        </div>
      ))}
    </div>
  );
};

export default PlansScreen;
