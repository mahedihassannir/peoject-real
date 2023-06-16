import sideImage from '../../assets/sideBabber.webp'

const Banner = () => {
    return (
        <div className=" flex justify-center items-center w-full h-screen">
            <div className="flex justify-center items-center">

                <div className="  w-1/2 flex-wrap  h-full px-4">
                    <h1 className="text-4xl leading-snug font-bold">Get the Best <br /> <span className="text-yellow-400">Vector Conversion Services</span> <br /> for your Business</h1>

                    <p className="py-3  text-left w-4/5">
                        Vector Design US, Inc. is much more than just a Vector Conversion <br /> Service. We are the best service provider to get High-Resolution <br /> Vector Files. 100% Manually Hand-Drawn vector file with no auto trace. We guarantee Editable, Scalable & Print Ready Vector File  (AI, SVG, EPS, PES, DST, PNG, PDF, CDR).

                    </p>
                    {/* quoto btn  */}
                    <button className="text-white bg-yellow-400  font-bold py-3 px-5 rounded-md">Get A Quoto</button>
                    {/* ends */}
                </div>
                {/* image side */}
                <div className="w-1/2 ">

                    <img className='h-[80vh] w-full' src={sideImage} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;