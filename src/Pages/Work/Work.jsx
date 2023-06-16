
const Work = () => {
    return (
        <div className="w-full py-10">

            <div className=" flex justify-center px-10">
                <div className="">
                    <h4 className="text-6xl h-60 text-yellow-500 pr-2 font-bold border-r-4 border-yellow-500">How we <br /> work?</h4>
                </div>
                <div className="w-1/2 ml-5">
                    <p>After receiving your order, we provide you with an estimate. Estimates are based on the complexity of the shape and the number of colors.</p>
                    <p className="py-3">We send you email for approval with the estimate of your order.</p>
                    <p className="pb-3">
                        After receiving the payment, our vector design experts start copying your image by hand redrawing (we don`t use automated software) </p>
                    <p>We send you a vectorized image preview, ready for revisions if needed.</p>
                    <p>
                        Once you approve the final design, you will receive a download link to your desire vector file. </p>
                </div>
            </div>

        </div>
    );
};

export default Work;