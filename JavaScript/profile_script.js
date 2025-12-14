let myName = "Ayu Miftahul Ulum";
const myAge = 17; 

console.log("Nama:", myName);
console.log("Umur:", myAge);


document.getElementById("nama-saya").innerHTML = `Halo, Saya ${myName}`;
document.getElementById("info-diri").innerHTML = `Saya berusia ${myAge} tahun dan suka belajar pemrograman.`;


function showAlert() 
{
    alert("Anda telah mengklik tombol!");
}
