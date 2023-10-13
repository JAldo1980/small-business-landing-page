import "./index.css";

export default function Pricing(props) {
  let badgeText;

  return (
    <div className="pricing-el">
      <div className="inner-pricing-grid">
        <div className="pricing-card">
          <h2 className="bronze-pricing">{props.headline}</h2>
          <h3>£ {props.price}</h3>
          <p>{props.text}</p>
          <button className="btn">Order</button>
          {badgeText && <div className="card--badge">{badgeText}</div>}
        </div>
      </div>
    </div>
  );
}
