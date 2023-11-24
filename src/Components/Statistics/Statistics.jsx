import { FaPeopleGroup } from "react-icons/fa6";
import CountUp from 'react-countup';
const Statistics = () => {
  return (
    <div className="mt-20">
      <div className="h-[150px] bg-slate-900 text-white flex justify-evenly items-center">
        <div>
          <FaPeopleGroup className="text-4xl" />
          <h2 className="text-2xl">All User</h2>
          <span><CountUp start={0} delay={1} end={70}  /></span>
        </div>
        <div>
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-2xl">Normal User</h2>
          <span><CountUp start={0} delay={1} end={30}  /></span>
        </div>
        <div>
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-2xl">Premium User</h2>
          <span><CountUp start={0} delay={1} end={40}  /></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
