
const SecondSection = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between mt-24">
            <div>
                <h2 className="border-2 border-black border-solid w-32 p-2 rounded-xl text-center">Who are you</h2>
                <h2 className="md:text-3xl my-3 text-[#020043] font-semibold">We halp to get <br />solution</h2>
                <p className="md:w-[400px] text-[#4D4C7B]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="border-2 bg-[#FFC637] mt-5 border-solid rounded-lg p-2 border-black">Learn More</button>
            </div>
            <div>
                <img className=" h-auto md:w-[550px] md:h-[415px]" src="/public/Media/Rectangle 24.png" alt="" />
                <div className="md:w-[385px] md:h-[210px] p-4 bg-[#343268] text-white relative md:-top-1/3 md:-left-1/4 rounded-2xl">
                    <h2 className="font-semibold text-2xl my-3">Our mission is simple</h2>
                    <p className="md:w-[295px] md:h-[200px]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;