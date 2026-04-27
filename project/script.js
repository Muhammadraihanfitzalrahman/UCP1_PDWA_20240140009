let anggota = [
    { nama: "Arif", email: "arif@mail.com", minat: "Teknik Informasi" },
    { nama: "Nopal", email: "nopal@mail.com", minat: "Teknik Elektro" }
];

// Tampilkan data di index
function tampilData() {
    let tabel = document.getElementById("dataAnggota");
    if (!tabel) return;

    tabel.innerHTML = "";

    anggota.forEach(a => {
        tabel.innerHTML += `
            <tr>
                <td>${a.nama}</td>
                <td>${a.email}</td>
                <td>${a.minat}</td>
            </tr>
        `;
    });
}

tampilData();

// Form submit
let form = document.getElementById("formAnggota");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let nama = document.getElementById("nama").value;
        let email = document.getElementById("email").value;
        let minat = document.getElementById("minat").value;

        let dataBaru = { nama, email, minat };
        anggota.push(dataBaru);

        document.getElementById("hasil").innerHTML =
            `Berhasil daftar: ${nama} - ${email} - ${minat}`;

        alert("Data berhasil ditambahkan!");
    });
}

// Multimedia
function playAudio() {
    document.getElementById("audio").play();
}

function pauseAudio() {
    document.getElementById("audio").pause();
}

function gantiGambar() {
    let img = document.getElementById("gambar");
    img.src = "https://teknik.photos/300?random=" + Math.random();
}