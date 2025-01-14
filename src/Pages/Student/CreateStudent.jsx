import { useEffect, useState } from "react"
import { ArrowLeftCircle} from "react-bootstrap-icons"
import Navbar from "../../Components/Navbar"
import "../../../src/mystyle.css"

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Loading from "../../Components/Loading"

const CreateStudent = () => {

  const [form, setForm] = useState({
    nisn: "", 
    studentName: "", 
    gender: "", 
    religion: "", 
    birth_place: "", 
    birth_date: "", 
    address: ""  
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = "Input Data Siswa | SIAKAD7"
  }, [])

  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleClickButton = () => {
    setLoading(true)
    const requiredFields = ["nisn", "studentName", "gender", "religion", "birth_place", "birth_date", "address"];
    
    if (requiredFields.some(field => !form[field])) {
      setLoading(false)
      return Swal.fire('Data belum lengkap!', "Harap coba lagi", 'error');
    }
  
    fetch(`${import.meta.env.VITE_API}/student/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    .then(res => res.json())
    .then(({ status, data }) => {

      if(status != "success") {
        const messages = {
          "nisn-max-reached": ['NISN melebihi 10 digit!', "Data gagal disimpan. Harap coba lagi", 'error'],
          "nisn-conflict": ['NISN sudah terdaftar!', "Data gagal disimpan. Harap coba lagi", 'error'],
        };

        Swal.fire(...(messages[status]));
      }else{
        Swal.fire('Data berhasil disimpan', "Anda bisa melihatnya di halaman Data Siswa", 'success');

        setTimeout(() => {
          window.location.replace(`/student/detail/${data.id}`);
        }, 1000)
      }

    })
    .catch(err => {
      console.error(err);
      Swal.fire('Data gagal disimpan', "Harap coba kembali", 'error');
    })
    .finally(() => setLoading(false));
  };

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
                  <Link to={"/student"} className="mr-2"><ArrowLeftCircle/></Link> Tambah Siswa Baru
                </h3>
              </div>
              
              {loading ? <Loading/> :
              <>
                <div className="grid grid-cols-12 gap-4 mt-5">

                  {/* NISN */}
                  <div className="md:col-span-6 col-span-12">
                    <label htmlFor="form_nisn" className="block mb-2">NISN</label>
                    <input type="number" id="form_nisn" name="nisn" className="form-control" onChange={(e) => handleInputChange(e)} value={form.nisn} />
                  </div>
                  {/* End of NISN */}
                  
                  {/* Nama Lengkap */}
                  <div className="md:col-span-6 col-span-12">
                    <label htmlFor="form_name" className="block mb-2">Nama Lengkap</label>
                    <input type="text" id="form_name" name="studentName" className="form-control" onChange={(e) => handleInputChange(e)} value={form.studentName} />
                  </div>
                  {/* End of Nama Lengkap */}

                  {/* Tempat Lahir */}
                  <div className="md:col-span-6 col-span-6">
                    <label htmlFor="form_birth_place" className="block mb-2">Tempat Lahir</label>
                    <input type="text" id="form_birth_place" name="birth_place" className="form-control" onChange={(e) => handleInputChange(e)} value={form.birth_place}  />
                  </div>
                  {/* End of Tempat Lahir */}

                  {/* Tanggal Lahir */}
                  <div className="md:col-span-6 col-span-6">
                    <label htmlFor="form_birth_date" className="block mb-2">Tanggal Lahir</label>
                    <input type="date" id="form_birth_date" name="birth_date" className="form-control" onChange={(e) => handleInputChange(e)} value={form.birth_date}  />
                  </div>
                  {/* End of Tanggal Lahir */}

                  {/* Gender */}
                  <div className="md:col-span-6 col-span-12">
                    <label className="block mb-1">Gender</label>
                    <div className="flex items-center">
                      <input type="radio" id="form_gender_male" value={"Laki-laki"} className="mr-1" name="gender" checked={form.gender === "Laki-laki"} onChange={(e) => handleInputChange(e)}/>
                      <label htmlFor="form_gender_male" className="md:text-lg sm:text-sm">Laki-laki</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="form_gender_female" value={"Perempuan"} className="mr-1" name="gender" checked={form.gender === "Perempuan"} onChange={(e) => handleInputChange(e)}/>
                      <label htmlFor="form_gender_female" className="md:text-lg sm:text-sm" onChange={(e) => handleInputChange(e)}>Perempuan</label>
                    </div>
                  </div>
                  {/* End of Gender */}

                  {/* Agama */}
                  <div className="md:col-span-6 col-span-12">
                    <label htmlFor="form_religion" className="block mb-2">Agama</label>
                    <select id="form_religion" defaultValue={form.religion} className="form-control" name="religion" onChange={(e) => handleInputChange(e)}>
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
                    <textarea id="form_address" className="form-control" name="address" onChange={(e) => handleInputChange(e)} value={form.address}></textarea>
                  </div>
                  {/* End of Alamat */}

                </div>
                <div className="mt-2">
                  <button className="py-3 text-base md:text-lg px-8 bg-blue-500 active:bg-blue-800 transition text-white" onClick={() => handleClickButton()} >Simpan</button>
                </div>
              </>}
            </div>
          </div>
        </div>
        {/* End Content */}
      </div>
    </>
  )
}

export default CreateStudent