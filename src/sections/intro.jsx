import Button from "../components/button";
import Card from "../components/card";

export default function Intro() {
  return (
    <div
      id="page2"
      className="min-h-screen flex justify-center items-center flex-col gap-4"
    >
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
          {/* <p className="text-pretty text-sm">
            Ada 4 faktor yang mempengaruhi laju reaksi yaitu luas permukaan
            bidang sentuh, konsentrasi, suhu dan katalis.
          </p> */}
          <ol class="list-decimal ml-4">
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
      <Button href="#page3">Lanjut</Button>
    </div>
  );
}
