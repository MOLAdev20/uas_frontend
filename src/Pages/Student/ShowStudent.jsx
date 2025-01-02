import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ArrowLeftCircle, PlusCircle, Search } from "react-bootstrap-icons"
import Navbar from "../../Components/Navbar"
import Loading from "../../Components/Loading"
import changeFormatDate from "../../helper/DateFormat"

const ShowStudent = () => {

	const [data, setData] = useState([])
	const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)

	useEffect(() => {

		fetch(`${import.meta.env.VITE_API}/student/`)
		.then(res => res.json())
		.then(({data}) => setData(data))
    .finally(() => setLoading(false))

	}, [])


	const handleSearch = () => {
    setLoading(true)
		fetch(`${import.meta.env.VITE_API}/student/search?q=${query}`)
		.then(res => res.json())
		.then(res => {
			if(res.status == "success"){
				setData(res.data)
			}else{
				setData([])
			}
		})
    .finally(() => setLoading(false))
	}

  return (
    <>
      <div className="container mx-auto my-1">

        {/* Navbar */}
        <Navbar/>
        {/* End Navbar */}

        {/* Content */}
        <div className="my-3 grid grid-cols-5 gap-4">
          <div className="md:col-span-1 col-span-12">
            
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="p-3 md:p-5">
              <div className="p-8 bg-sky-100 rounded-md">
                <h3 className="text-2xl merge-icon">
                  <Link to={"/"} className="mr-2"><ArrowLeftCircle/></Link> Data Seluruh Siswa
                </h3>
              </div>
              
              <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="md:col-span-4 col-span-8">
                    {query.length > 0 && <a href="/student" className="flex items-center text-red-500"><ArrowLeftCircle className="mr-1"/> Hapus pencarian</a>}
                    <div className="flex">
                      <input type="text" placeholder="Cari Nama..." onChange={(e) => setQuery(e.target.value)} name="search" className="form-control" />
                      <button className="text-base md:text-lg p-4 bg-blue-500 active:bg-blue-800 transition text-white" onClick={() => handleSearch()} >
                          <Search/>
                      </button>
                    </div>
                </div>
				<div className="col-span-12 flex">
					<Link to={'/student/create'} className="font-medium flex items-center text-sm md:text-lg text-blue-600 dark:text-blue-500 hover:underline">
						<PlusCircle className="mr-1"/> Input Data Siswa
					</Link>
                </div>
                <div className="col-span-12">
                  {loading ? <Loading/> : 
                  <div className="relative overflow-x-auto">
                      <table className="w-full border text-sm text-left rtl:text-right text-gray-500">
                          <thead className="text-gray-700 uppercase bg-gray-50">
                              <tr>
                                  <th scope="col" className="px-6 py-3">
                                      #
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      NIS
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Nama Siswa
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Jenis Kelamin
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Tempat, Tanggal Lahir
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Aksi
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                            {data.length > 0 ? data.map((m) => (
                              <tr key={m.id} className="bg-white border-b">
                                <td className="px-6 py-4">
                                  {m.avatar == "none" ? <img src={`${import.meta.env.VITE_API}/assets/defaultUser.jpg`} alt="avatar" className="rounded-full" width={"50px"}/> :
                                  <img src={`${import.meta.env.VITE_API}/upload/${m.avatar}`} alt="avatar" className="rounded-full" width={"50px"}/>}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                  {m.nisn}
                                </th>
                                <td className="px-6 py-4">
                                  {m.name}
                                </td>
                                <td className="px-6 py-4">
                                  {m.gender}
                                </td>
                                <td className="px-6 py-4">
                                  {m.birth_place}, {changeFormatDate(m.birth_date)}
                                </td>
                                <td className="px-6 py-4">
                                  <Link to={`/student/detail/${m.id}`} className="font-medium text-blue-600 hover:underline">Detail</Link>
                                </td>
                              </tr>
                            )) : <tr><td colSpan={5} className="text-center py-3 text-md">Data tidak ditemukan</td></tr>}
                          </tbody>
                      </table>
                  </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
      </div>
    </>
  )
}

export default ShowStudent