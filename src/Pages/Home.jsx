import Banner from "../Components/Banner/Banner";
import TwoStatic from "./2ndStaticSection/TwoStatic";
import Moneyback from "./Moneyback/Moneyback";
import FitstStatic from "./StaticSection/FitstStatic";
import ThreeStatic from "./ThreeStatic/ThreeStatic";
import Work from "./Work/Work";
import TwoCard from "./twoCard/TwoCard";



const Home = () => {
    return (
        <div className="w-full  ">
            {/* banner  */}
            <Banner></Banner>
            {/* ends */}

            {/* card section  */}
            <section className="w-full h-screen">

            </section>
            {/* ends */}

            {/* First Static */}
            <section>
                <FitstStatic></FitstStatic>
            </section>
            {/* ends */}

            {/*2nd static  */}
            <section>
                <TwoStatic></TwoStatic>
            </section>
            {/* ends */}

            {/*3nd static  */}
            <section>
                <ThreeStatic></ThreeStatic>
            </section>
            {/* ends */}

            {/*card  */}
            <section>
                <TwoCard></TwoCard>
            </section>
            {/* ends */}


            {/* work   */}
            <section>
                <Work></Work>
            </section>
            {/* ends */}

            {/* moneyback   */}
            <section>
                <Moneyback></Moneyback>
            </section>
            {/* ends */}


            <section className=" bg-blue-500 w-full text-center h-[30vh]">
                <h1 className="text-2xl font-bold pb-2 pt-2">Get Started with Vector Design US, Inc.</h1>
                <h3 className="text-lg font-bold">Let us assist you to improve your business by providing vector conversion and photo editing services.</h3>

                <div  className="mt-5">
                <button className="border-4 bg-red-300 hover:text-white animate-pulse border-black hover:border-white py-3 px-6">Request A Quoto</button>
                </div>
            </section>

        </div>
    );
};

export default Home;