import getBaseUrl from "../../../../utils/base-url"

function Hero() {
  return (
    <div
        className="w-full pt-24 py-12 bg-slate-100 base-padding grid grid-cols-2"
    >

        <div>
            <p className="text-xl text-slate-800 font-1 font-medium">Become Master</p>

            <p className="text-4xl text-slate-800 tracking-wide font-1 font-normal mt-4">
                Learn new skills online
            </p>
            <p className="text-4xl text-slate-800 tracking-wide font-1 font-normal mt-1">
                Find best courses
            </p>
            
            <div className="flex items-center gap-x-4 mt-12">
                <button className="primary-btn flex-1">
                    Get A Qoute
                </button>
                <button className="primary-btn flex-1 bg-transparent border border-gray-200">
                    Read More
                </button>
            </div>
        </div>

        <img
            alt=""
            src={getBaseUrl()+"/images/Analytic.png"}
            className="w-80 h-auto object-center object-cover place-self-center"
        />

    </div>
  )
}

export default Hero