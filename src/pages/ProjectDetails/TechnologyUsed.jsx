

const TechnologyUsed = ({ technologyLogos }) => {
    console.log(technologyLogos);
    return (
        <div className="flex flex-wrap items-center gap-10">
            {
                technologyLogos?.map((technologyLogo, index) =>
                    <img key={index} src={technologyLogo} alt="" className="size-20" />
                )
            }
        </div>
    );
};

export default TechnologyUsed;