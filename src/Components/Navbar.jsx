import { List } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <div className="p-5 rounded-md shadow-sm border flex justify-between items-center">
                <h1 className="text-xl md:text-2xl">E-Student</h1>
                <ul className="hidden sm:flex">
                    <li className="link hover:text-slate-500"><Link to="/student">Data Siswa</Link></li>
                    <li className="link hover:text-slate-500"><Link to="/subject">Mata Pelajaran</Link></li>
                    <li className="link hover:text-slate-500"><Link to={"/savings"}>Tabungan</Link></li>
                </ul>
                <button className="md:hidden p-4 border active:bg-slate-300"><List /></button>
            </div>
        </>
    )
}

export default Navbar