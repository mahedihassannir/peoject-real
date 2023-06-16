
import staticImage from '../../assets/sideBabber.webp';

const FitstStatic = () => {
    return (
        <div className="w-full h-screen">

            <div className="">
                <h1 className='text-5xl font-bold'><span className='text-yellow-400'>Best Vector Drawing</span> & Illustration Service Provider</h1>
                <h5 className='text-2xl pt-2 pb-10 '>Our creative and technical expertise brings your business to raise on the globe.</h5>

            </div>
            {/* title of the section */}
            
            {/* flex-row-reverse */}
            <div className="flex  justify-center">
                <div className="w-[70%] h-20 ">
                    {/* <div className="">
                        <h1 className='text-4xl font-bold'><span className='text-yellow-400'>Best Vector Drawing</span> & Illustration Service Provider</h1>
                        <h5 className='text-2xl pt-2 pb-10 '>Our creative and technical expertise brings your business to raise on the globe.</h5>

                    </div>
                     */}
                    <div className='w-11/12'>
                        <p>Vector Design US, Inc. is the best vector drawing & illustration service provider company introducing you to the importance of vector designs and illustration designs. Raster to vector conversion is a very important term when you are thinking about publishing your images, logos or brands in a large board-like banner, festoon, poster, clothing, production, etc.</p>
                        {/* new part */}
                        <p className='py-5'>Generally, graphics designers design bitmap images (For example: PNG, JPG, JPEG, PSD, etc.) which are based on limited pixels. But when you zoom, enlarge or print these raw images, the images become blurry and broken. On the other hand, Vector images do not depend on pixels. They are actually mathematically designed and do not have any pixels. For a vector image, no matter how much it is zoomed or enlarged, it just gets its shape on geometrical expansions and maintains the same quality.</p>
                        {/* ends */}
                        <p>Vector Design US, Inc. converts Raster or bitmap images to vector images such as EPS, AI, SVG, etc. format. Vector Design US, Inc. has very professional and expert vector artists, who are able to deliver very good quality vector images in minimal time and at a competitive price. We are not only a company but also a group of teams. We have a Receive and Delivery team, Expert Designer team, Quality Control team and a 24/7 Support team. We are able to do the best quality work within the shortest period of time. We are always ready for your order. </p>
                    </div>
                </div>
                <div className="w-[40%] -ml-20 -mt-24 h-20 ">

                    {/* <img src={staticImage} alt="" /> */}
                    <img className='mt-10 ml-4' src="https://www.vectordesign.us/wp-content/uploads/2021/05/home-1-vector-design-us-inc..webp" alt="" />

                </div>
            </div>

        </div>
    );
};

export default FitstStatic;