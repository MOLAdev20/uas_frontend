import { ArrowLeftCircle} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect} from "react";

const About = () => {

    

    useEffect(() => {
    }, [])

    

    return (
        <>

            <div className="container mx-auto my-1">
                {/* Navbar */}
                    <Navbar/>
                {/* End Navbar */}

                <div className="my-3">
                    <div className="md:px-20">
                        <div className="p-2 md:p-5">
                            <div className="p-8 bg-sky-100 rounded-md">
                                <h3 className="text-2xl merge-icon">
                                <Link to={"/"} className="mr-2"><ArrowLeftCircle/></Link> Tentang
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="grid gap-4 grid-cols-12 mt-5" >
                                <div className=" col-span-12">
                                    <h1 className="text-2xl">Aplikasi Pendataan Siswa</h1>
                                    <p className="mt-2">Aplikasi pendataan siswa ini dirancang untuk memudahkan pengelolaan data siswa secara digital dengan memanfaatkan teknologi modern yang efisien dan mudah digunakan. Dibangun dengan bahasa pemrograman Javascript dalam sebuah library React.js VITE sebagai antar mukanya, Express.js sebagai backendnya dan MySQL sebagai databasenya, aplikasi ini menawarkan performa tinggi dan pengalaman pengguna yang responsif.</p>
                                    <p>Aplikasi dibuat untuk pemenuhan tugas UAS mata kuliah Sistem Berkas dan dibuat oleh kelompok 7. Berikut adalah anggotanya:</p>
                                    <ul className="mt-5 ms-10">
                                        <li className="list-disc">Muhamad Wildan</li>
                                        <li className="list-disc">Muhammad Sabiilul Hikam Azzuhrie</li>
                                        <li className="list-disc">Rafif Oktaviano Habibullah</li>
                                        <li className="list-disc">Zulkipli</li>
                                        <li className="list-disc">M. Revaldi Sapta Wiguna</li>
                                    </ul>
                                </div>
                            </div>

                            {/* End Content */}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default About