import { useState } from "react"
import { List } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <div className="p-5 rounded-md shadow-sm border flex justify-between items-center">
                <h1 className="text-xl md:text-2xl"><Link to="/">E-Student</Link></h1>
                <ul className="hidden sm:flex">
                    <li className="link hover:text-slate-500"><Link to="/student">Data Siswa</Link></li>
                    <li className="link hover:text-slate-500"><Link to={"/about"}>Tentang</Link></li>
                </ul>
                <button onClick={() => setOpen(!open)} className="md:hidden p-4 border active:bg-slate-300"><List /></button>
            </div>
            <div className={`${open ? "block" : "hidden"} md:hidden`}>
                <div className="p-5 rounded-md shadow-sm border flex justify-between items-center">
                    <ul>
                        <li className="link hover:text-slate-500"><Link to="/student">Data Siswa</Link></li>
                        <li className="link hover:text-slate-500"><Link to="/about">Tentang</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar