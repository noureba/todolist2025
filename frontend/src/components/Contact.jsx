const Contact = () => {
  return (
    <div className="container bg-gray-50 py-20 px-5">
      <div className=" text-center my-10">
        <h1 className=" text-3xl text-gray-900 font-medium ">
          Get in Touch With Us
        </h1>
        <p className="my-3">
          Have questions or need support? We&apos;re here to help! Reach out to
          us, and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form
        action=""
        className="flex flex-col gap-5 md:w-[50%] m-auto w-auto border border-gray-900 p-5"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="border border-gray-900 p-2" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="border border-gray-900 p-2"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="5"
            className="border border-gray-900 p-2"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-gray-900 py-3 px-6 text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
