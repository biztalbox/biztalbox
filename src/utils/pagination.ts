/** Items to render in a page number row (numbers + ellipsis gaps). */
export type PageNavItem = number | "ellipsis";

/**
 * Builds page buttons for many pages: leading block, current neighborhood,
 * trailing block, with ellipses between gaps (similar to common job-board UIs).
 */
export function getPaginationItems(
  current: number,
  totalPages: number
): PageNavItem[] {
  if (totalPages <= 0) return [];
  if (totalPages === 1) return [1];
  if (totalPages <= 11) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const set = new Set<number>();

  for (let i = 1; i <= Math.min(6, totalPages); i++) set.add(i);
  for (let i = Math.max(1, totalPages - 2); i <= totalPages; i++) set.add(i);
  for (let i = current - 1; i <= current + 1; i++) {
    if (i >= 1 && i <= totalPages) set.add(i);
  }

  const sorted = Array.from(set).sort((a, b) => a - b);
  const out: PageNavItem[] = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      out.push("ellipsis");
    }
    out.push(sorted[i]);
  }

  return out;
}
