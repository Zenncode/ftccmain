import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2 font-semibold">     
              <Image src="/logos/ftccwhite.png" alt="FTCC logo" width={120} height={70} />    
            </a>
            <p className="mt-3 text-sm text-white/80">We build reliable, scalable software for businesses of all sizes. From discovery to delivery, we help you ship faster.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="text-white/80 hover:text-white">About us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Services</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:hello@ftcc.example" className="text-white/80 hover:text-white">hello@ftcc.example</a>
              </li>
              <li>
                <a href="tel:+621234567890" className="text-white/80 hover:text-white">+62 123 456 7890</a>
              </li>
              <li className="text-white/70">Mon–Fri, 9:00–18:00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Address</h3>
            <address className="mt-4 not-italic text-sm text-white/70">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Penthouse%20Floor%2C%20Global%20Link%20Center%2C%20710%20Shaw%20Blvd%2C%20Wack%20Wack%20Greenhills%2C%20Mandaluyong%20City"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Penthouse Floor, Global Link Center,<br />
                710 Shaw Blvd, Wack Wack Greenhills,<br />
                Mandaluyong City
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-sm text-white/70">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} FTCC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-white/80 hover:text-white">Privacy</a>
              <a href="#terms" className="text-white/80 hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


