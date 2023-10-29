import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IndicatorOpen } from "../utils/IndicatorOpen";
const Faq = () => {
  const content = [
    {
      key: 1,
      title: "1. What is getSync ?",
      desc: "getSync is a community based  platform that bridges the gap between students seeking valuable internships, mentors eager to share their expertise, and founders in search of top-tier talent.",
    },
    {
      key: 2,
      title: "2. Why would anyone join getSync Community ?",
      desc: "Students join for internship opportunities and mentorship, while founders seek a talented pool and valuable networking.",
    },
    {
      key: 3,
      title: "3. Do I have to pay for something ?",
      desc: "No, the community services are completely FREE.",
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
                paddingBottom: "3px",
              }}
              title={c.title}
              indicator={<IndicatorOpen />}
              className="font-noto"
            >
              <p className="px-8 pb-6 font-normal text-[20px] font-helvetica">
                {c.desc}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
