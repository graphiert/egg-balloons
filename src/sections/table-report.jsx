import Card from "../components/card";

export default function Report() {
  return (
    <div id="page4" className="py-4 min-h-screen snap-center flex justify-center items-center flex-col md:flex-row gap-4">
      <Card title="Hasil Kerja" img="/egg-balloons/table.png"></Card>
      <Card title="Pertanyaan">
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
      </Card>
    </div>
  );
}
