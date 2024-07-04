
const ThirdSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="md:w-[525px] md:h-[394px]" >
            <h2 className="border-2 border-black border-solid w-32 p-2 rounded-xl text-center">Services </h2>
                <h2 className="md:text-3xl my-3 text-[#020043] font-semibold">Empowering Health,<br />Enriching Lives</h2>
                <p className="md:w-[400px] text-[#4D4C7B]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <button className="border-2 bg-[#FFC637] mt-5 border-solid rounded-lg p-2 border-black">Learn More</button>
            </div>
            <div className="md:w-[525px] md:h-[394px]">
                <img className="rounded-2xl" src="/public/Media/Rectangle 27-1.png" alt="" />
            </div>
            <div className="md:w-[525px] md:h-[394px]">
                <img className="rounded-2xl" src="/public/Media/Rectangle 27-2.png" alt="" />
            </div>
            <div className="md:w-[525px] md:h-[394px]">
                <img className="rounded-2xl" src="/public/Media/Rectangle 27.png" alt="" />
            </div>
        </div>
    );
};

export default ThirdSection;