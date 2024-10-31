import { FiEye } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import profileImg from "../../../../../assets/Images/js.png"
import { useState } from 'react';
import ViewEndorsmentModal from './ViewEndorsmentModal';

const EndorsmentsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const endorsmentsData = [
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
        <div className="border border-[#282D45] p-4 rounded-xl mt-5">
        <table className="w-full">
          <thead>
            <tr className="bg-[#1C2242] border border-[#282D45] p-3 text-[#aeb9e1]">
              <th className="p-3">No</th>
              <th className="p-3">Image</th>
              <th className="p-3">Author Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#0E1330]">
            {endorsmentsData.map((service, index) => (
              <tr key={service.id} className="border-b border-[#282D45]">
                <td className="p-3 text-[#aeb9e1]">{index + 1}</td>
                {/* Icon */}
                <td className="p-3">
                  <img src={profileImg} alt="" className='size-12 rounded-md' />
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
                  <FiEye onClick={() => setIsModalOpen(!isModalOpen)} className="text-[#aeb9e1] cursor-pointer" />
                  <MdDelete className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ViewEndorsmentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </div>
    );
};

export default EndorsmentsTable;