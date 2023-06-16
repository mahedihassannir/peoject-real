
import money from '../../assets/sideBabber.webp';

const Moneyback = () => {
    return (
        <div className="w-full">
            <div className="flex ml-60 justify-center h-[50vh] items-center">
                <div className="w-2/6">

                    <img className='h-60' src="https://www.vectordesign.us/wp-content/uploads/2021/05/100-Money-Back-Guarantee-vector-Design-US-Inc-300x300.webp" alt="" />

                </div>
                <div className="w-2/3">
                    <h1 className='text-green-500 text-4xl font-bold'>
                        100% Money-Back Guarantee!
                    </h1>
                    <p className=' py-4 text-lg text-gray-500'>Your satisfaction makes us successful.</p>
                    <p className='text-gray-400'>So, dissatisfaction? we’ll send money back 100% for sure.</p>

                </div>
            </div>

        </div>
    );
};

export default Moneyback;