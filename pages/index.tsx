
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>VEIGO Admin Panel</title>
      </Head>
      <h1>🚗 VEIGO Admin Panel</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#3b82f6', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h2>1,254</h2>
          <p>Toplam Yolculuk</p>
        </div>
        <div style={{ background: '#0ea5e9', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h2>569</h2>
          <p>Aktif Kullanıcılar</p>
        </div>
        <div style={{ background: '#f59e0b', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h2>₺18.540,75</h2>
          <p>Gelir</p>
        </div>
        <div style={{ background: '#ef4444', color: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h2>%12</h2>
          <p>Komisyon Oranı</p>
        </div>
      </div>
      <h3 style={{ marginTop: '40px' }}>Araç Sahipleri</h3>
      <table border="1" cellPadding="10">
        <thead><tr><th>Ad</th><th>E-posta</th><th>Toplam Kazanç</th></tr></thead>
        <tbody>
          <tr><td>Ozlem Yilmaz</td><td>ozlem.yilmaz@example.com</td><td>₺7.340,00</td></tr>
          <tr><td>Mehmet Demir</td><td>mehmet.demir@example.com</td><td>₺5.210,00</td></tr>
        </tbody>
      </table>
      <h3 style={{ marginTop: '40px' }}>Son Yolculuklar</h3>
      <table border="1" cellPadding="10">
        <thead><tr><th>Kullanıcı</th><th>Sürücü</th><th>Başlangıç</th><th>Bitiş</th><th>Tutar</th></tr></thead>
        <tbody>
          <tr><td>Ali</td><td>Ahmet</td><td>Kızılay</td><td>Dikmen</td><td>₺65,00</td></tr>
          <tr><td>Zeynep</td><td>Selin</td><td>Aşağı Ayrancı</td><td>Ekin</td><td>₺72,50</td></tr>
          <tr><td>Eren</td><td>Serkan</td><td>Çankaya</td><td>Bahçelievler</td><td>₺66,00</td></tr>
        </tbody>
      </table>
    </div>
  )
}
