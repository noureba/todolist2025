import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <div className="container mx-auto bg-amber-200 p-5 h-dvh">
        <div className="md:w-[50%] w-[90%] m-auto ">
          <h1 className="text-center font-medium text-3xl my-5">Login</h1>
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
