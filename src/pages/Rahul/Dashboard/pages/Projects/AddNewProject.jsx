import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import Ripples from "react-ripples";
import { toast } from "sonner";
import { useAddNewProjectMutation } from "../../../../../redux/Features/Projects/projectApi";

const AddNewProject = () => {
    const [addNewProject] = useAddNewProjectMutation();
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const [imageFiles, setImageFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [logoFiles, setLogoFiles] = useState([]);

    const [logoPreviews, setLogoPreviews] = useState([]);

    const [features, setFeatures] = useState([]);
    const [technologyNames, setTechnologyNames] = useState([]);


    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
            e.preventDefault();
            const newTag = e.currentTarget.value.trim();
            if (!features.includes(newTag)) {
                setFeatures([...features, newTag]);
                setValue("features", [...features, newTag]);
            }
            e.currentTarget.value = "";
        }
    };

    // Function to remove a feature
    const removeTag = (index) => {
        const newfeatures = features.filter((_, i) => i !== index);
        setFeatures(newfeatures);
        setValue("features", newfeatures);
    };


    const handleAddTechnologyName = (e) => {
        if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
            e.preventDefault();
            const newName = e.currentTarget.value.trim();
            if (!technologyNames.includes(newName)) {
                setTechnologyNames([...technologyNames, newName]);
                setValue("technologyNames", [...technologyNames, newName]);
            }
            e.currentTarget.value = "";
        }
    };

    // Function to remove a feature
    const handleRemoveTechnologyName = (index) => {
        const newnames = features.filter((_, i) => i !== index);
        setTechnologyNames(newnames);
        setValue("features", newnames);
    };

    // Handle image uploads
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setImageFiles((prev) => [...prev, file]);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews((prev) => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle logo uploads
    const handleLogoChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFiles((prev) => [...prev, file]);

            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreviews((prev) => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleCreateProject = async (data) => {
        const formData = new FormData();

        const projectData = {
            name: data.name,
            tagline: data.tagline,
            overview: data.overview,
            duration: data.duration,
            features: features || [],
            frontendRepo: data.frontendRepo,
            backendRepo: data.backendRepo,
            liveLink: data.liveLink,
            overviewVideo: data.overviewVideo,
            technologyNames: technologyNames,
            category: data.category,
            projectType: data.projectType,
        };

        formData.append("data", JSON.stringify(projectData));

        imageFiles.forEach((image) => formData.append('images', image));
        logoFiles.forEach((logo) => formData.append('logos', logo));

        // console.log(formData.get("data"));
        console.log(formData.get("images"));
        console.log(formData.get("logos"));

        try {
            const response = await addNewProject(formData).unwrap();
            console.log(response);
            if (response.success) {
                toast.success("Post created successfully.");
                reset();
                setLogoFiles([]);
                setImageFiles([]);
            }
        } catch (err) {
            console.log(err);
            return;
        }
    };

    return (
        <div className="p-5">
            <h2 className="text-xl font-semibold text-white mb-5">Add New Project</h2>
            <form
                onSubmit={handleSubmit(handleCreateProject)}
                className="w-full flex flex-col gap-7 bg-[#0E1330] p-4 rounded-xl border-b border-[#282D45] pb-5 overflow-hidden transition-all duration-700 ease-in-out mt-7"
            >
                {/* Name and Tagline */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Project Name*</label>
                        <input
                            {...register("name", { required: "Project name is required" })}
                            placeholder="Enter project name"
                            type="text"
                            className={`outline-none bg-[#0E1330] border ${errors.name ? "border-red-500" : "border-[#282D45]"} rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300`}
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Tagline*</label>
                        <input
                            {...register("tagline", { required: "Tagline is required" })}
                            placeholder="Enter project tagline"
                            type="text"
                            className={`outline-none bg-[#0E1330] border ${errors.tagline ? "border-red-500" : "border-[#282D45]"} rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300`}
                        />
                    </div>
                </div>

                {/* Overview */}
                <div>
                    <label className="text-white mb-2 block">Overview*</label>
                    <textarea
                        {...register("overview", { required: "Overview is required" })}
                        placeholder="Project overview"
                        className={`outline-none bg-[#0E1330] border ${errors.overview ? "border-red-500" : "border-[#282D45]"} rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300`}
                    ></textarea>
                </div>


                <div className="flex gap-4 w-full">
                    {/* Source Code and Live Link */}
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Frontend Repo</label>
                        <input
                            {...register("frontendRepo")}
                            placeholder="Source code link"
                            type="text"
                            className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300"
                        />
                    </div>
                    {/* Source Code and Live Link */}
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Backend Repo</label>
                        <input
                            {...register("backendRepo")}
                            placeholder="Source code link"
                            type="text"
                            className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300"
                        />
                    </div>
                </div>

                 {/* Live link */}
                 <div className="flex-1">
                        <label className="text-white mb-2 block">Live Project Link</label>
                        <input
                            {...register("liveLink")}
                            placeholder="Live project link"
                            type="text"
                            className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300 "
                        />
                    </div>


                <div className="flex gap-4 w-full">
                    {/* Duration */}
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Duration*</label>
                        <input
                            {...register("duration", { required: "Duration is required" })}
                            placeholder="Enter project duration"
                            type="text"
                            className={`outline-none bg-[#0E1330] border ${errors.duration ? "border-red-500" : "border-[#282D45]"} rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300`}
                        />
                    </div>

                    {/* Overview Video */}
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Overview Video Link</label>
                        <input
                            {...register("overviewVideo")}
                            placeholder="Overview video link"
                            type="text"
                            className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300"
                        />
                    </div>
                </div>



                {/* Category and Project Type */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Category</label>
                        <select {...register("category")} className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300">
                            <option value="">Select category</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Full Stack">Full Stack</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="text-white mb-2 block">Project Type</label>
                        <select {...register("projectType")} className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300">
                            <option value="">Select project type</option>
                            <option value="Personal">Personal</option>
                            <option value="Company">Company</option>
                        </select>
                    </div>
                </div>

                {/* Features */}
                <div>
                    <label className="text-white mb-2 block">Features</label>
                    <input
                        onKeyDown={handleKeyDown}
                        {...register("features")}
                        placeholder="Enter project features (type & enter)"
                        type="text"
                        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300"
                    />

                    <div className="mt-2 flex flex-wrap gap-2">
                        {features.map((tag, index) => (
                            <div key={index} className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 border border-[#282D45] rounded-xl px-3 py-1 text-sm text-white">
                                <span>{tag}</span>
                                <AiOutlineClose className="cursor-pointer text-white" onClick={() => removeTag(index)} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Names */}
                <div>
                    <label className="text-white mb-2 block">Technology Names</label>
                    <input
                        onKeyDown={handleAddTechnologyName}
                        {...register("technologyNames")}
                        placeholder="Enter project technologyNames (type and enter)"
                        type="text"
                        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[#0696E7]/50 transition duration-300"
                    />

                    <div className="mt-2 flex flex-wrap gap-2">
                        {technologyNames.map((tag, index) => (
                            <div key={index} className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 border border-[#282D45] rounded-xl px-3 py-1 text-sm text-white">
                                <span>{tag}</span>
                                <AiOutlineClose className="cursor-pointer text-white" onClick={() => handleRemoveTechnologyName(index)} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upload Logos */}
                <div className="flex-1">
                    <label htmlFor="logos" className="text-white mb-2 block">Upload Technology Logos</label>
                    <input
                        id="logos"
                        type="file"
                        multiple
                        onChange={(e) => handleLogoChange(e)}
                        className="block w-full text-white"
                    />
                </div>

                <div className="flex gap-2 mt-2">
                    {logoPreviews.map((logo, index) => (
                        <img key={index} src={logo} alt="Logo preview" className="w-16 h-16 rounded object-cover" />
                    ))}
                </div>

                {/* Upload Project Images */}
                <div>
                    <label htmlFor="images" className="text-white mb-2 block">Upload Project Images</label>
                    <input
                        id="images"
                        type="file"
                        multiple
                        onChange={(e) => handleImageChange(e)}
                        className="block w-full text-white"
                    />
                </div>
                <div className="flex gap-2 mt-2">
                    {imagePreviews.map((image, index) => (
                        <img key={index} src={image} alt="Image preview" className="w-16 h-16 rounded object-cover" />
                    ))}
                </div>

                <div className="flex justify-end">
                <Ripples during={1500}>
                    <button
                        type="submit"
                        className="w-full md:w-[190px] bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex justify-center items-center"
                    >
                        Submit
                    </button>
                </Ripples>
                </div>
            </form>
        </div>
    );
};

export default AddNewProject;
