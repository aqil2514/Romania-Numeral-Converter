//ROMAN NUMBER CONVERTER

const tHasil = document.getElementById('hasil');
const enterKey =document.getElementById('number');
const cNRoman = function (num) {
  const rumNumber = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //Satuan
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //Puluhan
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //Ratusan
    ["", "M", "MM", "MMM"], // Ribuan
  ];
//   Ubah Number menjadi string
  const numString = num.toString();
//   Hitung ada berapa banyak stringnya
  const numLength = numString.length;
//   Tentukan nilai awal ribuan, ratusan, puluhan. Agar ketika return, hasilnya adalah space kosong
  let ribuan = 0, ratusan = 0, puluhan = 0;
//   Jika angka yang dimasukkan ada ribuan
  if(numLength == 4){
    // ribuan adalah angka pertama dari kiri pada string 
    ribuan = parseInt(numString[0]);
  } 
//   Jika angka yang dimasukkan adalah ratusan
  if(numLength >= 3){
    // Ratusan adalah ada di posisi ke (jumlah digit angka - 1 - 2)
    ratusan = parseInt(numString[numLength-1-2]);
  } 
//   Jika angka yang dimasukkan adalah puluhan
  if(numLength >= 2){
    // Puluhannya adalah angka pertama dari kiri
    puluhan = parseInt(numString[numLength-1-1]);
  } 
//   Satuannya adalah berapapun angka sisa bagi 10
  const satuan = num%10; 

  if(num > 3000){
    alert('Angka tidak boleh lebih dari 3000');
    return;
  } else if(num <= 0){
    alert('Angka tidak boleh 0 atau negatif');
    return;
  }
   let hasil = rumNumber[3][ribuan]+rumNumber[2][ratusan]+rumNumber[1][puluhan]+rumNumber[0][satuan];
   return cetakHasil(hasil);
};

function aktifFungsi(num){
    num = document.getElementById('number').value;
    cNRoman(num);
}

function cetakHasil(hasil){
    tHasil.innerText= hasil;
}

enterKey.addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        aktifFungsi();
    }
})