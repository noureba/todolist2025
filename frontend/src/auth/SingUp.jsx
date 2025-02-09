import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom"

const SingUp = () => {
  const naviagte = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(user);

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const  {data}  = await axios.post("http://localhost:5000/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setUser({});
        toast.success("register success");
        naviagte('/login')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" bg-white shadow-md">
        <form action="" className="flex flex-col p-5 gap-3" method="POST" onSubmit={registerHandler}>
          <div className="flex flex-col gap-3">
            <label htmlFor="username">name:</label>
            <input
              type="text"
              id="username"
              className="border border-gray-900 p-1"
              name="username"
              required
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border border-gray-900 p-1"
              name="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="border border-gray-900 p-1"
              name="password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="submit"
              className="bg-gray-900 text-white my-5 p-3"
            />
              Sing up
          </div>
        </form>
      </div>
    </>
  );
};

export default SingUp;
