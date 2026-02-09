import Hero from "./hero";
import Detail, { FaqItem } from "./detail";

const faq: FaqItem[] = [
  {
    id: 1,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.\n\nLorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 2,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 3,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 4,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 5,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 6,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 7,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 8,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 9,
    question: "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry.",
    answer:
      "Lorem Ipsum is Simply Dummy Text of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
];

export default function Faq() {
  return (
    <>
      <Hero />
      <Detail faq={faq} />
    </>
  );
}
