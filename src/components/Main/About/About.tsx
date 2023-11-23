import Card from "./Card";

const cardsData = [
  {
    id: 1,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDK8d9Iq_5Lw0wXMMBMXxjKQQeT3z9SVppnKwjN0pxpiU6tXMcYEPeSr-KAVc0MgXuE0&usqp=CAU",
    title: "Title One",
    content:
      "cumque maiores tempora culpa numquam sit doloremque eos? Sint, modi facere cum odio possimus laboriosam, excepturi quia iusto ea sequi eveniet?",
  },
  {
    id: 2,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLspqwPtuILnDvflxYrRW8Hyzs-FIONlchKX1k3AnHXArNUCGd0eXJhOJLU0D7sHcn8pE&usqp=CAU",
    title: "Title Tow",
    content:
      "cumque maiores tempora culpa numquam sit doloremque eos? Sint, modi facere cum odio possimus laboriosam, excepturi quia iusto ea sequi eveniet?",
  },
  {
    id: 3,
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFawUZJ_1mjbhsa2hHol5TDsjSfsfJx1NGqX7PyQVqdY_HjuD9AFUc3t7QUdgjoXj_EA4&usqp=CAU",
    title: "Title Three",
    content:
      "cumque maiores tempora culpa numquam sit doloremque eos? Sint, modi facere cum odio possimus laboriosam, excepturi quia iusto ea sequi eveniet?",
  },
];
const About = () => {
  return (
    <section
      className="flex flex-col items-center lg:justify-evenly gap-2 overflow-auto snap-start pt-24 w-full h-screen"
      id="about"
    >
      <h2 className="text-2xl font-bold border-b-2 border-b-slate-300 lg:w-1/6 text-center pb-2">
        About
      </h2>
      <div className="flex flex-col gap-2 lg:flex-row ">
        {cardsData.map((card) => {
          return (
            <Card
              key={card.id}
              src={card.src}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
