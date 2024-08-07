import { ListGroup, Button } from "flowbite-react";
import { HiArrowCircleDown, HiExternalLink } from "react-icons/hi";

const useWorkExperience = () => {
  let resume = [
    {
      company: "Brightpoint Community College",
      title: "Software Developer",
      startDate: "2023",
      endDate: "Current",
    },
    {
      company: "Sands Anderson PC",
      title: "Marketing Coordinator",
      startDate: "2021",
      endDate: "2023",
    },
    {
      company: "Accessia Health",
      title: "Marketing & Communications Coordinator",
      startDate: "2019",
      endDate: "2021",
    },
  ];

  return (
    <div id="work" className="w-full md:w-7/12 md:mr-3">
      <div className="p-4 pr-6 pl-6 mb-4 m-auto border rounded-lg border-white">
        <h2 className="text-left text-amber-200 text-3xl mb-6 font-bold">
          My Work Experience
        </h2>
        {resume.map((role, index) => (
          <div
            className="text-white flex flex-col md:flex-row  md:justify-between mb-2"
            key={index}
          >
            <div>
              <p className="text-left font-extrabold">{role.company}</p>
              <p className="text-left italic text-slate-200">{role.title}</p>
            </div>

            <p className="text-left md:text-right italic text-slate-200">
              {role.startDate} - {role.endDate}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-2 mb-10 md:mb-auto">
        <Button
          href={`${import.meta.env.VITE_BASE_URL}murfee_resume.pdf`}
          color="gray"
          className="outline outline-amber-200 md:mr-2 mb-2 md:mb-auto"
        >
          <HiArrowCircleDown className="mr-1 h-5 w-5" />
          Download Resume
        </Button>
        <Button
          href="https://www.linkedin.com/in/allen-murfee/"
          color="gray"
          className="outline outline-amber-200"
        >
          <HiExternalLink className="mr-1 h-5 w-5" />
          View LinkedIn
        </Button>
      </div>
    </div>
  );
};
export default useWorkExperience;
