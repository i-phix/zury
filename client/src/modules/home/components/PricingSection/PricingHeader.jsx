const PricingHeader = ({ plans, cta }) => {
  return (
    <div
      className="pricing-header"
      style={{ "--plan-count": plans.length }}
    >
      <div className="pricing-header__cta">
        <a href={cta.href} className="btn-gold">
          {cta.label} ›
        </a>
      </div>

      {plans.map((plan) => (
        <div key={plan.label} className="pricing-header__plan">
          <p className="plan__label">{plan.label}</p>

          {plan.priceType === "fixed" && (
            <>
              <p className="plan__starting">Starting at</p>
              <div className="plan__price-row">
                <span className="plan__price">{plan.price}</span>
                <span className="plan__price-note">{plan.priceNote}</span>
              </div>
              <p className="plan__disclaimer">({plan.disclaimer})</p>
            </>
          )}

          {plan.priceType === "contact" && (
            <>
              <p className="plan__starting">Please call us at</p>
              <p className="plan__phone">{plan.phone}</p>
              <p className="plan__contact">
                or <a href={plan.contactHref}>contact</a> us for pricing
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingHeader;