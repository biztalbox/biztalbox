"use client";

import { useCallback, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

/** Replace each `answer` with your real copy when ready. */
const FAQ_LEFT = [
  {
    id: "l1",
    question: "WHO ARE FILMFOLK?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "l2",
    question: "WHAT IS YOUR CANCELLATION POLICY?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: "l3",
    question: "DO YOU CHARGE FOR TRAVEL?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: "l4",
    question: "HOW MANY IMAGES WILL I RECEIVE?",
    answer:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
] as const;

const FAQ_RIGHT = [
  {
    id: "r1",
    question: "DO YOU OFFER PACKAGE DEALS?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: "r2",
    question: "HOW LONG DOES IT TAKE TO EDIT A VIDEO?",
    answer:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    id: "r3",
    question: "WHAT IF A CREW MEMBER IS SICK?",
    answer:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: "r4",
    question: "CAN YOU EDIT MY OWN FOOTAGE?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
] as const;

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-[#f4f4f4] dark:bg-zinc-800/90">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-3 px-4 py-3.5 text-left sm:items-center sm:py-4"
        aria-expanded={isOpen}
      >
        <span className="min-w-0 flex-1 text-[14px] font-semibold uppercase leading-snug tracking-wide text-zinc-900 dark:text-zinc-100 sm:text-[15px]">
          {question}
        </span>
        <span
          className="pointer-events-none mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white sm:mt-0"
          aria-hidden
        >
          <IoChevronDown
            className={`h-[14px] w-[14px] transition-transform duration-200 ease-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="px-4 pb-4 pt-1">
          <p className="text-[15px] font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[13px]">
            {answer}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function VideoFAQSection() {
  const [openById, setOpenById] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setOpenById((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section
      data-video-section="faq"
      className="bg-white py-14 text-zinc-900 dark:bg-black dark:text-white sm:py-20"
    >
      <div className="container mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <h2 className="max-w-4xl text-left text-xl font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem]">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 h-px w-full bg-zinc-300 dark:bg-zinc-800/70" aria-hidden />

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-4 lg:gap-x-12">
          <div className="flex flex-col gap-4">
            {FAQ_LEFT.map(({ id, question, answer }) => (
              <FaqItem
                key={id}
                question={question}
                answer={answer}
                isOpen={!!openById[id]}
                onToggle={() => toggle(id)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {FAQ_RIGHT.map(({ id, question, answer }) => (
              <FaqItem
                key={id}
                question={question}
                answer={answer}
                isOpen={!!openById[id]}
                onToggle={() => toggle(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
