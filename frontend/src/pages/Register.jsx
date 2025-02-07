import Register from "../auth/SingUp";

const RegisterPage = () => {
  return (
    <>
      <div className="container mx-auto bg-amber-200 p-5 h-dvh">
        <div className="md:w-[50%] w-[90%] m-auto ">
          <h1 className="text-center font-medium text-3xl my-5">Register</h1>
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
