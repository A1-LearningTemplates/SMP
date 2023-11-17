const Header = () => {
  return (
    <header className="flex flex-col h-screen items-center gap-20 snap-start pt-20 pb-3 lg:flex-row lg:pb-0 ">
      <div className="overflow-hidden flex-1 h-2/3 w-full rounded ">
        <img
          className="shadow"
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcSet=""
        />
      </div>
      <section className="flex flex-col justify-between flex-1 h-2/3 w-full ">
        <div>
          <h2 className="text-2xl font-bold">
            Orem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          </h2>
          <hr className="h-px my-8 bg-gray-200 border"></hr>
        </div>
        <p className="mb-10 text-ellipsis overflow-hidden sm:overflow-auto">
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

        <button className=" self-start btn bg-emerald-600 font-bold text-gray-700">
          Joun Us
        </button>
      </section>
    </header>
  );
};

export default Header;
