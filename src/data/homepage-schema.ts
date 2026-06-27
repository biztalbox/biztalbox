export const HOME_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://biztalbox.com/#organization",
  name: "BiztalBox",
  url: "https://biztalbox.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
    width: 200,
    height: 60,
  },
  description:
    "Best Digital Marketing Agency offering SEO, Social Media Marketing, Web Development, App Development, Graphic Designing, Motion Graphics, Content Marketing, Google Ads, Meta Ads, and Analysis Algorithm services.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-11, 2nd Floor, Sector 8 Dwarka",
    addressLocality: "New Delhi",
    postalCode: "110077",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9485699709",
    contactType: "customer service",
    email: "info@biztalbox.com",
    availableLanguage: "English",
  },
  knowsAbout: [
    "SEO",
    "Social Media Marketing",
    "Web Development",
    "App Development",
    "Graphic Designing",
    "Motion Graphics",
    "Content Marketing",
    "Google Ads",
    "Meta Ads",
    "Data Analysis",
  ],
  sameAs: [
    "https://www.facebook.com/BiztalBox",
    "https://www.instagram.com/biztalbox",
    "https://x.com/BiztalBox",
    "https://www.linkedin.com/company/biztalbox",
    "https://m.youtube.com/@biztalboxofficial",
    "https://in.pinterest.com/biztalbox/",
  ],
} as const;

export const HOME_LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://biztalbox.com/#localbusiness",
  name: "BiztalBox",
  url: "https://biztalbox.com/",
  image: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
  telephone: "+91-9485699709",
  email: "info@biztalbox.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-11, 2nd Floor, Sector 8 Dwarka",
    addressLocality: "New Delhi",
    postalCode: "110077",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "19:00",
  },
  priceRange: "$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
  ],
} as const;

export const HOME_WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://biztalbox.com/#website",
  name: "BiztalBox",
  url: "https://biztalbox.com/",
  description:
    "Best Digital Marketing Agency offering SEO, Web Development, Social Media Marketing and more.",
  inLanguage: "en-US",
  publisher: {
    "@id": "https://biztalbox.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://biztalbox.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
} as const;

export const HOME_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://biztalbox.com/#webpage",
  url: "https://biztalbox.com/",
  name: "Best Digital Marketing Agency | Website Development - BiztalBox",
  description:
    "Get a great website for your business! Our agency builds easy, attractive sites that help you reach more customers.",
  inLanguage: "en-US",
  isPartOf: {
    "@id": "https://biztalbox.com/#website",
  },
  about: {
    "@id": "https://biztalbox.com/#organization",
  },
  datePublished: "2020-01-01",
  dateModified: "2026-06-01",
} as const;

export const HOME_SERVICES_ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "BiztalBox Services",
  url: "https://biztalbox.com/services",
  numberOfItems: 10,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        serviceType: "Search Engine Optimization",
        name: "SEO Services",
        url: "https://biztalbox.com/best-seo-agency",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Search Engine Optimization to enhance your website for search engines, resulting in improved rankings and increased visibility.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        serviceType: "Social Media Marketing",
        name: "Social Media Marketing",
        url: "https://biztalbox.com/social-media-marketing",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Social Media Marketing is the digital arena where brands connect, captivate, and communicate with their audience.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        serviceType: "Web Development",
        name: "Web Development",
        url: "https://biztalbox.com/website-development",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Web Development service that builds, optimizes, and secures seamless websites tailored to your business needs.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        serviceType: "App Development",
        name: "App Development",
        url: "https://biztalbox.com/app-development",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Mobile App Development service that builds high-performance apps delivering unparalleled performance to keep users coming back for more.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        serviceType: "Data Analysis",
        name: "Analysis Algorithm",
        url: "https://biztalbox.com/analysis-algorithm",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "A precision-powered data analysis algorithm service that instantly analyses vast amounts of data to find hidden patterns and actionable insights.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        serviceType: "Motion Graphics",
        name: "Motion Graphics",
        url: "https://biztalbox.com/motion-graphics",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Motion Graphics and video editing service that turns raw footage into cinematic masterpieces for your brand.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        serviceType: "Graphic Design",
        name: "Graphic Designing",
        url: "https://biztalbox.com/graphic-designing",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Graphic Designing service that turns creative concepts into recognised pieces of art for your brand identity.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        serviceType: "Content Marketing",
        name: "Content Marketing & Copywriting",
        url: "https://biztalbox.com/content-marketing",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Content creation and copywriting service combining high-quality, SEO-optimized material that engages users and search engines alike.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Service",
        serviceType: "Performance Marketing",
        name: "Google Ads & Performance Marketing",
        url: "https://biztalbox.com/google-ads-service",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Google Ads and Performance Marketing service that improves ROI and generates high-value leads through strategic bidding and targeting.",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 10,
      item: {
        "@type": "Service",
        serviceType: "Meta Ads",
        name: "Meta Ads (Facebook Ads)",
        url: "https://biztalbox.com/facebook-ads-service",
        provider: { "@id": "https://biztalbox.com/#organization" },
        description:
          "Meta Ads service that creates visually striking ads with precise targeting across Facebook and Instagram ecosystems to maximise reach and conversions.",
        areaServed: "Worldwide",
      },
    },
  ],
} as const;

export const HOME_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://biztalbox.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://biztalbox.com/about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Services",
      item: "https://biztalbox.com/services",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Careers",
      item: "https://biztalbox.com/career",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Blog",
      item: "https://biztalbox.com/blog",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Contact",
      item: "https://biztalbox.com/contact",
    },
  ],
} as const;

export const HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does BiztalBox offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BiztalBox offers SEO, Social Media Marketing, Web Development, App Development, Graphic Designing, Motion Graphics, Content Marketing, Google Ads, Meta Ads, and Analysis Algorithm services.",
      },
    },
    {
      "@type": "Question",
      name: "Is BiztalBox available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, BiztalBox is not available 24/7. Our working hours are 10:00 AM to 7:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Where is BiztalBox located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BiztalBox is located at A-11, 2nd Floor, Sector 8 Dwarka, New Delhi 110077, India.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact BiztalBox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact BiztalBox by phone at +91-9485699709, by email at info@biztalbox.com, or via WhatsApp at the same number.",
      },
    },
    {
      "@type": "Question",
      name: "Does BiztalBox serve international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BiztalBox serves clients in the USA, UK, Australia, Canada, UAE, New Zealand, Singapore, and India.",
      },
    },
  ],
} as const;

export const HOME_PAGE_SCHEMAS = [
  HOME_ORGANIZATION_SCHEMA,
  HOME_LOCAL_BUSINESS_SCHEMA,
  HOME_WEBSITE_SCHEMA,
  HOME_WEBPAGE_SCHEMA,
  HOME_SERVICES_ITEM_LIST_SCHEMA,
  HOME_BREADCRUMB_SCHEMA,
  HOME_FAQ_SCHEMA,
] as const;
