import { useState } from "react"
import "./mystyle.css"
import { List } from "react-bootstrap-icons"

const App = () => {

  const [form, setForm] = useState({
    nisn: "", studentName: "", gender: "", religion: "", birth_place: "", birth_date: "", address: ""  
  })

  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleClickButton = () => {
    console.log(form)
  }

  return (
    <>
      <div className="container mx-auto my-1">

        {/* Navbar */}
        <div className="p-5 rounded-md shadow-sm border flex justify-between items-center">
          <h1 className="text-xl md:text-2xl">E-Student</h1>
          <ul className="hidden sm:flex">
            <li className="link">Manajemen Siswa</li>
            <li className="link">Mata Pelajaran</li>
            <li className="link">Tabungan</li>
          </ul>
          <button className="md:hidden p-4 border active:bg-slate-300"><List /></button>
        </div>
        {/* End Navbar */}

        {/* Content */}
        <div className="my-3 grid grid-cols-5 gap-4">
          <div className="md:col-span-1 col-span-12">
            
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="p-3 md:p-5">
              <h3 className="text-3xl">Tambah Siswa Baru</h3>
              
              <div className="grid grid-cols-12 gap-4 mt-5">

                {/* NISN */}
                <div className="md:col-span-6 col-span-12">
                  <label htmlFor="form_nisn" className="block mb-2">NISN</label>
                  <input type="number" id="form_nisn" name="nisn" className="form-control" onChange={(e) => handleInputChange(e)} />
                </div>
                {/* End of NISN */}
                
                {/* Nama Lengkap */}
                <div className="md:col-span-6 col-span-12">
                  <label htmlFor="form_name" className="block mb-2">Nama Lengkap</label>
                  <input type="text" id="form_name" name="studentName" className="form-control" onChange={(e) => handleInputChange(e)} />
                </div>
                {/* End of Nama Lengkap */}

                {/* Tempat Lahir */}
                <div className="md:col-span-6 col-span-6">
                  <label htmlFor="form_birth_place" className="block mb-2">Tempat Lahir</label>
                  <input type="text" id="form_birth_place" name="birth_place" className="form-control" onChange={(e) => handleInputChange(e)}  />
                </div>
                {/* End of Tempat Lahir */}

                {/* Tanggal Lahir */}
                <div className="md:col-span-6 col-span-6">
                  <label htmlFor="form_birth_date" className="block mb-2">Tanggal Lahir</label>
                  <input type="date" id="form_birth_date" name="birth_date" className="form-control" onChange={(e) => handleInputChange(e)}  />
                </div>
                {/* End of Tanggal Lahir */}

                {/* Gender */}
                <div className="md:col-span-6 col-span-12">
                  <label className="block mb-1">Gender</label>
                  <div className="flex items-center">
                    <input type="radio" id="form_gender_male" value={"Laki-laki"} className="mr-1" name="gender" onChange={(e) => handleInputChange(e)}/>
                    <label htmlFor="form_gender_male" className="md:text-lg sm:text-sm">Laki-laki</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="form_gender_female" value={"Perempuan"} className="mr-1" name="gender"/>
                    <label htmlFor="form_gender_female" className="md:text-lg sm:text-sm" onChange={(e) => handleInputChange(e)}>Perempuan</label>
                  </div>
                </div>
                {/* End of Gender */}

                {/* Agama */}
                <div className="md:col-span-6 col-span-12">
                  <label htmlFor="form_religion" className="block mb-2">Agama</label>
                  <select id="form_religion" className="form-control" name="religion" onChange={(e) => handleInputChange(e)}>
                    <option value="">Pilih</option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Konghucu">Konghucu</option>
                  </select>
                </div>
                {/* End of Agama */}

                {/* Alamat */}
                <div className="md:col-span-12 col-span-12">
                  <label htmlFor="form_address" className="block mb-2">Alamat Lengkap</label>
                  <textarea id="form_address" className="form-control" name="address" onChange={(e) => handleInputChange(e)}></textarea>
                </div>
                {/* End of Alamat */}

              </div>
              <div className="mt-2">
                <button className="py-3 text-base md:text-lg px-8 bg-blue-500 active:bg-blue-800 transition text-white" onClick={() => handleClickButton()} >Simpan</button>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
      </div>
    </>
  )
}

export default App