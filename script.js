document.getElementById("ubahProfil").addEventListener("click", function () {
  const nama = prompt("Masukkan nama:", document.getElementById("nama").innerText);
  if (nama) document.getElementById("nama").innerText = nama;

  const deskripsi = prompt("Masukkan deskripsi:", document.getElementById("deskripsi").innerText);
  if (deskripsi) document.getElementById("deskripsi").innerText = deskripsi;

  const email = prompt("Masukkan email:", document.getElementById("email").innerText);
  if (email) document.getElementById("email").innerText = email;

  const telepon = prompt("Masukkan telepon:", document.getElementById("telepon").innerText);
  if (telepon) document.getElementById("telepon").innerText = telepon;

  const alamat = prompt("Masukkan alamat:", document.getElementById("alamat").innerText);
  if (alamat) document.getElementById("alamat").innerText = alamat;

  const fotoUrl = prompt("Masukkan URL foto (opsional):");
  if (fotoUrl) {
    document.getElementById("photoPreview").innerHTML =
      `<img src="${fotoUrl}" alt="Foto Profil">`;
  }
});
