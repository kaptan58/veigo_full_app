
export default function Home() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">🚖 VEIGO</h1>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-yellow-400">Ana Sayfa</a>
          <a href="#" className="block hover:text-yellow-400">Araç Sahipleri</a>
          <a href="#" className="block hover:text-yellow-400">Sürücüler</a>
          <a href="#" className="block hover:text-yellow-400">Müşteriler</a>
          <a href="#" className="block hover:text-yellow-400">Yolculuklar</a>
          <a href="#" className="block hover:text-yellow-400">Ayarlar</a>
        </nav>
      </aside>
      <main className="flex-1 p-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">YÖNETİCİ PANELİ</h2>
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-500 text-white p-6 rounded-md shadow">
            <p className="text-sm">Toplam Yolculuk</p>
            <p className="text-2xl font-bold">1,254</p>
          </div>
          <div className="bg-cyan-500 text-white p-6 rounded-md shadow">
            <p className="text-sm">Aktif Kullanıcılar</p>
            <p className="text-2xl font-bold">569</p>
          </div>
          <div className="bg-orange-400 text-white p-6 rounded-md shadow">
            <p className="text-sm">Gelir</p>
            <p className="text-2xl font-bold">₺18.540,75</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-md shadow">
            <p className="text-sm">Komisyon Oranı</p>
            <p className="text-2xl font-bold">12%</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="font-semibold text-lg mb-4">Araç Sahipleri</h3>
            <table className="w-full text-left">
              <thead><tr><th>Ad</th><th>E-posta</th><th>Toplam Kazanç</th></tr></thead>
              <tbody>
                <tr><td>Ozlem Yilmaz</td><td>ozlem.yilmaz@example.com</td><td>₺7.340,00</td></tr>
                <tr><td>Mehmet Demir</td><td>mehmet.demir@example.com</td><td>₺5.210,00</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="font-semibold text-lg mb-4">Son Yolculuklar</h3>
            <table className="w-full text-left">
              <thead><tr><th>Kullanıcı</th><th>Sürücü</th><th>Başlangıç</th><th>Bitiş</th><th>Tutar</th></tr></thead>
              <tbody>
                <tr><td>Ali</td><td>Ahmet</td><td>Kızılay</td><td>Dikmen</td><td>₺65,00</td></tr>
                <tr><td>Zeynep</td><td>Selin</td><td>Aşağı Ayrancı</td><td>Einek</td><td>₺72,50</td></tr>
                <tr><td>Eren</td><td>Serkan</td><td>Çankaya</td><td>Bahçelievler</td><td>₺66,00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
