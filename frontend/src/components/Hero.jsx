import tasks from '../assets/tasks.png'
const Hero = () => {
  return (
    <div className="container bg-white p-5">
      <div className=' flex justify-around items-center flex-wrap-reverse md:flex-wrap' >
        <div className='my-10'>
          <h1 className='text-4xl text-gray-900 font-medium'>Stay Organized, Stay Productive</h1>
          <p className='my-5'>Manage your tasks effortlessly with our smart and intuitive to-do list app. <br /> Stay on top of your schedule and get things done with ease!</p>
          <button className='bg-gray-900 text-white py-2 px-4 text-xl'>Star now</button>
        </div>
        <div>
          <img src={tasks} alt="tasks image"  width="500px"/>
        </div>
      </div>
    </div>
  );
};
export default Hero;
