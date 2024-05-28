function formatRupiah(angka) {
    let numberString = angka.toString();
    let sisa = numberString.length % 3;
    let rupiah = numberString.substr(0, sisa);
    let ribuan = numberString.substr(sisa).match(/\d{3}/g);
    
    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return 'Rp ' + rupiah;
}

function hitung() {
    // Ambil nilai input
    let bahanBaku = parseFloat(document.getElementById('bahanBaku').value);
    let operasional = parseFloat(document.getElementById('operasional').value);
    let tenagaKerja = parseFloat(document.getElementById('tenagaKerja').value);
    
    // Hitung HPP Produksi Keseluruhan
    let hppKeseluruhan = bahanBaku + operasional + tenagaKerja;
    
    // Hitung HPP per Butir Bakso
    let totalBakso = 4 * 500; // 4 olahan, tiap olahan 500 butir
    let hppPerButir = hppKeseluruhan / totalBakso;
    
    // Hitung keuntungan per olahan (10% dari HPP)
    let keuntunganPerOlahan = (hppKeseluruhan / 4) * 0.1;
    
    // Hitung keuntungan per butir
    let keuntunganPerButir = keuntunganPerOlahan / 500;
    
    // Hitung keuntungan 4x olahan
    let keuntungan4xOlahan = keuntunganPerOlahan * 4;
    
    // Hitung harga jual 1x olahan
    let hargaJualPerOlahan = (hppKeseluruhan / 4) + keuntunganPerOlahan;
    
    // Hitung harga jual per butir
    let hargaJualPerButir = hargaJualPerOlahan / 500;
    
    // Hitung modal kembali per butir
    let modalKembaliPerButir = (hppKeseluruhan / 4) / 500;
    
    // Hitung pendapatan per pack (50 butir) dengan 5% keuntungan
    let keuntunganPerPack = ((hppKeseluruhan / 4) / 10) * 0.05;
    let pendapatanPerPack = (modalKembaliPerButir * 50) + keuntunganPerPack;
    
    // Hitung pendapatan 4x olahan terjual semua
    let pendapatan4xOlahan = hargaJualPerOlahan * 4;
    
    // Tampilkan hasil
    let results = `
        <h2 class="text-xl font-bold mb-4">Hasil Perhitungan</h2>
        <p class="mb-2">HPP Produksi Keseluruhan: ${formatRupiah(hppKeseluruhan)}</p>
        <p class="mb-2">HPP per Butir Bakso: ${formatRupiah(hppPerButir)}</p>
        <p class="mb-2">Keuntungan per Olahan: ${formatRupiah(keuntunganPerOlahan)}</p>
        <p class="mb-2">Keuntungan per Butir Bakso: ${formatRupiah(keuntunganPerButir)}</p>
        <p class="mb-2">Keuntungan 4x Olahan: ${formatRupiah(keuntungan4xOlahan)}</p>
        <p class="mb-2">Harga Jual 1x Olahan: ${formatRupiah(hargaJualPerOlahan)}</p>
        <p class="mb-2">Harga Jual per Butir: ${formatRupiah(hargaJualPerButir)}</p>
        <p class="mb-2">Modal Kembali per Butir: ${formatRupiah(modalKembaliPerButir)}</p>
        <p class="mb-2">Pendapatan per Pack (50 Butir): ${formatRupiah(pendapatanPerPack)}</p>
        <p class="mb-2">Pendapatan 4x Olahan Terjual Semua: ${formatRupiah(pendapatan4xOlahan)}</p>
    `;
    document.getElementById('results').innerHTML = results;
}
