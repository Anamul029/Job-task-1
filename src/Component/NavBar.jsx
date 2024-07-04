
const NavBar = () => {
    return (
        <div className="my-4">
            <nav className="flex justify-between ">
                <div>
                    <img src="/public/Media/logo dark.png" alt="" />
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-6">
                        <li><a href="">Home</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <button className="border-solid border-black border-2 p-2 rounded-xl">Appoitment</button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;