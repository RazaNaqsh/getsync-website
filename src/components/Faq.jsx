import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const content = [
    {
      key: 1,
      title: "1. What is a Community?",
      desc: "A community is a place or platform where people of same genre meets community is a place or platform where people of same genre meets community is a place or platform where people of same genre meetsA community is a place or platform where people of same genre meets",
    },
    {
      key: 2,
      title: "2. What is getSync?",
      desc: "A community is a place or platform where people of same genre meets community is a place or platform where people of same genre meets community is a place or platform where people of same genre meetsA community is a place or platform where people of same genre meets",
    },
    {
      key: 3,
      title: "3. How I will be benifited?",
      desc: "A community is a place or platform where people of same genre meets community is a place or platform where people of same genre meets community is a place or platform where people of same genre meetsA community is a place or platform where people of same genre meets",
    },
    {
      key: 4,
      title: "4. Is it free?",
      desc: "A community is a place or platform where people of same genre meets community is a place or platform where people of same genre meets community is a place or platform where people of same genre meetsA community is a place or platform where people of same genre meets",
    },
  ];
  return (
    <div className="py-10">
      <h1 className="font-sedan text-[48px] text-center">FREQUENTLY ASKED</h1>
      <div className="w-[80%] mx-auto mt-10 mb-10">
        <Accordion variant="splitted">
          {content.map((c) => (
            <AccordionItem
              key={c.key}
              style={{
                marginBottom: "40px",
                border: "2px solid black",
                fontSize: "20px",
                minHeight: "77px",
                fontWeight: "700",
                paddingTop: "4px",
              }}
              title={c.title}
            >
              <p className="px-8 pb-6 font-normal">{c.desc}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
