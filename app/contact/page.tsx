import Hero from "@/components/main/Hero";
import ContactForm from "@/components/sub/ContactForm";
import Reveal from "@/components/ui/Reveal";
import React from "react";

export default function page() {
  return (
    <>
      <Hero
        title="Let's grab a virtual coffee!"
        subtitle="Whether you want to work together or just chat, feel free to"
        highlight="get in touch"
      />
      <section id="contactForm" className="z-50 h-screen">
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
