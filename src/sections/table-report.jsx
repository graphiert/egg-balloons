import Card from "../components/card";

export default function TableReport() {
  return (
    <section className="py-4 min-h-screen snap-center flex justify-center items-center flex-col md:flex-row gap-4">
      <Card wide title="Hasil Kerja">
        <div className="overflow-hidden w-full overflow-x-auto rounded-sm border border-neutral-300">
          <table className="w-full text-left text-sm text-neutral-600">
            <thead className="border-b border-neutral-300 bg-neutral-50 text-sm text-neutral-900">
              <tr>
                <th scope="col" className="p-4">Bahan</th>
                <th scope="col" className="p-4">Waktu yang dibutuhkan</th>
                <th scope="col" className="p-4">Fisik yang berubah</th>
                <th scope="col" className="p-4">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300">
              <tr>
                <td className="p-4">#1: Air Cuka dan 3 Soda Kue dengan ukuran yang berbeda</td>
                <td className="p-4">± 15 detik</td>
                <td className="p-4">Menghasilkan gas dengan kuantitas yang berbeda</td>
                <td className="p-4">Semakin konsentrasi reaksi diperbesar, laju reaksinya akan semakin cepat</td>
              </tr>
              <tr>
                <td className="p-4">#2: Air Cuka dan 3 Cangkang Telur dengan bentuk yang berbeda</td>
                <td className="p-4">Bubuk: 3 menit <br /> Serpihan: 4 menit <br /> Utuh: 5 menit+</td>
                <td className="p-4">Cangkang telur mengelupas dengan urutan waktu tersebut</td>
                <td className="p-4">Semakin luas permukaan  partikelnya, semakin tinggi laju reaksinya</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      {/* <Card title="Pertanyaan">
        <ol className="list-decimal text-sm ml-4">
          <li>
            Bagaimana reaksi yang kalian amati pada 2 percobaan?
            <ul className="list-disc ml-8">
              <li>
                Percobaan 1: Semakin banyak soda kue, semakin banyak gas yang
                dihasilkan.
              </li>
              <li>
                Percobaan 2: Semakin kecil luas permukaan, semakin cepat reaksi
                terjadi.
              </li>
            </ul>
          </li>
          <li>
            Apa faktor yang memengaruhi percobaan tersebut? Jelaskan alasannya.
            <ul className="list-disc ml-8">
              <li>
                Percobaan 1: Konsentrasi memengaruhi percobaan ini karena
                semakin banyak soda kue yang dituang akan semakin besar
                balonnya.
              </li>
              <li>
                Percobaan 2: Luas Permukaan memengaruhi percobaan ini karena
                semakin kecil luas permukaan akan semakin cepat reaksi terjadi.
              </li>
            </ul>
          </li>
        </ol>
      </Card> */}
    </section>
  );
}
