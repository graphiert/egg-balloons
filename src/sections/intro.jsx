import Card from "../components/card";

export default function Intro() {
  return (
    <div id="page2" className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4">
      <div className="pl-24 flex flex-row w-full">
        <Card title="Tujuan Praktikum">
          <p className="text-pretty text-sm">
            Tujuan praktikum ini yaitu untuk menganalisis faktor yang
            mempengaruhi laju reaksi.
          </p>
        </Card>
      </div>
      <div className="pr-24 flex flex-row-reverse w-full">
        <Card title="Landasan Teori">
          <ol className="list-decimal ml-4 text-sm">
            <li>
              Konsentrasi, Jika konsentrasi pereaksi diperbesar, maka laju
              reaksinya akan semakin cepat.
            </li>
            <li>
              Luas Permukaan, semakin besar luas permukaan partikelnya, semakin
              tinggi laju reaksinya.
            </li>
            <li>Suhu, Kenaikan suhu akan mempercepat laju reaksi.</li>
            <li>Katalis, penambahkan katalis akan mempercepat laju reaksi.</li>
          </ol>
        </Card>
      </div>
    </div>
  );
}
