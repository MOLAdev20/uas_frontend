import { ArrowLeftCircle, Pencil } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import changeFormatDate from "../../helper/DateFormat";
import Loading from "../../Components/Loading";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const StudentDetail = () => {
    const {studentId} = useParams("studentId");

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/student/detail/${studentId}`)
        .then(res => res.json())
        .then((resJSON) => {

            if(resJSON.status == "success"){
                setData([resJSON.data])
            }
        })
        .finally(() => setLoading(false))
    }, [])

    return (
        <>

            <div className="container mx-auto my-1">
                {/* Navbar */}
                    <Navbar/>
                {/* End Navbar */}

                <div className="my-3 grid grid-cols-5 gap-4">

                    <div className="md:col-span-1 col-span-12">
                
                    </div>
                    <div className="md:col-span-4 col-span-12">
                        <div className="p-3 md:p-5">
                            <div className="p-8 bg-sky-100 rounded-md">
                                <h3 className="text-2xl merge-icon">
                                <Link to={"/student"} className="mr-2"><ArrowLeftCircle/></Link> Detail Informasi Siswa
                                </h3>
                            </div>

                            {/* Content */}

                            {loading ? (
                                <div className="flex justify-center">
                                    <Loading/>
                                </div>
                            ) : data.length > 0 ? data.map((item, index) => (
                                <div className="grid gap-4 grid-cols-12 mt-5">
                                    <div className="md:col-span-4 col-span-12 p-2 border rounded">
                                        <img src={"https://i.pinimg.com/736x/66/e6/be/66e6be9841f79359e714651708978023.jpg"} alt="avatar" />
                                    </div>
                                    <div className="md:col-span-8 col-span-12">
                                        <div key={index} className="bg-white overflow-hidden shadow rounded-lg border">
                                            <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                        Informasi Pribadi
                                                    </h3>
                                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                        Informasi pribadi terkait siswa
                                                    </p>
                                                </div>
                                                <div>
                                                    <Link to={`/student/edit/${item.id}`} >
                                                        <Pencil/>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                                <dl className="sm:divide-y sm:divide-gray-200">
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            NISN
                                                        </dt>
                                                        <dd className="mt-1 md:text-lg text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                                                            {item.nisn}
                                                        </dd>
                                                    </div>
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Nama Lengkap
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {item.name}
                                                        </dd>
                                                    </div>
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Jenis Kelamin
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {item.gender}
                                                        </dd>
                                                    </div>
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Tempat, Tanggal Lahir
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {item.birth_place}, {changeFormatDate(item.birth_date)}
                                                        </dd>
                                                    </div>
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Agama
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {item.religion}
                                                        </dd>
                                                    </div>
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Alamat Lengkap
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {item.address}
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            ) : 
                            <NotFound/>}

                            {/* End Content */}

                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}

export default StudentDetail