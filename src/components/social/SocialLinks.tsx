import React from "react";
import type { IconType } from "react-icons";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6";
import socialLinksData from "@/data/social-links.json";

type SocialLinkItem = {
  href: string;
  icon: string;
  ariaLabel: string;
  iconType?: "react-icon";
};

type SocialLinksConfig = {
  liteOrder: string[];
  footerOrder: string[];
  links: Record<string, SocialLinkItem>;
};

const socialLinksConfig = socialLinksData as SocialLinksConfig;

type SocialLinkKey = keyof typeof socialLinksConfig.links;
type SocialLinksVariant = "dark-footer" | "lite-footer";

/**
 * Render each social platform with an inline SVG (react-icons) instead of a
 * Font Awesome `<i>` glyph. The bundled Font Awesome Pro 6.0.0 brand webfont
 * doesn't load reliably on every route (e.g. Tailwind-scoped pages), so the
 * `<i>` icons showed up as empty circles. SVGs always render.
 */
const iconByKey: Record<string, IconType> = {
  x: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  pinterest: FaPinterest,
};

type SocialLinksProps = {
  variant?: SocialLinksVariant;
  className?: string;
  order?: SocialLinkKey[];
};

const defaultOrderByVariant: Record<SocialLinksVariant, SocialLinkKey[]> = {
  "dark-footer": socialLinksConfig.footerOrder as SocialLinkKey[],
  "lite-footer": socialLinksConfig.liteOrder as SocialLinkKey[],
};

export default function SocialLinks({
  variant = "dark-footer",
  className = "",
  order,
}: SocialLinksProps) {
  const resolvedOrder = order ?? defaultOrderByVariant[variant];
  const wrapperClass =
    variant === "lite-footer"
      ? `tp-footer-3-social tp-footer-3-social--lite ${className}`.trim()
      : `tp-footer-3-social ${className}`.trim();

  return (
    <div className={wrapperClass}>
      {resolvedOrder.map((key) => {
        const item = socialLinksConfig.links[key];
        if (!item) return null;

        const Icon = iconByKey[key];

        return (
          <a
            key={key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
          >
            {Icon ? (
              <Icon className="inline-block text-[1.05em]" aria-hidden />
            ) : (
              <i className={item.icon} aria-hidden />
            )}
          </a>
        );
      })}
    </div>
  );
}
