/* ═══════════════════════════════════════════════════════════════
   Contact Us — Root Page Shell
   src/modules/contact-us/pages/ContactUsPage/ContactUsPage.jsx
═══════════════════════════════════════════════════════════════ */
import { Component, useEffect }      from "react";
import NavBar                        from "../../../home/components/NavBar/NavBar";
import Footer                        from "../../../home/components/Footer/Footer";
import ChatWidget                    from "../../../home/components/ChatWidget/ChatWidget";
import ContactCopy                   from "../../components/ContactCopy/ContactCopy";
import CountryStep                   from "../../components/CountryStep/CountryStep";
import ContactForm                   from "../../components/ContactForm/ContactForm";
import Stepper                       from "../../../../shared/components/ui/Stepper/Stepper";
import { useContactForm }            from "../../hooks/useContactForm";
import { ContactFormContext }        from "../../hooks/ContactFormContext";
import { useRevealRefs }             from "../../../home/hooks/useReveal";
import { analyticsService }          from "../../services/analytics.service";
import { FORM_STEPS, SUBMIT_STATUS } from "../../constants/contact.constants";

/* ── Error boundary ── */
class Boundary extends Component {
  state = { err: null };
  static getDerivedStateFromError(e) { return { err: e }; }
  componentDidCatch(err, info) {
    console.error("[ContactUsPage]", err, info.componentStack);
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
  const formState = useContactForm();
  const { step, submitStatus, handleSelectCountry } = formState;

  const currentStep = step === "country" ? 1 : submitStatus === SUBMIT_STATUS.SUCCESS ? 3 : 2;

  useEffect(() => {
    analyticsService.trackFormViewed();
  }, []);

  return (
    <ContactFormContext.Provider value={formState}>
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
export default function ContactUsPage() {
  return (
    <Boundary>
      <ContactShell />
    </Boundary>
  );
}