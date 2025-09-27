// Schema data configuration extracted from data.md
import { 
  FAQData, 
  ReviewData, 
  AggregateRatingData, 
  BreadcrumbData,
  Service as ServiceSchema 
} from '@/types/schema-types';

// Base organization data
export const organizationData = {
  name: "Biztalbox Marketing and Business Consulting Private Ltd.",
  legalName: "Biztalbox Marketing and Business Consulting Private Ltd.",
  url: "https://biztalbox.com/",
  logo: "https://biztalbox.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite.607cd96d.png&w=750&q=75",
  telephone: "+91 9485699709",
  email: "info@biztalbox.com",
  foundingDate: "2017",
  founder: "Ish Thakral, Saksham",
  description: "Biztalbox is a full-service digital marketing agency offering 360-degree marketing solutions, including SEO, PPC, social media marketing, web design, content strategy, and more to help businesses grow online.",
  address: {
    streetAddress: "A-11, 2nd Floor, Sector 8",
    addressLocality: "Dwarka",
    addressRegion: "Delhi",
    postalCode: "110077",
    addressCountry: "IN"
  },
  hasMap: "https://maps.app.goo.gl/n2LXt8oMr2xF3qM37",
  openingHours: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00"
  },
  socialMedia: [
    "https://www.facebook.com/BiztalBox",
    "https://x.com/BiztalBox", 
    "https://www.linkedin.com/company/biztal",
    "https://www.youtube.com/@biztalboxofficial",
    "https://www.instagram.com/biztalbox/"
  ],
  services: [
    "Search Engine Optimization",
    "Pay-Per-Click Advertising", 
    "Website Development",
    "Social Media Marketing",
    "Video Editing and Motion Graphics",
    "Content Marketing",
    "Meta Ads",
    "Graphic Designing", 
    "App Development",
    "Marketing and Business Consulting"
  ],
  areaServed: [
    "United States",
    "Canada", 
    "United Kingdom",
    "United Arab Emirates",
    "Australia",
    "India"
  ]
};

// Service-specific data
export const servicesData = {
  seo: {
    name: "SEO Services",
    url: "https://biztalbox.com/best-seo-agency",
    description: "Tailored SEO and AI-powered strategies featuring in-depth competitor analysis, data-driven optimization, targeted keyword research, custom content creation, ROI measurement, and more to boost your online visibility.",
    serviceType: "Search Engine Optimization",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
    aggregateRating: { rating: 4.9, reviewCount: 487, bestRating: 5 },
    reviews: [
      {
        author: "Alex",
        rating: 5,
        text: "They excel at keeping clients informed, simplifying complex SEO projects to make them clear and easy to understand."
      }
    ],
    faqs: [
      {
        question: "Where is your SEO firm located?",
        answer: "Our SEO firm, Biztalbox, is located in Dwarka, New Delhi, India. We serve clients across the globe, including the USA, UK, Australia, and more."
      },
      {
        question: "How do you measure success?", 
        answer: "We measure SEO success through key performance indicators such as organic traffic growth, keyword rankings, click-through rate (CTR), conversions, and return on investment (ROI)."
      },
      {
        question: "Do your SEO services have a minimum contract length?",
        answer: "Yes, our SEO services typically require a minimum contract period of 3 to 6 months to deliver sustainable results, although we also offer flexible plans for specific needs."
      },
      {
        question: "Should I invest in SEO services in the USA or go abroad?",
        answer: "It depends on your goals and budget. While USA-based agencies may offer local expertise, outsourcing SEO to reliable firms like Biztalbox can provide high-quality, cost-effective services tailored for international markets."
      },
      {
        question: "What are SEO services?",
        answer: "SEO services involve strategies and techniques to improve a website's visibility on search engines. This includes keyword research, on-page and off-page optimization, technical SEO, content creation, and analytics tracking."
      }
    ]
  },
  socialMedia: {
    name: "Social Media Marketing Services",
    url: "https://biztalbox.com/social-media-marketing", 
    description: "Strategic and creative social media marketing services tailored for brand awareness, engagement, and performance across Instagram, Facebook, LinkedIn, YouTube, and more.",
    serviceType: "Social Media Marketing",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fsocial.webp&w=1080&q=75",
    aggregateRating: { rating: 4.9, reviewCount: 387, bestRating: 5 },
    reviews: [
      {
        author: "Priya",
        rating: 5,
        text: "Biztalbox's social media team helped us grow followers and engagement with content that actually connects. Great communication and results!"
      }
    ],
    faqs: [
      {
        question: "What social media platforms do you manage?",
        answer: "We manage Instagram, Facebook, LinkedIn, Twitter (X), YouTube, Pinterest, and more based on your business goals."
      },
      {
        question: "How do you measure social media success?",
        answer: "We track reach, engagement rate, follower growth, content performance, and conversions using analytics tools."
      },
      {
        question: "Is content creation included?",
        answer: "Yes, our social media services include visual content, captions, stories, reels, and more—tailored for your brand."
      },
      {
        question: "How often will you post?",
        answer: "We offer flexible posting plans ranging from 3 to 7 posts per week based on your package."
      },
      {
        question: "Do you offer social media ads too?",
        answer: "Yes, we provide paid social media advertising campaigns on Meta platforms, LinkedIn, and YouTube."
      }
    ]
  },
  webDevelopment: {
    name: "Web Development Services",
    url: "https://biztalbox.com/website-development",
    description: "Custom web development services to build fast, secure, and scalable websites using modern technologies like React, Next.js, WordPress, and more.",
    serviceType: "Website Development", 
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2FWEBDEV.webp&w=1080&q=75",
    aggregateRating: { rating: 4.8, reviewCount: 265, bestRating: 5 },
    reviews: [
      {
        author: "Ravi Kumar",
        rating: 5,
        text: "Our new website is lightning-fast, beautifully designed, and optimized for SEO. Biztalbox delivered more than we expected."
      }
    ],
    faqs: [
      {
        question: "What platforms do you develop websites on?",
        answer: "We develop websites using WordPress, Webflow, Shopify, Next.js, React, and fully custom code depending on your project requirements."
      },
      {
        question: "Do you offer responsive and mobile-first design?",
        answer: "Yes, every website we build is fully responsive and optimized for mobile, tablet, and desktop devices."
      },
      {
        question: "Can you redesign our existing website?",
        answer: "Absolutely. We offer redesign services to modernize, speed up, and optimize your existing website for performance and conversions."
      },
      {
        question: "Is SEO included in your web development services?",
        answer: "Yes, our development includes basic technical SEO best practices like clean code, fast loading speeds, mobile optimization, and schema markup."
      },
      {
        question: "How long does it take to build a website?",
        answer: "Depending on complexity, it can take 2 to 6 weeks for most websites. We'll provide a project timeline after the initial consultation."
      }
    ]
  },
  appDevelopment: {
    name: "App Development Services",
    url: "https://biztalbox.com/app-development",
    description: "Custom mobile app development services for Android, iOS, and cross-platform applications with performance, design, and functionality in focus.",
    serviceType: "Mobile App Development",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fapp_dev.webp&w=1080&q=75",
    aggregateRating: { rating: 4.9, reviewCount: 315, bestRating: 5 },
    reviews: [
      {
        author: "Sneha Mehta", 
        rating: 5,
        text: "Biztalbox created an intuitive and scalable mobile app for our startup. Their UX and backend execution were impressive."
      }
    ],
    faqs: [
      {
        question: "Which platforms do you build apps for?",
        answer: "We build mobile apps for Android, iOS, and cross-platform solutions using Flutter and React Native."
      },
      {
        question: "Do you handle UI/UX design as well?",
        answer: "Yes, our app development service includes complete UI/UX design with user flow strategy and prototyping."
      },
      {
        question: "Can you integrate APIs and payment gateways?",
        answer: "Absolutely. We integrate custom APIs, third-party services, Razorpay, Stripe, and more depending on your app needs."
      },
      {
        question: "Will the app be scalable?",
        answer: "Yes, we focus on building scalable architecture so your app can grow with your user base and feature requirements."
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer app maintenance, bug fixes, and upgrades after deployment to keep your app performing well."
      }
    ]
  },
  motionGraphics: {
    name: "Video Editing and Motion Graphics Services",
    url: "https://biztalbox.com/motion-graphics",
    description: "Professional video editing and motion graphics services for ads, reels, explainers, intros, branding, and YouTube content.",
    serviceType: "Video Editing and Motion Design",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2FCAPTAIN_CUT.webp&w=1080&q=75",
    aggregateRating: { rating: 4.8, reviewCount: 228, bestRating: 5 },
    reviews: [
      {
        author: "Nikhil Raj",
        rating: 5,
        text: "Biztalbox produced incredible animated videos for our product launch. They nailed the transitions, style, and pacing."
      }
    ],
    faqs: [
      {
        question: "What types of videos do you edit?",
        answer: "We edit product videos, social media content, YouTube videos, reels, ads, intros, explainers, and more."
      },
      {
        question: "What tools do you use for motion graphics?",
        answer: "We use After Effects, Premiere Pro, and industry-standard tools for professional motion design and animation."
      },
      {
        question: "Can you work with raw footage?",
        answer: "Yes, we can work with raw footage and provide complete editing, color grading, and sound enhancements."
      },
      {
        question: "How long does a typical video project take?",
        answer: "Basic edits take 3–5 days, while advanced motion graphics projects may take 7–14 days depending on complexity."
      },
      {
        question: "Do you provide voiceover and background music?",
        answer: "Yes, we can add licensed background music and professional voiceovers to enhance your video content."
      }
    ]
  },
  graphicDesign: {
    name: "Graphic Designing Services",
    url: "https://biztalbox.com/graphic-designing",
    description: "Creative and strategic graphic design services for branding, advertising, social media, packaging, and more—crafted to communicate visually and effectively.",
    serviceType: "Graphic Design",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2FVECTOR.webp&w=1080&q=75",
    aggregateRating: { rating: 4.9, reviewCount: 342, bestRating: 5 },
    reviews: [
      {
        author: "Aarti Jain",
        rating: 5,
        text: "We love the branding and graphic materials Biztalbox delivered. From logos to banners, everything was polished and professional."
      }
    ],
    faqs: [
      {
        question: "What types of graphic design do you offer?",
        answer: "We offer branding design, social media graphics, packaging, brochures, flyers, banners, and all kinds of marketing creatives."
      },
      {
        question: "Do you design brand identities and logos?",
        answer: "Yes, we specialize in designing complete brand identities including logos, color palettes, typography, and brand guidelines."
      },
      {
        question: "Can you follow our existing brand guidelines?",
        answer: "Absolutely. We ensure all designs align with your current brand identity and maintain consistency across all assets."
      },
      {
        question: "Do you provide designs for print and digital?",
        answer: "Yes, our graphic design services include both print-ready and digital formats for any platform or medium."
      },
      {
        question: "What is your turnaround time?",
        answer: "Turnaround depends on project scope. Simple designs can be delivered in 2–3 days, while branding projects may take 1–2 weeks."
      }
    ]
  },
  contentMarketing: {
    name: "Copywriting and Contentwriting Services",
    url: "https://biztalbox.com/content-marketing",
    description: "Conversion-focused copywriting services for websites, landing pages, ads, product descriptions, blogs, and social media campaigns.",
    serviceType: "Copywriting",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2FCONTENT.webp&w=1080&q=75",
    aggregateRating: { rating: 4.9, reviewCount: 191, bestRating: 5 },
    reviews: [
      {
        author: "Sahil Sharma",
        rating: 5,
        text: "The copywriting team at Biztalbox nailed our brand voice and delivered high-converting content across all touchpoints."
      }
    ],
    faqs: [
      {
        question: "What types of content do you write?",
        answer: "We write website content, product descriptions, social media captions, ad copy, email campaigns, and blog articles."
      },
      {
        question: "Do you write SEO-optimized content?",
        answer: "Yes, all copy is written with on-page SEO best practices including keyword integration, readability, and structure."
      },
      {
        question: "Can you match our brand voice?",
        answer: "Absolutely. We study your brand tone and audience to ensure consistency and clarity in every word we write."
      },
      {
        question: "How fast can you deliver content?",
        answer: "Delivery time varies by scope. Short copy is delivered in 2–3 days, and long-form or website content within 5–7 days."
      },
      {
        question: "Do you offer revisions?",
        answer: "Yes, we include 2 free rounds of revisions to ensure the final copy fully aligns with your goals."
      }
    ]
  },
  performanceMarketing: {
    name: "Performance Marketing Services", 
    url: "https://biztalbox.com/google-ads-service",
    description: "ROI-focused performance marketing services including paid ads, PPC, conversion tracking, retargeting, and campaign optimization across Google, Meta, and more.",
    serviceType: "Performance Marketing",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2FGOOGLE_ADS.webp&w=1080&q=75",
    aggregateRating: { rating: 4.9, reviewCount: 278, bestRating: 5 },
    reviews: [
      {
        author: "Ritika Arora",
        rating: 5,
        text: "Biztalbox helped us scale our ROAS with targeted Google and Meta ad campaigns. Highly analytical and responsive team."
      }
    ],
    faqs: [
      {
        question: "What platforms do you run ads on?",
        answer: "We run paid campaigns on Google Ads, Facebook/Instagram (Meta), LinkedIn, YouTube, and other programmatic platforms."
      },
      {
        question: "How do you track ROI or conversions?",
        answer: "We set up conversion tracking using tools like Google Tag Manager, GA4, Meta Pixel, and CRM integrations to measure real ROI."
      },
      {
        question: "Do you manage the creative for ads?",
        answer: "Yes, we provide ad creatives, copywriting, A/B testing, and ongoing optimization as part of our campaign management."
      },
      {
        question: "What budget do you recommend for performance marketing?",
        answer: "Budgets vary by industry and goals. We recommend starting with ₹25K–₹50K per month and scale based on results."
      },
      {
        question: "How soon can I see results?",
        answer: "Typically, campaigns start producing results within 7–14 days, depending on the platform and offer."
      }
    ]
  },
  metaAds: {
    name: "Meta Ads Services",
    url: "https://biztalbox.com/facebook-ads-service",
    description: "High-converting Meta Ads management including Facebook and Instagram campaigns. Strategy, creative, targeting, and optimization to drive performance.",
    serviceType: "Meta Advertising",
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2FMETA.webp&w=1080&q=75",
    aggregateRating: { rating: 4.8, reviewCount: 213, bestRating: 5 },
    reviews: [
      {
        author: "Manoj Desai",
        rating: 5,
        text: "Biztalbox delivered a 5X ROAS with our Meta Ads campaigns. Their ad creatives, audience targeting, and funnel setup were excellent."
      }
    ],
    faqs: [
      {
        question: "What platforms are covered under Meta Ads?",
        answer: "Meta Ads include advertising across Facebook, Instagram, Messenger, and Audience Network using Meta Business Suite."
      },
      {
        question: "What campaign objectives can you run?",
        answer: "We manage campaigns for lead generation, conversions, brand awareness, traffic, engagement, and app installs."
      },
      {
        question: "Do you create ad creatives and copy?",
        answer: "Yes, we design all ad visuals, write compelling copy, and test multiple variations for best performance."
      },
      {
        question: "Can you track Meta Ads performance with conversions?",
        answer: "Yes, we set up Meta Pixel, Conversion API, and GA4 integrations to track leads, purchases, and other conversions accurately."
      },
      {
        question: "What is your minimum budget for Meta Ads?",
        answer: "We recommend a minimum monthly ad budget of ₹20,000 to ₹50,000 for effective Meta Ads campaigns."
      }
    ]
  },
};

// Main organization reviews for homepage
export const mainReviews: ReviewData[] = [
  {
    author: "Kim Verma",
    rating: 5,
    text: "I had an insightful consultation with the Biztalbox team regarding marketing support for my new brand — and it exceeded expectations. They were generous with advice, genuinely interested in our goals, and transparent about our current fit. No pressure, just valuable guidance. Highly recommend Biztalbox to anyone serious about scaling. Truly an A+ experience!"
  },
  {
    author: "Charlie Martin", 
    rating: 5,
    text: "Biztalbox was extremely professional and played a key role in helping us surpass our marketing goals. As someone new to digital marketing, I appreciated how clearly they explained everything. The team was knowledgeable, approachable, and fully committed throughout our campaign."
  }
];

export const mainAggregateRating: AggregateRatingData = {
  rating: 5,
  reviewCount: 2,
  bestRating: 5
};

// Helper function to get service data by key
export function getServiceData(serviceKey: keyof typeof servicesData) {
  return servicesData[serviceKey];
}

// Helper function to create breadcrumbs
export function createBreadcrumbs(pageName: string, pageUrl: string): BreadcrumbData[] {
  return [
    { name: "Home", url: "https://biztalbox.com/" },
    { name: pageName, url: `https://biztalbox.com${pageUrl}` }
  ];
}

// Service URL mappings
export const serviceUrlMap = {
  'best-seo-agency': 'seo',
  'social-media-marketing': 'socialMedia', 
  'website-development': 'webDevelopment',
  'app-development': 'appDevelopment',
  'motion-graphics': 'motionGraphics',
  'graphic-designing': 'graphicDesign',
  'content-marketing': 'contentMarketing',
  'google-ads-service': 'performanceMarketing',
  'facebook-ads-service': 'metaAds',
} as const;

export type ServiceUrlKey = keyof typeof serviceUrlMap;
export type ServiceDataKey = typeof serviceUrlMap[ServiceUrlKey];
