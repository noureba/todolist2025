import { FaChartSimple } from "react-icons/fa6";
import { SiSmartthings } from "react-icons/si";
import { FaSyncAlt } from "react-icons/fa";

const WhyUs = () => {
  return (
    <>
      <div className="container py-20">
        <div className="text-center my-10 ">
          <h1 className="text-3xl  font-medium">
            Why Choose Our To-Do List App?
          </h1>
          <p className="my-3">
            Discover the features that make managing your tasks easier, smarter,
            and more efficient than ever before.
          </p>
        </div>

        <div className="flex justify-around items-center flex-wrap gap-5 m-3">
          <div className="border border-gray-900 py-4 px-2  flex flex-col items-center gap-3 bg-gray-100">
            <i className="text-5xl text-gray-900">
              <FaChartSimple />
            </i>
            <h2 className="text-xl text-center">Simple & Intuitive</h2>
            <p>
              A clean and user-friendly interface that makes task management
              effortless.
            </p>
          </div>
          <div className="border border-gray-900 py-4 px-2 flex flex-col items-center gap-3 bg-gray-100">
            <i className="text-5xl text-gray-900">
              <SiSmartthings />
            </i>
            <h2>Smart Reminders</h2>
            <p>Never miss a deadline with timely notifications and alerts.</p>
          </div>
          <div className="border border-gray-900 py-4 px-2 flex flex-col items-center gap-3 bg-gray-100">
            <i className="text-5xl text-gray-900">
              <FaSyncAlt />
            </i>
            <h2>Cross-Device Sync</h2>
            <p>Access your tasks anytime, anywhere, on any device.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
