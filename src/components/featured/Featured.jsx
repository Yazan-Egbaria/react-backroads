import Headline from "../headline/Headline";
import Card from "./Card";

const Featured = () => {
  const cards = [
    {
      id: 1,
      src: "../../../public/assets/tour-1.jpeg",
      h3: "Tibet Adventure",
      p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      id: 2,
      src: "../../../public/assets/tour-2.jpeg",
      h3: "Best of Java",
      p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      id: 3,
      src: "../../../public/assets/tour-3.jpeg",
      h3: "Explore Hong Kong",
      p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      id: 4,
      src: "../../../public/assets/tour-4.jpeg",
      h3: "Kenya Highlights",
      p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      id: 5,
      src: "../../../public/assets/tour-5.jpeg",
      h3: "Madgascar Fantasy",
      p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      id: 6,
      src: "../../../public/assets/tour-6.jpeg",
      h3: "New York City",
      p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
  ];
  return (
    <div className="flexColSection">
      <Headline firstWT="Featured" secondWT="Tours" />

      <div className="flex flex-wrap gap-12 justify-center items-center w-1/2">
        {cards.map((card) => {
          return <Card key={card.id} src={card.src} h3={card.h3} p={card.p} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
