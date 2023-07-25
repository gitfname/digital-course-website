
import { Link } from "react-router-dom"
import { HiLocationMarker } from "react-icons/hi"
import { GrMail } from "react-icons/gr"
import { BsFacebook, BsSearch, BsTelegram, BsTwitter } from "react-icons/bs"
import getBaseUrl from "../../utils/base-url"
import { applicationRoutes } from "../../routes"

function NavBar() {
    return (
        <div className="w-full">

            <div
                className="w-full py-3.5 bg-[--primary-color] flex items-center justify-between px-4 md:px-12 lg:px-20"
            >

                <div className="flex items-center gap-x-10">
                    <p
                        className="text-sm text-slate-800 font-normal flex items-center gap-x-2 font-1"
                    >
                        <HiLocationMarker className="w-4 h-4 fill-slate-700" />
                        093183362826
                    </p>
                    <p
                        className="text-sm text-slate-800 font-normal flex items-center gap-x-2 font-1"
                    >
                        <GrMail className="w-4 h-4 fill-slate-700" />
                        ourgmail@gmail.com
                    </p>
                </div>

                <div className="flex items-center gap-x-5">

                    <BsFacebook className="w-4 h-4 fill-slate-700" />
                    <BsTwitter className="w-4 h-4 fill-slate-700" />
                    <BsTelegram className="w-4 h-4 fill-slate-700" />

                </div>

            </div>


            <div
                className="flex py-3.5 bg-slate-100 items-center justify-between px-4 md:px-12 lg:px-20"
            >

                <img
                    alt="Logo"
                    src={getBaseUrl() + "/Logo.png"}
                    className="w-36 h-auto object-center object-cover"
                />

                <div className="flex items-center gap-x-5">

                    <Link
                        to={applicationRoutes.home}
                        className="text-sm text-slate-700 font-1 font-medium tracking-wide"
                    >
                        Home
                    </Link>

                    <Link
                        to={applicationRoutes.home}
                        className="text-sm text-slate-700 font-1 font-medium tracking-wide"
                    >
                        About
                    </Link>

                    <Link
                        to={applicationRoutes.home}
                        className="text-sm text-slate-700 font-1 font-medium tracking-wide"
                    >
                        Courses
                    </Link>

                    <Link
                        to={applicationRoutes.home}
                        className="text-sm text-slate-700 font-1 font-medium tracking-wide"
                    >
                        Contact
                    </Link>

                    <button
                        className="primary-btn ml-2 px-5 font-normal"
                    >
                        Sign Up
                    </button>

                    <button className="primary-btn bg-transparent border border-gray-200">
                        <BsSearch className="w-4 h-4 fill-slate-700" />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default NavBar