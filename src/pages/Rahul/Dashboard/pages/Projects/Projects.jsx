
import { useState } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { LuTableProperties } from 'react-icons/lu';
import Ripples from 'react-ripples';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [view, setView] = useState("Grid");
    const buttons = [
        {
            label: "Table",
            icon: <LuTableProperties />
        },
        {
            label: "Grid",
            icon: <BsFillGridFill />
        },
    ]
    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between font-Poppins">
                <h1 className="text-[#aeb9e1] text-2xl font-semibold">
                    All Projects
                </h1>
                <div className='flex items-center gap-5'>
                    {
                        buttons.map((item, index) =>
                            <Ripples key={index}>
                                <button
                                    onClick={() => setView(item.label)}
                                    className={`${view === item.label ? "bg-gradient-to-br from-blue-500 to-indigo-800" : "bg-[#1C2242]"} border border-[#282D45] p-3 rounded-lg text-[#aeb9e1] text-[22px]`}
                                >
                                    {item.icon}
                                </button>
                            </Ripples>
                        )
                    }
                    <Ripples>
                        <Link to={"/rahul-sutradhar/admin/dashboard/add-new-project"}
                            className="bg-[#1C2242] border border-[#282D45] p-3 rounded-lg text-[#aeb9e1]">
                            Add New Project
                        </Link>
                    </Ripples>
                </div>
            </div>
        </div>
    );
};

export default Projects;