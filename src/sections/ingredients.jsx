import Card from "../components/card";

export default function Ingredients() {
  return (
    <section 
      className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4"
    >
      <div className="flex flex-col md:flex-row">
        <Card title="Bahan dan Alat">
          <ul className="list-disc ml-4">
            <li>Botol Air Mineral</li>
            <li>Cuka</li>
            <li>Cangkang telur</li>
            <li>Soda Kue</li>
            <li>Balon</li>
          </ul>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Card title="Praktikum #1">
          <ul className="list-decimal ml-4">
            <li>
              Siapkan 3 botol air mineral dengan label, isi masing-masing ±
              30ml air cuka
            </li>
            <li>
              Masukkan balon dengan masing-masing 0,5 sdm, 1 sdm dan 1,5 sdm
            </li>
            <li>
              Pasangkan masing-masing ujung balon dengan balon, jangan sampai
              tumpah.
            </li>
            <li>Pada waktu bersamaan, tuang soda kue dalam balon ke botol</li>
            <li>Catat waktu dan amati perubahan yang terjadi selama reaksi</li>
          </ul>
        </Card>
        <Card title="Praktikum #2">
          <ul className="list-decimal ml-4">
            <li>
              Siapkan 3 wadah bening dengan label, isi masing-masing ± 30ml air
              cuka
            </li>
            <li>
              Buat cangkang telur menjadi 3 bentuk: utuh, pecahan dan serbuk
            </li>
            <li>
              Pada waktu bersamaan, masukkan 3 bentuk cangkang telur ke dalam
              wadah cuka
            </li>
            <li>Catat waktu dan amati perubahan yang terjadi selama reaksi</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
