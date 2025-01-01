import { ArrowLeftCircle, Search } from "react-bootstrap-icons"
import Navbar from "../../Components/Navbar"

const ShowStudent = () => {

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
                  <a href='' className="mr-2"><ArrowLeftCircle/></a> Data Seluruh Siswa
                </h3>
              </div>
              
              <div className="grid grid-cols-12 gap-4 mt-5">
                <div className="md:col-span-4 col-span-8 flex">
                    <input type="text" placeholder="Cari Nama..." name="search" id="" className="form-control" />
                    <button className="text-base md:text-lg p-4 bg-blue-500 active:bg-blue-800 transition text-white" >
                        <Search/>
                    </button>
                </div>
                <div className="col-span-12">
                    <div className="relative overflow-x-auto">
                        <table class="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        NIS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nama Siswa
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Jenis Kelamin
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tempat, Tanggal Lahir
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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