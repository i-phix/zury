/* ═══════════════════════════════════════════════════════════════
   Contact Us — Root Page Shell
   src/modules/contact-us/pages/ContactPage/ContactPage.jsx
═══════════════════════════════════════════════════════════════ */
import { Component }             from "react";
import NavBar                    from "../../../home/components/NavBar/NavBar";
import Footer                    from "../../../home/components/Footer/Footer";
import ChatWidget                from "../../../home/components/ChatWidget/ChatWidget";
import ContactCopy               from "../../components/ContactCopy/ContactCopy";
import CountryStep               from "../../components/CountryStep/CountryStep";
import ContactForm               from "../../components/ContactForm/ContactForm";
import Stepper                   from "../../../../shared/components/ui/Stepper/Stepper";
import { useContactForm }        from "../../hooks/useContactForm";
import { ContactFormContext }    from "../../hooks/ContactFormContext";
import { useRevealRefs }         from "../../../home/hooks/useReveal";

const FORM_STEPS = [
  { label: "Region"  },
  { label: "Details" },
  { label: "Confirm" },
];

/* ── Error boundary ── */
class Boundary extends Component {
  state = { err: null };
  static getDerivedStateFromError(e) { return { err: e }; }
  componentDidCatch(err, info) {
    console.error("[ContactPage]", err, info.componentStack);
  }
  render() {
    return this.state.err
      ? (
        <pre style={{ color: "red", padding: "2rem", whiteSpace: "pre-wrap" }}>
          {this.state.err.message}
        </pre>
      )
      : this.props.children;
  }
}

/* ── Inner shell ── */
function ContactShell() {
  const [copyRef, cardRef] = useRevealRefs(2);
  const formState = useContactForm();                    // single instance
  const { step, submitted, handleSelectCountry } = formState;

  const currentStep = step === "country" ? 1 : submitted ? 3 : 2;

  return (
    <ContactFormContext.Provider value={formState}>   {/* share with all children */}
      <div className="home">
        <NavBar />

        <main>
          <section className="c-section">
            <div className="c-section-inner">
              <div className="cu-grid">

                <ContactCopy revealRef={copyRef} />

                <div ref={cardRef} className="cu-grid__card reveal visible">

                  <Stepper
                    currentStep={currentStep}
                    steps={FORM_STEPS}
                  />

                  <div className="cu-grid__card-body">
                    {step === "country"
                      ? (
                        <CountryStep
                          onSelect={handleSelectCountry}
                          currentStep={1}
                          totalSteps={FORM_STEPS.length}
                        />
                      )
                      : <ContactForm />
                    }
                  </div>

                </div>

              </div>
            </div>
          </section>
        </main>

        <ChatWidget />
        <Footer />
      </div>
    </ContactFormContext.Provider>
  );
}

/* ── Page shell ── */
export default function ContactPage() {
  return (
    <Boundary>
      <ContactShell />
    </Boundary>
  );
}