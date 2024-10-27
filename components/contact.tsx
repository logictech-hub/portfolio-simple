"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section id="contact" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Contact Me</SectionHeading>
      <div>Coming soon...</div>
    </section>
  );
}