'use client'

import "./page.scss";
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor/cursor";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";

export default function Home() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}
