const changeFormatDate = (dateString, returnTime) => {
    const date = new Date(dateString); // Mengubah string menjadi objek Date
    
    // Format tanggal ke format Indonesia

    if(returnTime == "with-time"){
      const formattedDate = new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      }).format(date);
    
      return formattedDate;
    }else{

      const formattedDate = new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
    
      return formattedDate;
    }
  }

  export default changeFormatDate
  