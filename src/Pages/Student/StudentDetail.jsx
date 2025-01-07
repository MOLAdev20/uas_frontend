import { ArrowLeftCircle, Ban, Pencil, Upload } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import changeFormatDate from "../../helper/DateFormat";
import Loading from "../../Components/Loading";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const StudentDetail = () => {
    const {studentId} = useParams("studentId");

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        fetch(`${import.meta.env.VITE_API}/student/detail/${studentId}`)
        .then(res => res.json())
        .then((resJSON) => {

            if(resJSON.status == "success"){
                setData([resJSON.data])
                document.title = `${resJSON.data.name} | SIAKAD7`;
            }
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleUpload = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);
        fetch(`${import.meta.env.VITE_API}/student/upload-avatar/${studentId}`, {
            method: "POST",
            body: formData,
        })
        .then(res => res.json())
        .then(({status}) => {
            if(status == "success"){
                Swal.fire('Berhasil', "Foto berhasil diupload", 'success');
            }

            fetchData()
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Yakin ingin menghapus?',
            text: "Data akan dihapus secara permanen!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API}/student/delete/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                .then(({status}) => {
                    if(status == "success"){
                        Swal.fire('Berhasil', "Data berhasil dihapus", 'success');
                    }
                    setTimeout(() => {
                        location.replace("/student");
                    }, 1000);
                })

            }
          })

        
    }

    

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
                                <Link to={"/student"} className="mr-2"><ArrowLeftCircle/></Link> Detail Informasi Siswa
                                </h3>
                            </div>

                            {/* Content */}

                            {loading ? (
                                <div className="flex justify-center">
                                    <Loading/>
                                </div>
                            ) : data.length > 0 ? data.map((item, index) => (
                                <div className="grid gap-4 grid-cols-12 mt-5" key={index}>
                                    <div className="md:col-span-4 col-span-12 h-fit p-2 border rounded relative">
                                        {item.avatar == "none" ? 
                                            <img src={`${import.meta.env.VITE_API}/assets/defaultUser.jpg`} alt="avatar" />
                                            :
                                            <img src={`${import.meta.env.VITE_API}/upload/${item.avatar}`} alt="avatar" />
                                        }
                                        <button className="p-4 shadow active:bg-blue-700 rounded-full font-medium absolute bottom-5 left-10 right-10 flex items-center justify-center bg-blue-500 text-white" onClick={() => document.querySelector("#avatarUpload").click()}>
                                            <Upload className="mr-2"/> Ganti Foto
                                        </button>
                                    </div>
                                    <form className="hidden">
                                        <input type="file" id="avatarUpload" onChange={(e) => handleUpload(e)} />
                                    </form>
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
                                                        <div className="bg-blue-600 hover:bg-blue-800 text-white font-bold p-4 rounded-full"><Pencil/></div>
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
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Terdaftar Pada
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {changeFormatDate(item.createdAt, "with-time")}
                                                        </dd>
                                                    </div>
                                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                        <dt className="text-sm font-medium text-gray-500">
                                                            Diperbaharui Pada
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            {changeFormatDate(item.updatedAt, "with-time")}
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDelete(item.id)} className="flex items-center gap-2 text-red-600 mt-3 justify-end"><Ban/>Hapus Siswa</button>
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