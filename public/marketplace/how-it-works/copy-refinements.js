const guides = [
  {
    id: "rent",
    label: "01 · RENT EQUIPMENT",
    title: "Rent Equipment for Every Project",
    intro: "Find industrial equipment that suits your project, schedule and location. Compare availability, rental rates and practical requirements before you enquire.",
    regionalNote: "Marketplace rentals are currently available only in Singapore and Malaysia. In other regions, Antbuildz connects you directly with suppliers through a dedicated enquiry channel.",
    steps: [
      ["Find the Right Equipment", "Browse industrial equipment by type, availability and location."],
      ["Review Rental Details", "Compare rental rates, dates, delivery and site requirements before reserving."],
      ["Arrange Collection or Delivery", "Confirm the rental with the supplier and get the equipment to site."],
    ],
    cta: "Browse rental equipment",
    graphicCaption: "Find and reserve equipment",
  },
  {
    id: "rent-out",
    label: "02 · LIST FOR RENT",
    title: "Turn Idle Equipment Into Revenue",
    intro: "List industrial equipment for rent and reach businesses searching for machinery, tools and site equipment.",
    steps: [
      ["Create a Complete Listing", "Add equipment details, photos, rental rates and availability."],
      ["Review Rental Enquiries", "Assess renter requirements and confirm the right hire for your equipment."],
      ["Confirm the Hire", "Agree on terms and arrange handover or delivery."],
    ],
    cta: "List equipment for rent",
    graphicCaption: "List rental equipment",
  },
  {
    id: "buy",
    label: "03 · BUY INDUSTRIAL PRODUCTS",
    title: "Buy Industrial Equipment With Clarity",
    intro: "Find industrial equipment, tools, materials and parts for sale. Compare the details that matter before you contact a seller.",
    steps: [
      ["Search for Suitable Products", "Browse by category, brand, application and condition."],
      ["Compare Product Details", "Review specifications, asking price, seller details and availability."],
      ["Start Negotiating", "Contact the seller to discuss price, delivery and the next steps."],
    ],
    cta: "Browse equipment for sale",
    graphicCaption: "Search, compare and start negotiating",
  },
  {
    id: "sell",
    label: "04 · SELL INDUSTRIAL PRODUCTS",
    title: "Sell Industrial Products to Business Buyers",
    intro: "List industrial equipment for sale with the specifications, condition and asking price buyers need before they enquire.",
    steps: [
      ["Create a Detailed Listing", "Add condition, specifications, photos and your asking price."],
      ["Review Buyer Enquiries", "Respond to buyers interested in your equipment."],
      ["Start Negotiating", "Discuss price, delivery or collection directly with the buyer."],
    ],
    cta: "List equipment for sale",
    graphicCaption: "List, connect and start negotiating",
  },
];

const faqs = [
  {
    question: "How do I rent equipment on Antbuildz?",
    answer: "Browse rental listings, compare options, confirm price, terms and availability with the supplier, then arrange collection or delivery.",
  },
  {
    question: "How do I rent out equipment on Antbuildz?",
    answer: "Create a listing with photos, specifications, rates and availability. Review enquiries, agree the hire terms and arrange delivery or collection.",
  },
  {
    question: "How do I buy equipment on Antbuildz?",
    answer: "Search equipment for sale, compare the condition and seller details, then contact the seller to negotiate price, delivery and the next steps.",
  },
  {
    question: "How do I sell equipment on Antbuildz?",
    answer: "List the equipment with its condition, specifications, photos and asking price. Review buyer enquiries, then negotiate price, delivery or collection directly with the buyer.",
  },
  {
    question: "Are marketplace listings verified?",
    answer: "Antbuildz reviews marketplace users and listings. You should still confirm the equipment condition, commercial terms and transaction details before committing.",
  },
  {
    question: "How are payments handled?",
    answer: "For equipment sales, buyers and sellers agree payment terms directly. Confirm the total, deposit, schedule and accepted payment method before committing.",
  },
];

const benefits = [
  ["Trusted marketplace", "Marketplace users and listings are reviewed to help buyers and renters begin with more confidence."],
  ["Wide selection", "Find construction and industrial equipment across categories in one place."],
  ["Clear deal terms", "Discuss price, availability, delivery and handover before you commit."],
  ["Practical transactions", "Keep each deal moving with direct communication between the parties."],
];

const marketplaceValueProps = [
  ["Fast & Easy", "Search, compare, rent or buy industrial products in just a few clicks."],
  ["Compare Rates & Prices", "Review rental rates and sale prices before you enquire or reserve."],
  ["Flexible Rental Periods", "Rent for a day, a week or longer to match your project schedule."],
  ["Trusted Listings", "Marketplace users and listings are reviewed to help you compare equipment details, pricing and availability with more confidence."],
  ["Comprehensive Industrial Range", "Find machinery, tools, building materials, MRO supplies and aftermarket parts in one marketplace."],
  ["AI-Powered Guidance", "Ask Aria to clarify your needs and guide you to the right product or next step."],
];

const heroEquipmentTerms = [
  "equipment?",
  "machinery?",
  "tools?",
  "hardware?",
  "parts?",
  "accessories?",
  "materials?",
];

const ariaAgentBackground = "/marketplace/how-it-works/assets/aria-cta-background-v2.jpg";

const standardFooterGroups = [
  {
    title: "Marketplace",
    links: [
      ["Rental", "https://antbuildz.com/equipments", true],
      ["Buy & Sell", "https://antbuildz.com/buy", true],
      ["Parts & accessories", "https://antbuildz.com/buy/spare_parts_and_accessories", true],
      ["How It Works", "/how-it-works/"],
      ["List equipment", "/main-dashboard/listings/rental/ai"],
      ["Insurance", "/insurance"],
      ["Marketplace FAQs", "/help/marketplace"],
    ],
  },
  {
    title: "AI Products",
    links: [
      ["AI Webstore Suite", "/webstore"],
      ["AI Sales Agent", "/aiagent"],
      ["Resources", "/resources"],
      ["AI Product FAQs", "/help/ai"],
      ["Pricing Plan", "/pricing"],
      ["Book a Demo", "/book-a-demo"],
    ],
  },
  {
    title: "Who We Serve",
    links: [
      ["Rental & Leasing", "/rental-businesses"],
      ["Manufacturer & OEM", "/manufacturers-brands"],
      ["Dealers & Distributors", "/dealers-distributors"],
      ["Industrial & MRO", "/industrial-mro"],
      ["Trade Supplies", "/hardware-trade-supplies"],
      ["Building Materials", "/building-engineering"],
      ["Parts & Aftermarket", "/parts-aftermarket"],
      ["Buggy & Vehicle", "/buggies-commercial-vehicles"],
    ],
  },
  {
    title: "AI Agent Roles",
    links: [
      ["Sales Specialist", "/resources/ai-sales-agent-for-industrial-businesses"],
      ["Customer Service", "/resources/ai-customer-service-agent-for-industrial-businesses"],
      ["Technical Support", "/resources/ai-technical-support-agent-for-industrial-businesses"],
      ["Product Specialist", "/resources/ai-product-specialist-for-industrial-businesses"],
      ["After-Sales Support", "/resources/ai-after-sales-agent-for-industrial-businesses"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Agreement & Policy", "/agreements"],
      ["Help Centre", "/help"],
      ["Blogs", "/blogs"],
    ],
  },
];

const footerIcons = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.261h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.9 6.986c-.002 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
};

function replaceFooterWithStandardFooter() {
  const footer = document.querySelector(".shared-footer, .abz-public-footer");

  if (!footer || footer.dataset.standardFooter === "true") return;

  const columns = standardFooterGroups.map(({ title, links }) => {
    const whoWeServeClass = title === "Who We Serve" ? " standard-footer__column--who-we-serve" : "";
    const items = links.map(([label, href, external]) => `<li><a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a></li>`).join("");
    return `<nav class="standard-footer__column${whoWeServeClass}" aria-label="${title}"><h2>${title}</h2><ul>${items}</ul></nav>`;
  }).join("");

  footer.dataset.standardFooter = "true";
  footer.className = "shared-footer standard-footer";
  footer.setAttribute("aria-label", "Antbuildz footer");
  footer.innerHTML = `
    <div class="standard-footer__main">
      <div class="standard-footer__container standard-footer__grid">
        <div class="standard-footer__brand">
          <a href="/" aria-label="Antbuildz home"><img src="/antbuildz-wordmark.png" alt="Antbuildz" /></a>
          <p>Building the Intelligence Layer for Industrial Products.</p>
        </div>
        ${columns}
      </div>
    </div>
    <div class="standard-footer__bottom">
      <div class="standard-footer__container standard-footer__bottom-inner">
        <div class="standard-footer__social-list" aria-label="Antbuildz social channels">
          <a class="standard-footer__social-link--email" href="mailto:info@antbuildz.com" aria-label="Email">${footerIcons.email}</a>
          <a class="standard-footer__social-link--facebook" href="https://www.facebook.com/antbuildz" target="_blank" rel="noreferrer" aria-label="Facebook">${footerIcons.facebook}</a>
          <a class="standard-footer__social-link--linkedin" href="https://www.linkedin.com/company/antbuildz/about" target="_blank" rel="noreferrer" aria-label="LinkedIn">${footerIcons.linkedin}</a>
          <a class="standard-footer__social-link--whatsapp" href="https://api.whatsapp.com/send?phone=6588318705" target="_blank" rel="noreferrer" aria-label="WhatsApp">${footerIcons.whatsapp}</a>
        </div>
        <p>© 2026 Antbuildz.com</p>
      </div>
    </div>`;
}

function repairWordmarkLogos() {
  document.querySelectorAll('img[src*="antbuildz-wordmark.png"]').forEach((logo) => {
    if (logo.getAttribute("src") !== "/antbuildz-wordmark.png") {
      logo.setAttribute("src", "/antbuildz-wordmark.png");
    }
  });
}

function updateHowItWorksLinks() {
  document.querySelectorAll('a[href="/marketplace/how-it-works/index.html"]').forEach((link) => {
    link.setAttribute("href", "/how-it-works/");
  });
}

function standardizeHeader() {
  const blogHeader = document.querySelector(".blog-public-header");
  const blogDesktopLinks = blogHeader?.querySelectorAll(".blog-public-links a");
  const blogMobileLinks = blogHeader?.querySelectorAll(".blog-mobile-nav a");

  if (blogHeader && blogDesktopLinks?.length) {
    blogHeader.dataset.standardHeader = "true";
    const productDestinations = ["/home", "/webstore-2", "/pricing", "/develop-admin"];
    const mobileDestinations = [...productDestinations, "/blogs"];
    blogDesktopLinks.forEach((link, index) => link.setAttribute("href", productDestinations[index]));
    blogMobileLinks?.forEach((link, index) => link.setAttribute("href", mobileDestinations[index]));
    setText(blogDesktopLinks[0], "AI Sales Agent");
    setText(blogMobileLinks?.[0], "AI Sales Agent");
    const blogLogo = blogHeader.querySelector(".blog-public-logo");
    const blogSignIn = blogHeader.querySelector('.blog-public-utilities > a[href*="sign-in"]');
    const blogAddListing = blogHeader.querySelector(".blog-add-listing");
    if (blogLogo) {
      blogLogo.setAttribute("href", "/");
      blogLogo.setAttribute("aria-label", "Antbuildz home");
      const existingWordmark = blogLogo.querySelector('img[src="/antbuildz-wordmark.png"]');
      if (!existingWordmark) {
        blogLogo.innerHTML = '<img src="/antbuildz-wordmark.png" alt="Antbuildz" />';
      }
    }
    if (blogSignIn) blogSignIn.setAttribute("href", "/sign-in");
    if (blogAddListing) blogAddListing.setAttribute("href", "/main-dashboard/listings/rental/ai");
    return;
  }

  const topbar = document.querySelector(".topbar");
  const nav = topbar?.querySelector(".nav");
  const logo = topbar?.querySelector(".logo");
  const signIn = topbar?.querySelector(".account > a:first-child");
  const addListing = topbar?.querySelector(".add-listing");

  if (!topbar || !nav || topbar.dataset.standardHeader === "true") return;

  topbar.dataset.standardHeader = "true";
  topbar.setAttribute("aria-label", "Antbuildz header");
  nav.setAttribute("aria-label", "Antbuildz product pages");
  nav.innerHTML = `
    <a href="/home">AI Sales Agent</a>
    <a href="/webstore-2">AI Webstore Suite</a>
    <a href="/pricing">Pricing</a>
    <a href="/develop-admin">Backend Admin</a>`;

  if (logo) logo.setAttribute("href", "/");
  if (signIn) signIn.setAttribute("href", "/sign-in");
  if (addListing) addListing.setAttribute("href", "/main-dashboard/listings/rental/ai");
}

function setText(element, text) {
  if (element && element.textContent.trim() !== text) {
    element.textContent = text;
  }
}

function replaceHeroGraphic() {
  const frame = document.querySelector(".hero-frame");

  if (!frame || frame.dataset.antbuildzGraphic === "marketplace-photo") return;

  frame.dataset.antbuildzGraphic = "marketplace-photo";
  frame.replaceChildren(Object.assign(document.createElement("img"), {
    className: "marketplace-guide-hero-image",
    src: "/marketplace/how-it-works/assets/industrial-marketplace-hero-mountain-route-v1.png",
    alt: "Excavator being transported along a mountain road towards an industrial worksite.",
    decoding: "async",
  }));
}

function addHeroPrompt() {
  const frame = document.querySelector(".hero-frame");

  if (!frame || frame.dataset.animatedPrompt === "true") return;

  frame.dataset.animatedPrompt = "true";

  const prompt = document.createElement("div");
  prompt.className = "marketplace-guide-hero-prompt";
  prompt.innerHTML = `
    <span class="marketplace-guide-hero-prompt__sr-only">Looking to rent or buy equipment, machinery, tools, hardware, parts, accessories or materials? Browse the Antbuildz industrial marketplace.</span>
    <div class="marketplace-guide-hero-prompt__visual" aria-hidden="true">
      <span class="marketplace-guide-hero-prompt__lead">Looking to rent or buy</span>
      <strong class="marketplace-guide-hero-prompt__term">${heroEquipmentTerms[0]}</strong>
    </div>`;
  frame.append(prompt);
}

function startHeroTermRotation() {
  const frame = document.querySelector(".hero-frame");
  const term = frame?.querySelector(".marketplace-guide-hero-prompt__term");

  if (!frame || !term || frame.dataset.termRotation === "true") return;

  frame.dataset.termRotation = "true";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setText(term, "equipment?");
    return;
  }

  let activeTerm = 0;
  window.setInterval(() => {
    term.classList.add("is-changing");

    window.setTimeout(() => {
      activeTerm = (activeTerm + 1) % heroEquipmentTerms.length;
      setText(term, heroEquipmentTerms[activeTerm]);
      term.classList.remove("is-changing");
    }, 170);
  }, 1800);
}

function removeHeroJumpLinks() {
  document.querySelector(".hero .jump")?.remove();
}

function removeGuideCtas() {
  document.querySelectorAll(".guide a.cta").forEach((cta) => cta.remove());
}

function replaceGeneratorCardWithBoomLift() {
  document.querySelectorAll('img[src*="portable-generator-card.png"]').forEach((image) => {
    const card = image.parentElement?.parentElement?.parentElement;
    const details = card?.children[1];
    const rates = details?.children[2];
    const rateValues = rates
      ? Array.from(rates.children).map((rate) => rate.children[1])
      : [];

    image.setAttribute("src", "/marketplace/how-it-works/assets/boom-lift-16m.png");
    image.style.mixBlendMode = "multiply";
    image.style.backgroundColor = "transparent";

    setText(details?.children[0], "Access Equipment");
    setText(details?.children[1], "16m Articulated Boom Lift");
    setText(rateValues[0], "$450");
    setText(rateValues[1], "$2,250");
    setText(rateValues[2], "$7,200");
  });
}

function addSalesAgentCta() {
  const valueProps = document.querySelector(".marketplace-value-props");

  if (!valueProps || document.querySelector(".marketplace-sales-agent-cta")) return;

  const section = document.createElement("section");
  section.className = "marketplace-sales-agent-cta";
  section.setAttribute("aria-labelledby", "marketplace-sales-agent-cta-heading");
  section.innerHTML = `
    <div class="marketplace-sales-agent-cta__panel">
      <img
        class="marketplace-sales-agent-cta__background"
        src="${ariaAgentBackground}"
        alt="Aria, Antbuildz AI Sales Agent"
        loading="lazy"
        decoding="async"
      />
      <div class="marketplace-sales-agent-cta__copy">
        <p class="marketplace-sales-agent-cta__eyebrow">MEET ARIA</p>
        <h2 id="marketplace-sales-agent-cta-heading">Talk to Aria, Our AI Sales Agent.</h2>
        <p class="marketplace-sales-agent-cta__description">Tell Aria what you need, whether you’re looking to rent or buy, and any product preferences. She’ll guide you to the right option.</p>
        <a
          class="marketplace-sales-agent-cta__button"
          href="/chat"
          aria-label="Talk to Aria in the Antbuildz AI Agent terminal"
        >
          <span>Talk to Aria</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <p class="marketplace-sales-agent-cta__name">Aria · AI Sales Agent</p>
    </div>`;

  valueProps.insertAdjacentElement("afterend", section);
}

function addMarketplaceRegionNote() {
  const fourthJourney = document.querySelector("#sell");
  const noteCopy = guides.find((guide) => guide.id === "rent")?.regionalNote;
  let regionNote = document.querySelector(".marketplace-region-note");

  if (!fourthJourney || !noteCopy) return;

  if (!regionNote) {
    regionNote = document.createElement("aside");
    regionNote.className = "marketplace-region-note";
    regionNote.setAttribute("role", "note");
    regionNote.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
        <path d="M12 10.5v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
        <circle cx="12" cy="7.5" r="1" fill="currentColor"></circle>
      </svg>
      <p><strong>Regional availability:</strong> ${noteCopy}</p>`;
  }

  if (regionNote.previousElementSibling !== fourthJourney) {
    fourthJourney.insertAdjacentElement("afterend", regionNote);
  }
}

function addMarketplaceFaqSection() {
  const salesAgentCta = document.querySelector(".marketplace-sales-agent-cta");
  let faqSection = document.querySelector("main > .faq");

  if (!salesAgentCta) return;

  if (!faqSection) {
    faqSection = document.createElement("section");
    faqSection.className = "faq";
    faqSection.setAttribute("aria-labelledby", "marketplace-faq-heading");
    faqSection.innerHTML = `
      <p class="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <div class="faq-head">
        <h2 id="marketplace-faq-heading">Marketplace questions, answered</h2>
        <p>Straightforward answers for renters, equipment owners, buyers and sellers.</p>
      </div>
      <div class="faq-grid">
        ${faqs.map((faq, index) => `
          <article class="faq-item">
            <button
              type="button"
              aria-expanded="false"
              aria-controls="marketplace-faq-answer-${index + 1}"
            >
              <span>${faq.question}</span>
            </button>
            <p id="marketplace-faq-answer-${index + 1}" hidden>${faq.answer}</p>
          </article>`).join("")}
      </div>`;

    faqSection.querySelectorAll(".faq-item").forEach((item) => {
      const button = item.querySelector("button");
      const answer = item.querySelector("p");

      button?.addEventListener("click", () => {
        const willExpand = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(willExpand));
        item.classList.toggle("active", willExpand);
        answer.hidden = !willExpand;
      });
    });
  }

  if (faqSection.previousElementSibling !== salesAgentCta) {
    salesAgentCta.insertAdjacentElement("afterend", faqSection);
  }
}

function updateGraphicCaptions() {
  document.querySelectorAll(".guide-action-player").forEach((player, index) => {
    const caption = player.querySelector(".__remotion-player > div > div:first-child > div > div:nth-child(2)");
    const guide = guides[index];

    if (caption && guide?.graphicCaption) setText(caption, guide.graphicCaption);
  });
}

function updateRentalGraphicCopy() {
  const rentalGraphic = document.querySelector("#rent .guide-action-player");

  if (!rentalGraphic) return;

  const replacements = new Map([
    ["Request", "Reserve"],
    ["Rental request sent", "Reservation submitted"],
  ]);
  const textWalker = document.createTreeWalker(rentalGraphic, NodeFilter.SHOW_TEXT);
  let textNode = textWalker.nextNode();

  while (textNode) {
    const currentText = textNode.nodeValue.trim();
    const replacement = replacements.get(currentText);

    if (replacement) {
      textNode.nodeValue = textNode.nodeValue.replace(currentText, replacement);
    }

    textNode = textWalker.nextNode();
  }
}

function removeAiGuidanceSection() {
  document.querySelector(".marketplace-ai-bridge")?.remove();
}

function applyCopy() {
  replaceHeroGraphic();
  addHeroPrompt();
  startHeroTermRotation();
  removeHeroJumpLinks();
  removeGuideCtas();
  replaceGeneratorCardWithBoomLift();
  addSalesAgentCta();
  addMarketplaceRegionNote();
  addMarketplaceFaqSection();
  removeAiGuidanceSection();
  repairWordmarkLogos();
  standardizeHeader();
  replaceFooterWithStandardFooter();
  updateHowItWorksLinks();
  updateRentalGraphicCopy();
  const heroEyebrow = document.querySelector(".hero-head .eyebrow");
  const heroHeading = document.querySelector(".hero h1");
  const heroCopy = document.querySelector(".hero-head > p:last-child");

  setText(heroEyebrow, "ANTBUILDZ INDUSTRIAL MARKETPLACE");

  const desiredHeroHeading = '<span class="marketplace-hero-title__lead">Industrial Equipment Marketplace</span> <span class="marketplace-hero-title__outcome">Search, Compare, Rent &amp; Buy</span>';

  if (heroHeading && heroHeading.innerHTML !== desiredHeroHeading) {
    heroHeading.innerHTML = desiredHeroHeading;
  }

  setText(heroCopy, "Search and compare industrial equipment, machinery, tools, hardware, materials, MRO supplies, parts and accessories, then rent or buy directly from suppliers through Antbuildz Marketplace.");

  guides.forEach((guide) => {
    const section = document.getElementById(guide.id);

    if (!section) return;

    const title = section.querySelector("h2");
    const intro = section.querySelector(".intro");
    const label = section.querySelector(".kicker");
    const steps = section.querySelectorAll("ol li");

    setText(title, guide.title);
    setText(intro, guide.intro);
    setText(label, guide.label);

    steps.forEach((step, index) => {
      const [stepTitle, stepCopy] = guide.steps[index];
      const heading = step.querySelector("strong");
      const copy = step.querySelector("p");

      setText(heading, stepTitle);
      setText(copy, stepCopy);
    });
  });

  document.querySelectorAll(".benefits > div").forEach((card, index) => {
    const [heading, copy] = benefits[index] || [];
    const text = card.querySelector("span");

    if (heading && text && text.textContent.trim() !== `${heading}${copy}`) {
      text.innerHTML = `<strong>${heading}</strong>${copy}`;
    }
  });

  document.querySelectorAll(".marketplace-value-props__card").forEach((card, index) => {
    const [heading, copy] = marketplaceValueProps[index] || [];

    setText(card.querySelector("h3"), heading);
    setText(card.querySelector("p"), copy);
  });

  const valueEyebrow = document.querySelector(".marketplace-value-props__heading .eyebrow");
  const valueTitle = document.querySelector("#marketplace-value-heading");
  const valueCopy = document.querySelector(".marketplace-value-props__heading > p:last-child");

  setText(valueEyebrow, "WHY ANTBUILDZ MARKETPLACE");
  setText(valueTitle, "Built for Industrial Trade");
  setText(valueCopy, "Search, compare, rent or buy equipment, machinery, tools, spare parts, hardware and accessories—all in one trusted industrial products marketplace.");

  document.querySelectorAll(".faq-item").forEach((item, index) => {
    const faq = faqs[index];
    const question = item.querySelector("button span");
    const answer = item.querySelector("p");

    if (!faq) return;
    setText(question, faq.question);
    setText(answer, faq.answer);
  });

  const faqHeading = document.querySelector(".faq-head h2");
  const faqCopy = document.querySelector(".faq-head p");
  const footerCopy = document.querySelector(".footer-brand p");

  setText(faqHeading, "Marketplace questions, answered");
  setText(faqCopy, "Straightforward answers for renters, equipment owners, buyers and sellers.");
  setText(footerCopy, "A B2B marketplace for industrial products and businesses everywhere.");
}

function initialiseCopyRefinements() {
  applyCopy();

  const observer = new MutationObserver(applyCopy);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  const applyGraphicCaptionsWhenReady = () => {
    if (document.querySelectorAll(".guide-action-player .__remotion-player").length === guides.length) {
      updateGraphicCaptions();
      return;
    }

    window.requestAnimationFrame(applyGraphicCaptionsWhenReady);
  };

  window.requestAnimationFrame(applyGraphicCaptionsWhenReady);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseCopyRefinements, { once: true });
} else {
  initialiseCopyRefinements();
}
