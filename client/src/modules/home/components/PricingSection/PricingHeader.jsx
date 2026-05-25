const PricingHeader = ({ plans, cta }) => {
  return (
    <div className="pricing-header">
      <div className="pricing-header__cta">
        <a href={cta.href} className="btn btn--primary">
          {cta.label}
          <span className="btn__arrow">›</span>
        </a>
      </div>

      <div className="pricing-header__plans">
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
                <p className="plan__disclaimer">
                  or <a href={plan.contactHref}>contact</a> us for pricing
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingHeader;