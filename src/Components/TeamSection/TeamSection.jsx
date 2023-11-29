import Typewriter from "typewriter-effect";
const people = [
  {
    name: "Jessica Carter",
    role: "Designation: Content Manager",
    imageUrl: "https://i.ibb.co/XVYJ4dG/p1.webp",
  },
  {
    name: "Leslie Alexander",
    role: "Senior Web Developer",
    imageUrl: "https://i.ibb.co/j34xpfG/p1.jpg",
  },
  {
    name: "Daniel Reynolds",
    role: "Editor-in-Chief",
    imageUrl: "https://i.ibb.co/nC74NCH/p3.jpg",
  },
  {
    name: "Ryanna",
    role: "Social Media Strategist",
    imageUrl: "https://i.ibb.co/Tk8MGb4/pr1.jpg",
  },
  {
    name: "Yasha ",
    role: " Graphic Designer",
    imageUrl: "https://i.ibb.co/YQ6K91K/pr2.jpg",
  },
  {
    name: "Liana H",
    role: "SEO Specialist",
    imageUrl: "https://i.ibb.co/4tX3DyQ/p4.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="text-center items-center justify-center -mt-4">
        <h2 className="text-4xl font-bold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
              strings: "Team Members",
            }}
          ></Typewriter>
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mt-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6  leading-8 text-gray-600 text-sm">
            Meet our dynamic leadership team at NewsChannel Web Publications.
            Led by Editor-in-Chief Daniel Reynolds, our talented professionals
            include Content Manager Jessica Carter, Senior Web Developer Ryan
            Mitchell, Social Media Strategist Megan Turner, Graphic Designer
            Carlos Rodriguez, and SEO Specialist Natalie Hayes. Together, they
            bring creativity, expertise, and innovation to drive our
            company&apos;s success.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
