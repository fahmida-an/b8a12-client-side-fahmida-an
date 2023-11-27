import { FaPeopleGroup } from "react-icons/fa6";
import CountUp from 'react-countup';
const Statistics = () => {
  return (
    <div className="mt-20">
      <div className=" max-w-5xl mx-auto h-[150px] bg-slate-800 text-white flex justify-evenly items-center">
        <div className="hover:text-fuchsia-900">
          <FaPeopleGroup className="text-4xl" />
          <h2 className="text-xl">All User</h2>
          <span><CountUp start={0} delay={1} end={70}  /></span>
        </div>
        <div className="hover:text-fuchsia-900">
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-xl">Normal User</h2>
          <span><CountUp start={0} delay={1} end={30}  /></span>
        </div>
        <div className="hover:text-fuchsia-900">
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-xl">Premium User</h2>
          <span><CountUp start={0} delay={1} end={40}  /></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
