import { useEffect, useRef } from "react";

export default function CalendlyWidget() {
  const once = useRef(false);

  useEffect(() => {
    console.log("📌 CalendlyWidget mounted");

    if (once.current) {
      console.log("⛔ Already loaded, skipping");
      return;
    }
    once.current = true;

    // Add testing
    console.log("📌 Injecting Calendly script...");

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      console.log("✅ Calendly script loaded");
      console.log("📌 window.Calendly =", window.Calendly);

      if (window.Calendly) {
        console.log("🚀 Initializing badge...");

        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/shiwansh-solutions/meeting",
          text: "Book Meeting",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });

        console.log("🎉 Badge init called");
      } else {
        console.log("❌ window.Calendly NOT FOUND");
      }
    };

    script.onerror = () => {
      console.log("❌ Script failed to load");
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
