import { List } from "react-bootstrap-icons"

const Navbar = () => {
    return(
        <>
            <div className="p-5 rounded-md shadow-sm border flex justify-between items-center">
                <h1 className="text-xl md:text-2xl">E-Student</h1>
                <ul className="hidden sm:flex">
                    <li className="link">Manajemen Siswa</li>
                    <li className="link">Mata Pelajaran</li>
                    <li className="link">Tabungan</li>
                </ul>
                <button className="md:hidden p-4 border active:bg-slate-300"><List /></button>
            </div>
        </>
    )
}

export default Navbar