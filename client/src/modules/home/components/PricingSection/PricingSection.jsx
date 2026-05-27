import { useState, useRef, useEffect } from "react";
import { PROPERTY_TYPES, PRICING_DATA } from "../../constants/homeData";
import TabBar from "./TabBar";
import PricingHeader from "./PricingHeader";
import FeatureTable from "./FeatureTable";

const VISIBLE_OFFSET = 900;
const DRAG_THRESHOLD = 60;

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dragStartX = useRef(null);
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const total = PROPERTY_TYPES.length;
  const activeSlug = PROPERTY_TYPES[activeIndex].slug;

  const navigate = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setDragX(0);
      setIsAnimating(false);
    }, 420);
  };

  const onDragStart = (e) => {
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setIsDragging(true);
  };

  const onDragMove = (e) => {
    if (!isDragging || dragStartX.current === null) return;
    const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setDragX(x - dragStartX.current);
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX < -DRAG_THRESHOLD) navigate("next");
    else if (dragX > DRAG_THRESHOLD) navigate("prev");
    else setDragX(0);
    dragStartX.current = null;
  };

  useEffect(() => {
    window.addEventListener("mouseup", onDragEnd);
    window.addEventListener("mousemove", onDragMove);
    return () => {
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("mousemove", onDragMove);
    };
  }, [isDragging, dragX]);

  useEffect(() => {
    const activeSlide = slideRefs.current[activeIndex];
    if (activeSlide && containerRef.current) {
      containerRef.current.style.minHeight = `${activeSlide.offsetHeight}px`;
    }
  }, [activeIndex]);

  const getSlideStyle = (index) => {
    const diff = index - activeIndex;
    const wrappedDiff =
      diff > total / 2 ? diff - total :
      diff < -total / 2 ? diff + total : diff;

    const baseTX = wrappedDiff * VISIBLE_OFFSET + (isDragging ? dragX : 0);
    const absD = Math.abs(wrappedDiff);

    let opacity = absD === 0 ? 1 : absD === 1 ? 0.25 : 0;
    let scale   = absD === 0 ? 1 : absD === 1 ? 0.92 : 0.85;
    let blur    = absD === 0 ? 0 : absD === 1 ? 3 : 6;
    let zIndex  = absD === 0 ? 10 : absD === 1 ? 5 : 1;

    if (isDragging) {
      const progress = Math.min(Math.abs(dragX) / DRAG_THRESHOLD, 1);
      if (absD === 0) {
        opacity = 1 - progress * 0.4;
        scale   = 1 - progress * 0.04;
      }
      if (absD === 1 && Math.sign(wrappedDiff) !== Math.sign(dragX)) {
        opacity = 0.25 + progress * 0.5;
        scale   = 0.92 + progress * 0.06;
        blur    = 3 - progress * 3;
      }
    }

    return {
      transform:     `translateX(calc(-50% + ${baseTX}px)) scale(${scale})`,
      opacity,
      filter:        blur > 0 ? `blur(${blur}px)` : "none",
      zIndex,
      transition:    isDragging
        ? "opacity 0.1s, filter 0.1s, transform 0.1s"
        : "opacity 0.42s cubic-bezier(0.4,0,0.2,1), filter 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)",
      pointerEvents: absD === 0 ? "auto" : "none",
    };
  };

  return (
    <section className="pricing-section">
      <p className="section-title">SELECT YOUR PROPERTY TYPE</p>

      <TabBar
        propertyTypes={PROPERTY_TYPES}
        activeSlug={activeSlug}
        onTabChange={(slug) => {
          const idx = PROPERTY_TYPES.findIndex((p) => p.slug === slug);
          if (idx !== activeIndex) {
            setIsAnimating(true);
            setTimeout(() => { setActiveIndex(idx); setIsAnimating(false); }, 420);
          }
        }}
      />

      <div
        ref={containerRef}
        className={`pricing-carousel ${isDragging ? "pricing-carousel--dragging" : ""}`}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        {PROPERTY_TYPES.map((pt, index) => {
          const data = PRICING_DATA[pt.slug];
          return (
            <div
              key={pt.slug}
              className="pricing-slide"
              style={getSlideStyle(index)}
              ref={(el) => (slideRefs.current[index] = el)}
            >
              <PricingHeader plans={data.plans} cta={data.cta} />
              <FeatureTable
                plans={data.plans}
                features={data.features}
                sectionLabel={`${pt.label} Features`.toUpperCase()}
                footnote={data.footnote}
              />
            </div>
          );
        })}
      </div>

      <button className="pricing-nav pricing-nav--prev" onClick={() => navigate("prev")}>
  <img src="/assets/icons/ui/property/less-than-sign.svg" alt="Manage Property and Portfolio" />
</button>

<button className="pricing-nav pricing-nav--next" onClick={() => navigate("next")}>
  <img src="/assets/icons/ui/property/greater-than-sign.svg" alt="Property-Management-System" />
</button>
    

      <div className="pricing-dots">
        {PROPERTY_TYPES.map((pt, i) => (
          <button
            key={pt.slug}
            className={`pricing-dot ${i === activeIndex ? "pricing-dot--active" : ""}`}
            onClick={() => {
              if (i !== activeIndex) {
                setIsAnimating(true);
                setTimeout(() => { setActiveIndex(i); setIsAnimating(false); }, 420);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;