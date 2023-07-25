
import { ReactNode } from "react"
import NavBar from "../layout-components/NavBar"

interface Props {
    children: ReactNode
}

function ApplicationLayout({ children }: Props) {
    return (
        <div
            className="w-full min-h-screen"
        >

            {/* navbar */}
            <NavBar />


            {/* main section */}
            <div>
                {children}
            </div>

        </div>
    )
}

export default ApplicationLayout