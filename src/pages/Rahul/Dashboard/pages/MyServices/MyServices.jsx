import { Link } from "react-router-dom";
import Ripples from 'react-ripples';
import { MdEdit, MdDelete } from 'react-icons/md'; // Importing edit and delete icons

const MyServices = () => {
  // Sample data for the services table
  const servicesData = [
    {
      id: 1,
      name: "Web Development",
      description: "Creating responsive and dynamic websites using the latest technologies.",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Building cross-platform mobile applications for both iOS and Android.",
    },
    {
      id: 3,
      name: "SEO Optimization",
      description: "Enhancing website visibility on search engines through various strategies.",
    },
    {
      id: 4,
      name: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences for web and mobile applications.",
    },
    {
      id: 5,
      name: "Content Writing",
      description: "Providing high-quality content tailored to your business needs.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#aeb9e1] text-2xl font-semibold font-Poppins">
          My Services
        </h1>
        <Ripples>
          <Link className="bg-[#1C2242] border border-[#282D45] p-3 rounded-lg text-[#aeb9e1]">
            Add New Service
          </Link>
        </Ripples>
      </div>

      {/* Services Table */}
      <div className="border border-[#282D45] p-4 rounded-xl mt-5">
        <table className="w-full">
          <thead>
            <tr className="bg-[#1C2242] border border-[#282D45] p-3 text-[#aeb9e1]">
              <th className="p-3">No</th>
              <th className="p-3">Icon</th>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#0E1330]">
            {servicesData.map((service, index) => (
              <tr key={service.id} className="border-b border-[#282D45]">
                <td className="p-3 text-[#aeb9e1]">{index + 1}</td>
                {/* Icon */}
                <td className="p-3">
                  <span className="text-[#aeb9e1]">🛠️</span>
                </td>
                {/* Name */}
                <td className="p-3 text-[#aeb9e1]">{service.name}</td>
                {/* Description */}
                <td className="p-3 text-[#aeb9e1]">
                  {service.description.length > 50
                    ? service.description.slice(0, 50) + "..."
                    : service.description}
                </td>
                {/* Action buttons */}
                <td className="p-3 flex gap-3">
                  <MdEdit className="text-[#aeb9e1] cursor-pointer" />
                  <MdDelete className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
