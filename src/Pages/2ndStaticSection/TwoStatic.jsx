
import twoConpo from '../../assets/sideBabber.webp';

const TwoStatic = () => {
    return (
        <div className="w-full h-[80vh]">

            <h1 className=" text-yellow-500 text-4xl  font-bold">See what we`ll do for your business as a <br />
                Vector Graphics Company</h1>

            <div className="flex">

                <div className="w-1/2">

                    <p className=' mt-10 w-full'>We consider Customer satisfaction as our asset. We care about our clients’ requirements cordially and serve their works on time at the affordable price. Our express delivery system and 24/7 dedicated Client support team are always ready to give you a quick solution.</p>

                    {/* stand */}
                    <p className='mt-4'>Here are a few of the top reasons we stand above the rest:</p>


                    <div className="w-full mt-10 flex">

                        <div className="w-1/3">
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                        </div>
                        <div className="w-1/3">
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                            <li className='text-lg'>Fast & Secure</li>
                        </div>

                    </div>

                </div>
                <div className="w-1/2 -mt-16git a">

                    <img className=' h-[500px] ' src="https://www.vectordesign.us/wp-content/uploads/2021/05/home-11-vector-design-us-inc..webp" alt="" />


                </div>

            </div>

        </div>
    );
};

export default TwoStatic;