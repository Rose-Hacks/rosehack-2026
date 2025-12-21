import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import Title from "@/components/ui/title";

const FAQ = () => {
  return (
    // DD586A
    // C6517F
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#DD586A] to-[#C6517F] z-20 text-white pb-4">
      <Title>FAQ</Title>
      <div className="w-10/12 z-20">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem value={question} key={index}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
