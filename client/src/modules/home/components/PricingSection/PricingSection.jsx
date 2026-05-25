import { useState } from "react";
import { PROPERTY_TYPES } from "../../constants/homeData";
import { PRICING_DATA } from "../../constants/homeData";
import TabBar from "./TabBar";
import PricingHeader from "./PricingHeader";
import FeatureTable from "./FeatureTable";

const PricingSection = () => {
  const [activeSlug, setActiveSlug] = useState(PROPERTY_TYPES[0].slug);

  const activeProperty = PROPERTY_TYPES.find((p) => p.slug === activeSlug);
  const activeData = PRICING_DATA[activeSlug];

  return (
    <section className="pricing-section">
      <TabBar
        propertyTypes={PROPERTY_TYPES}
        activeSlug={activeSlug}
        onTabChange={setActiveSlug}
      />

      <PricingHeader
        plans={activeData.plans}
        cta={activeData.cta}
      />

      <FeatureTable
        plans={activeData.plans}
        features={activeData.features}
        sectionLabel={`${activeProperty.label} Features`.toUpperCase()}
        footnote={activeData.footnote}
      />
    </section>
  );
};

export default PricingSection;