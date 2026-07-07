"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

function withInlineReadMore(node: ReactNode, readMore: ReactNode): ReactNode {
  if (!isValidElement(node)) return node;

  if (node.type === "p") {
    return cloneElement(node as ReactElement<{ children?: ReactNode }>, {
      children: (
        <>
          {node.props.children}
          {" "}
          {readMore}
        </>
      ),
    });
  }

  if (node.type === "div") {
    const children = Children.map(node.props.children, (child) =>
      withInlineReadMore(child, readMore),
    );
    return cloneElement(node as ReactElement<{ children?: ReactNode }>, {}, children);
  }

  return node;
}

export function LiteServiceParagraphs({
  first,
  second,
}: {
  first: ReactNode;
  second: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const readMoreButton = (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-controls={panelId}
      className="inline text-xs font-bold uppercase underline underline-offset-4"
    >
      {open ? "Read less" : "Read more"}
    </button>
  );

  return (
    <div className="mt-6 grid md:grid-cols-2 md:gap-10">
      <div className="hidden md:block">{first}</div>
      <div className="md:hidden">
        {withInlineReadMore(first, readMoreButton)}
        <div
          id={panelId}
          className={open ? "mt-2 block" : "hidden"}
          aria-hidden={!open}
        >
          {second}
        </div>
      </div>
      <div className="hidden md:block">{second}</div>
    </div>
  );
}
