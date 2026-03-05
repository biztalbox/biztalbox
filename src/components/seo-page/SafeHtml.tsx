"use client";

import React from "react";

const ALLOWED_TAGS = [
  "p", "br", "strong", "b", "em", "i", "u", "ul", "ol", "li",
  "a", "h2", "h3", "h4", "span", "div", "blockquote",
];
const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ["href", "title", "target", "rel"],
};

const stripScripts = (s: string) =>
  s.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

function sanitizeHtml(html: string): string {
  if (typeof html !== "string" || !html.trim()) return "";
  try {
    if (typeof DOMParser === "undefined") {
      return stripScripts(html);
    }
    const doc = new DOMParser().parseFromString(html, "text/html");
    const body = doc?.body;
    if (!body) return stripScripts(html);
    const walk = (node: Node): void => {
      if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
      const el = node as Element;
      const tag = el.tagName?.toLowerCase?.();
      if (!tag || !ALLOWED_TAGS.includes(tag)) {
        try {
          el.replaceWith(...Array.from(el.childNodes));
        } catch {
          /* ignore DOM mutation errors */
        }
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
    Array.from(body.childNodes).forEach(walk);
    return body.innerHTML ?? html;
  } catch {
    return stripScripts(html);
  }
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
  if (html == null || typeof html !== "string") return null;
  const trimmed = html.trim();
  if (!trimmed) return null;

  const looksLikeHtml = /<[a-z][\s\S]*>/i.test(trimmed);
  const content = String(looksLikeHtml ? sanitizeHtml(trimmed) : trimmed);
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
