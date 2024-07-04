import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#020043] h-[445px] text-white flex flex-col md:flex-row md:justify-evenly items-center ">
                <div>
                    <img className="my-4" src="/public/Media/logo light.png" alt="" />
                    <h1>123 Main Street Anytown, USA <br />Postal Code: 12345
                    </h1>
                    <h1 className="mt-4">Support: support@oyolloo.com <br />
                        (Available : 10:00am to 07:00pm)</h1>
                </div>
                <div>
                    <ul className="grid grid-cols-1 gap-2">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Success Page</li>
                        <li>Terms and Condition</li>
                    </ul>
                </div>
                <div>
                    <ul className="grid grid-cols-1 gap-2">
                        <li>Service</li>
                        <li>Sheduling</li>
                        <li>Contact Us</li>
                        <li>Patient Portal</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-2xl mb-2">Follow Us</h2>
                    <div className="flex gap-2">
                        <CiFacebook />
                        <FaSquareInstagram />
                        <FaLinkedin />
                        <IoLogoYoutube />
                    </div>
                    <h2 className="mt-6">@docplus 2024</h2>

                </div>

            </div>
        </footer>
    );
};

export default Footer;