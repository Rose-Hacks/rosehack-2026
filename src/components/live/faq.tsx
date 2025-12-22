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
    <div className="z-20 flex w-full flex-col items-center bg-gradient-to-b from-[#DD586A] to-[#C6517F] pb-4 text-white">
      <Title>FAQ</Title>
      <div className="z-20 w-10/12">
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
