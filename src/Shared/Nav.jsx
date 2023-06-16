import { Link } from "react-router-dom";


const Nav = () => {
    return (
        // fixed z-10 max-w-screen-xl
        <div>
            <nav className="flex justify-between items-center  h-20  border-b-2 w-full">
                {/* logo */}
                <img src="https://i.ibb.co/DLz8F1j/vectordesign-logo.png" alt="" />
                <ul className="flex justify-center gap-4">
                    <Link>About</Link>
                    <Link>Services</Link>
                    <Link>Portfolio</Link>
                    <Link>pricing</Link>
                    <Link>contact</Link>
                    <Link>Blog</Link>
                </ul>
                <button className="py-3 px-5 rounded-3xl bg-yellow-400 text-white hover:text-black ">get A Quote</button>
            </nav>
        </div>
    );
};

export default Nav;