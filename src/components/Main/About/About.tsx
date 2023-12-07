import Card from "./Card";

const cardsData = [
  {
    id: 1,
    src:
      "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
    title: "Real-time Capabilities",
    content:
      "SMP leverages real-time technologies, offering users instantaneous updates and interactions, creating a dynamic and engaging community.",
  },
  {
    id: 2,
    src:
      "https://www.pragmaticinstitute.com/resources/wp-content/uploads/sites/6/2022/03/54182154_m-scaled.jpg",
    title: "Content Sharing Innovation",
    content:
      "SMP facilitates effortless sharing of multimedia content, keeping users connected and entertained.",
  },
  {
    id: 3,
    src:
      "https://www.invensislearning.com/blog/wp-content/uploads/2020/10/Top-cybersecurity-threats-and-how-to-address-them-1068x552-1.jpg",
    title: "Privacy Controls",
    content:
      "SMP empowers users with granular privacy settings, ensuring a safe and customized online environment.",
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
      <div className="flex flex-col gap-2 lg:flex-row  ">
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
