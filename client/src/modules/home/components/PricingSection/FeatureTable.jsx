const FeatureTable = ({ plans, features, sectionLabel, footnote }) => {
  return (
    <div className="feature-table">
      <table>
        <thead>
          <tr className="feature-table__section-header">
            <td colSpan={plans.length + 1}>{sectionLabel}</td>
          </tr>
          <tr className="feature-table__plan-header">
            <th />
            {plans.map((plan) => (
              <th key={plan.label}>{plan.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.map((feature) => (
            <tr key={feature.label} className="feature-table__row">
              <td className="feature-table__label">{feature.label}</td>
              {plans.map((plan) => (
                <td key={plan.label} className="feature-table__check">
                  {feature.plans.includes(plan.label) && (
                    <span className="checkmark">✓</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {footnote && (
        <p className="feature-table__footnote">{footnote}</p>
      )}
    </div>
  );
};

export default FeatureTable;