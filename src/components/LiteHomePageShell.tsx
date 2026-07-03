import LiteHomePage from "@/components/LiteHomePage";
import LiteScrollRestoreScript from "@/components/LiteScrollRestoreScript";

/** Server wrapper: early scroll fix + client lite homepage. */
export default function LiteHomePageShell() {
  return (
    <>
      <LiteScrollRestoreScript />
      <LiteHomePage />
    </>
  );
}
