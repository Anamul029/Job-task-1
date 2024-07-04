
const SixSection = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/3vnDtJq/Rectangle-32.png')] md:h-[480px] w-full bg-no-repeat  mt-16 from-black">
            <div className="bg-gradient-to-r from-blue-950 to-transparent h-full flex p-6 justify-around">
                <div className="md:w-[525px] md:my-auto md:h-[180px]" >
                    <h2 className="md:text-3xl my-3 text-white  font-semibold">Get Your, <br />First Appointment <br />at 50% off!!</h2>
                    <button className="border-2 bg-[#FFC637] mt-5 border-solid rounded-lg p-2 border-black">Appointment</button>
                    <button className="border-2  mt-5 border-solid rounded-lg p-2 text-white ml-3 border-white">Learn More</button>
                </div>
                <div>
                    <img src="/public/Media/logo light.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SixSection; 