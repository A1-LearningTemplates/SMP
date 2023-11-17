import Header from "./Header";

const index = () => {
  return (
    <div className="h-screen overflow-y-scroll snap snap-y snap-mandatory scrollbar-hide scroll-smooth scroll-my-6">
      <Header />
      <div className="h-screen bg-zinc-700 snap-start">About</div>
      <div className="h-screen bg-red-500 snap-start">Review</div>
      <div className="h-screen bg-amber-500 snap-start">Contact</div>
    </div>
  );
};

export default index;
