const changeFormatDate = dateString => {
    const date = new Date(dateString); // Mengubah string menjadi objek Date
    
    // Format tanggal ke format Indonesia
    const formattedDate = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  
    return formattedDate;
  }

  export default changeFormatDate
  