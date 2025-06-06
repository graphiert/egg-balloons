import Card from "../components/card";

export default function Intro() {
  return (
    <section
      className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4"
    >
      <Card title="Tujuan Praktikum" wide>
        <p className="text-pretty">
          Tujuan praktikum ini yaitu untuk menganalisis faktor yang mempengaruhi
          laju reaksi.
        </p>
      </Card>
      <Card title="Landasan Teori" wide>
        <ol className="list-decimal ml-4">
          <li className="font-bold">
            Konsentrasi, Jika konsentrasi pereaksi diperbesar, maka laju
            reaksinya akan semakin cepat.
          </li>
          <li className="font-bold">
            Luas Permukaan, semakin besar luas permukaan partikelnya, semakin
            tinggi laju reaksinya.
          </li>
          <li>Suhu, Kenaikan suhu akan mempercepat laju reaksi.</li>
          <li>Katalis, penambahkan katalis akan mempercepat laju reaksi.</li>
        </ol>
      </Card>
      <Card wide>
        <p className="text-pretty text-sm">
          Nomor 1 dan 2 adalah objektif yang kami praktikumkan. Halaman setelahnya
          hanya akan memaparkan hasil praktikum dari kelompok kami untuk nomor 1 dan 2.
        </p>
      </Card>
    </section>
  );
}
