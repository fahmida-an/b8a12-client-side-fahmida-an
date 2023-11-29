import { FaPeopleGroup } from "react-icons/fa6";
import CountUp from 'react-countup';
import useUsersPublic from "../../hooks/useUsersPublic";
const Statistics = () => {
  const [users] = useUsersPublic()
  const normalUsers = users.filter(user=> user.role=== "normal")
  const premiumUsers = users.filter(user=> user.role=== "premium")
  return (
    <div className="mt-20">
      <div className=" max-w-screen-xl mx-auto h-[150px] bg-slate-800 text-white flex justify-evenly items-center">
        <div className="hover:text-fuchsia-900">
          <FaPeopleGroup className="text-4xl" />
          <h2 className="text-xl">All User</h2>
          <span><CountUp start={0} delay={1} end={users.length}  /></span>
        </div>
        <div className="hover:text-fuchsia-900">
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-xl">Normal User</h2>
          <span><CountUp start={0} delay={1} end={normalUsers.length}  /></span>
        </div>
        <div className="hover:text-fuchsia-900">
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-xl">Premium User</h2>
          <span><CountUp start={0} delay={1} end={premiumUsers.length}  /></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
