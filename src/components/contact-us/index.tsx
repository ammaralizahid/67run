import ContactHero from "./hero";
import ContactCards from "./contact-cards";
import ContactForm from "./contact-form";

export default function ContactUs() {
  return (
    <div className="w-full bg-white">
      <ContactHero />
      <ContactCards />
      <ContactForm />
    </div>
  );
}
