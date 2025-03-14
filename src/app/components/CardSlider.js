import Image from "next/image";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", image: "img/slider/slider1.jpeg" },
    { id: 2, title: "Card 2", image: "img/slider/slider2.jpeg" },
    { id: 3, title: "Card 3", image: "img/slider/slider3.jpeg" },
    { id: 4, title: "Card 1", image: "img/slider/slider1.jpeg" },
    { id: 5, title: "Card 2", image: "img/slider/slider2.jpeg" },
    { id: 6, title: "Card 3", image: "img/slider/slider3.jpeg" },
  ];

  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex gap-4 px-4 overflow-x-scroll scrollbar-hide snap-x scroll-smooth">
        {cards.map((card) => (
          <img
            key={card.id} 
            src={card.image}
            alt={card.title}
            className="w-64 h-50 object-fill rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
