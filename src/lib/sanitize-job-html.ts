/**
 * Strips dangerous patterns from CMS HTML before `dangerouslySetInnerHTML`.
 * CMS content is treated as trusted; still remove scripts/iframes/event handlers.
 */
export function sanitizeJobHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe\b[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object\b[\s\S]*?<\/object>/gi, "")
    .replace(/<embed\b[^>]*\/?>/gi, "")
    .replace(/\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "");
}

export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
