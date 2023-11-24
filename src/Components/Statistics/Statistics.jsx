import { FaPeopleGroup } from "react-icons/fa6";
const Statistics = () => {
  return (
    <div className="mt-20">
      <div className="h-[150px] bg-fuchsia-200 flex justify-evenly items-center">
        <div>
          <FaPeopleGroup className="text-4xl" />
          <h2 className="text-2xl">All User</h2>
          <span>50</span>
        </div>
        <div>
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-2xl">normal User</h2>
          <span>20</span>
        </div>
        <div>
        <FaPeopleGroup className="text-4xl" />
          <h2 className="text-2xl">Premium User</h2>
          <span>30</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
