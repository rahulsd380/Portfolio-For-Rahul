import { MdDelete } from 'react-icons/md';
import { useDeleteServiceMutation, useGetAllServicesQuery } from '../../../../../redux/Features/MyServices/myServicesApi';
import { toast } from 'sonner';

const MyServicesTable = () => {
  const {data} = useGetAllServicesQuery();
  const [deleteService] = useDeleteServiceMutation();

  // Delete achievement function
  const handleDeleteService = (id) => {
    toast.promise(
      deleteService(id).unwrap(),
      {
        loading: 'Deleting...',
        success: (response) => {
          return response?.message || 'Service deleted successfully!';
        },
        error: (err) => {
          console.error('Error:', err);
        },
      }
    );
  };

    return (
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
            {data?.data?.map((service, index) => (
              <tr key={service.id} className="border-b border-[#282D45]">
                <td className="p-3 text-[#aeb9e1]">{index + 1}</td>
                {/* Icon */}
                <td className="p-3">
                  <span className="text-[#aeb9e1]"><img src={service.icon} alt="" className='size-10 rounded-lg' /></span>
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
                <td className="p-3">
                  <MdDelete onClick={() => handleDeleteService(service?._id)} className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyServicesTable;