const Header = () => {
  return (
    <section className="flex h-screen items-center gap-4 snap-start pt-20 lg:pb-0">
      <div className="overflow-hidden hidden flex-1 h-2/3 w-full rounded md:block ">
        <img
          className="shadow w-full"
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center text-center h-2/3 w-full flex-1 px-6 md:justify-between md:px-0 md:gap-0 md:text-start">
        <div>
          <h2 className="text-2xl font-bold border-b-2 border-b-slate-300 text-center pb-2">
            Orem amet consectetur adipisicing elit. Voluptas
          </h2>
        </div>
        <p className="md:mb-10 text-ellipsis md:overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          ipsum aliquam dignissimos illum maiores, odio laboriosam vel dolorum
          possimus animi, tenetur ea nesciunt aut iste aspernatur quis atque
          impedit natus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptas ipsum aliquam dignissimos illum maiores, odio
          laboriosam vel dolorum possimus animi, tenetur ea nesciunt aut iste
          aspernatur quis atque impedit natus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas ipsum aliquam dignissimos illum
          maiores, odio laboriosam vel dolorum possimus animi, tenetur ea
          nesciunt aut iste aspernatur quis atque impedit natus.
        </p>

        <button className="btn text-gray-200 md:self-start">Join Us</button>
      </div>
    </section>
  );
};

export default Header;
