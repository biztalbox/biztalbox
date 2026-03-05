"use client";

import React from "react";

const ALLOWED_TAGS = [
  "p", "br", "strong", "b", "em", "i", "u", "ul", "ol", "li",
  "a", "h2", "h3", "h4", "span", "div", "blockquote",
];
const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ["href", "title", "target", "rel"],
};

function sanitizeHtml(html: string): string {
  if (typeof html !== "string" || !html.trim()) return "";
  if (typeof DOMParser === "undefined") {
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  }
  const doc = new DOMParser().parseFromString(html, "text/html");
  const walk = (node: Node): void => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as Element;
    const tag = el.tagName.toLowerCase();
    if (!ALLOWED_TAGS.includes(tag)) {
      el.replaceWith(...Array.from(el.childNodes));
      return;
    }
    const allowedAttrs = ALLOWED_ATTRS[tag];
    if (allowedAttrs) {
      Array.from(el.attributes).forEach((attr) => {
        if (!allowedAttrs.includes(attr.name.toLowerCase())) {
          el.removeAttribute(attr.name);
        }
      });
    } else {
      el.getAttributeNames().forEach((name) => el.removeAttribute(name));
    }
    Array.from(el.childNodes).forEach(walk);
  };
  walk(doc.body);
  return doc.body.innerHTML;
}

interface SafeHtmlProps {
  html: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Renders CMS-supplied HTML safely. Plain text (no tags) is wrapped in a single <p>.
 * Use for rich text fields: pricing_content, conclusion_content, FAQ answers, etc.
 */
export default function SafeHtml({ html, className, as: Wrapper = "div" }: SafeHtmlProps) {
  const trimmed = typeof html === "string" ? html.trim() : "";
  if (!trimmed) return null;

  const looksLikeHtml = /<[a-z][\s\S]*>/i.test(trimmed);
  const content = looksLikeHtml ? sanitizeHtml(trimmed) : trimmed;
  const isHtml = looksLikeHtml && content.length > 0;

  if (Wrapper === "div") {
    return (
      <div
        className={className}
        {...(isHtml ? { dangerouslySetInnerHTML: { __html: content } } : {})}
      >
        {!isHtml ? content : null}
      </div>
    );
  }

  const Component = Wrapper;
  return (
    <Component
      className={className}
      {...(isHtml ? { dangerouslySetInnerHTML: { __html: content } } : {})}
    >
      {!isHtml ? content : null}
    </Component>
  );
}
