function formatDate() { 
    const date = new Date(); 
    const formatDate = date.toLocaleString(); 
    return formatDate; 
}  

alert(formatDate())