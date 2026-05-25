import { PROPERTY_TYPES } from "../../constants/homeData";
const TabBar = ({ activeSlug, onTabChange }) => {
  return (
    <div className="pricing-tabs">
      {PROPERTY_TYPES.map((type) => (
        <button
          key={type.slug}
          className={`pricing-tab ${activeSlug === type.slug ? "pricing-tab--active" : ""}`}
          onClick={() => onTabChange(type.slug)}
        >
          <img src={type.icon} alt={type.label} />
          <span>{type.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;