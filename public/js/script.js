document.getElementById('hppForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Ambil nilai dari input
    const bahanBaku = parseFloat(document.getElementById('bahanBaku').value);
    const oprasional = parseFloat(document.getElementById('oprasional').value);
    const tenagaKerja = parseFloat(document.getElementById('tenagaKerja').value);
    const jumlahOlahan = parseFloat(document.getElementById('jumlahOlahan').value);
    const hasilPerOlahan = parseFloat(document.getElementById('hasilPerOlahan').value);
    
    // Hitung HPP
    const hppTotal = bahanBaku + oprasional + tenagaKerja;
    
    // Hitung HPP per buah
    const hppPerBuah = hppTotal / (jumlahOlahan * hasilPerOlahan);
    
    // Tampilkan hasil dengan format mata uang
    document.getElementById('result').innerText = `HPP: Rp ${hppTotal.toLocaleString('id-ID')}\nHPP per butir: Rp ${hppPerBuah.toLocaleString('id-ID')}`;
});
