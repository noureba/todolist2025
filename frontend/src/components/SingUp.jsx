const SingUp = () => {
  return (
    <>
      <div className=" bg-white shadow-md">
        <form action="" className="flex flex-col p-5 gap-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="border border-gray-900 p-1"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border border-gray-900 p-1"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="border border-gray-900 p-1"
            />
          </div>
          <div className="flex flex-col">
            <button type="submit" className="bg-gray-900 text-white my-5 p-3">
              Sing up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SingUp;
