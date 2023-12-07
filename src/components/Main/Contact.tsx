const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-around overflow-auto snap-start pt-24 w-full h-screen"
      id="contact"
    >
      <h2 className="text-2xl font-bold border-b-2 border-b-slate-300 lg:w-1/6 text-center pb-2">
        Contact
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col w-full items-center p-3 gap-6 h-2/3 md:w-1/2"
      >
        <div className="w-full">
          <input className="input" type="text" name="name" placeholder="Name" />
        </div>
        <div className="w-full">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="w-full">
          <textarea
            className="input resize-none overflow-auto"
            name="message"
            placeholder="Message"
            rows={5}
            cols={1}
          />
        </div>

        <div className="w-full">
          <input
            className="btn w-full bg-slate-700 text-gray-200"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
