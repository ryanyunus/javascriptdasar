let mahasiswa = {
    nama: 'Shandika',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi + porsi;
        console.log('Selamat datang ${this.nama}, selamat makan!');
    }
}