import { useLoaderData } from "react-router-dom";


const ProjectDetails = () => {
    const projectDetails = useLoaderData();
    console.log(projectDetails);
    return (
        <div>
            
        </div>
    );
};

export default ProjectDetails;