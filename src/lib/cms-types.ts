export interface BenefitsItem {
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  body: string;
}

export interface HowWeWorkStep {
  title: string;
  body: string;
}

/** Same shape as WhyChooseItem – title + body (body may be HTML from rich text). */
export interface ServicesOfferedItem {
  title: string;
  body: string;
}

export interface CMSPageData {
  slug: string;
  title: string;
  description: string;
  hero_title: string;
  hero_paragraph_1: string;
  hero_paragraph_2: string;
  cta_subtitle: string;
  cta_title: string;
  cta_body: string;
  benefits_title: string;
  benefits_subtitle: string;
  benefits_items: BenefitsItem[];
  why_choose_title: string;
  why_choose_items: WhyChooseItem[];
  how_we_work_title: string;
  how_we_work_steps: HowWeWorkStep[];
  /** Services offered section (below industry cards); same design as Why Choose Us. */
  services_offered_title?: string;
  services_offered_items?: ServicesOfferedItem[];
  /** Pricing section (above FAQs): heading + rich text HTML. */
  pricing_heading?: string;
  pricing_content?: string;
  /** Conclusion section (after FAQs): heading + rich text HTML. */
  conclusion_heading?: string;
  conclusion_content?: string;
  faqs: { question: string; answer: string }[];
}

export interface CMSSettings {
  projects_count: string;
  contact_phone: string;
  contact_email: string;
  cta_default_subtitle: string;
  cta_default_title: string;
  cta_default_body: string;
}
