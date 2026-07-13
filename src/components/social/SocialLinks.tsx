import React from "react";
import { FaPinterest } from "react-icons/fa";
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

        return (
          <a
            key={key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
          >
            {item.iconType === "react-icon" ? (
              <FaPinterest className="inline-block text-[1.1em]" aria-hidden />
            ) : (
              <i className={item.icon} aria-hidden />
            )}
          </a>
        );
      })}
    </div>
  );
}
