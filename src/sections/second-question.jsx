import Card from "../components/card";

export default function SecondQuestion() {
  return (
    <section className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4">
      <div className="flex justify-center">
        <Card title="Pertanyaan 2: Apa faktor yang memengaruhi percobaan tersebut? Jelaskan alasannya." centerizeTitle wide />
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:max-w-4/5">
        <Card title="Percobaan 1: Cuka dan Soda Kue" wide>
          <p className="text-pretty">
Faktor utama yang memengaruhi reaksi pada percobaan ini adalah jumlah soda kue yang digunakan. Semakin banyak soda kue (NaHCO₃) yang dicampurkan ke dalam cuka (CH₃COOH), semakin banyak gas karbon dioksida (CO₂) yang dihasilkan, sehingga balon mengembang lebih besar. Hal ini menunjukkan bahwa konsentrasi reaktan berpengaruh langsung terhadap jumlah hasil reaksi. Selain itu, suhu lingkungan dan waktu reaksi juga berperan; suhu yang lebih hangat dapat mempercepat reaksi, dan waktu yang lebih lama memungkinkan kita melihat perbedaan volume gas yang dihasilkan lebih jelas.
          </p>
        </Card>
        <Card title="Percobaan 2: Cuka dan Cangkang Telur" wide>
          <p className="text-pretty">
Faktor yang paling memengaruhi reaksi pada percobaan ini adalah bentuk atau luas permukaan cangkang telur. Serbuk cangkang bereaksi paling cepat karena memiliki luas permukaan yang lebih besar, sehingga kontak antara kalsium karbonat (CaCO₃) dan asam asetat (CH₃COOH) lebih maksimal. Sebaliknya, cangkang utuh memiliki permukaan terbatas, sehingga reaksi berlangsung lebih lambat. Selain itu, suhu dan waktu reaksi juga memengaruhi kecepatan dan hasil reaksi, di mana suhu yang lebih tinggi dan waktu yang cukup lama mempercepat dan memperjelas proses pelarutan serta pembentukan gelembung gas.
          </p>
        </Card>
      </div>
    </section>
  );
}
