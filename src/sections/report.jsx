import Card from "../components/card";

export default function Report() {
  return (
    <section className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4">
        <Card title="Pembahasan praktikum" wide={2}>
          <p className="text-pretty">
Pada praktikum pertama, reaksi yang diamati adalah reaksi antara asam asetat (CH₃COOH) dalam cuka dengan natrium bikarbonat (NaHCO₃) dalam soda kue. Reaksi ini merupakan reaksi asam-basa yang menghasilkan gas karbon dioksida (CO₂), air (H₂O), dan natrium asetat (CH₃COONa). Gas CO₂ yang dihasilkan menyebabkan balon mengembang. Semakin banyak soda kue yang digunakan, semakin besar gas yang terbentuk karena semakin banyak partikel yang bereaksi. Hal ini menunjukkan bahwa jumlah atau konsentrasi reaktan memengaruhi jumlah hasil reaksi. Reaksi berlangsung cepat dan terlihat dari terbentuknya gelembung-gelembung gas yang segera mengisi balon. Percobaan ini menunjukkan bahwa reaksi asam dan basa dapat menghasilkan gas sebagai salah satu produknya, dan volume gas yang dihasilkan dapat diamati secara visual melalui perubahan pada balon.
<br /><br />
Pada praktikum kedua, reaksi yang diamati adalah antara asam asetat (CH₃COOH) dengan kalsium karbonat (CaCO₃) yang terdapat dalam cangkang telur. Reaksi ini juga menghasilkan gas karbon dioksida (CO₂), air, dan kalsium asetat [Ca(CH₃COO)₂]. Selama reaksi berlangsung, muncul buih atau gelembung gas di permukaan cangkang yang menandakan terbentuknya CO₂. Perbedaan bentuk cangkang (utuh, pecahan, dan serbuk) memengaruhi kecepatan reaksi. Serbuk memiliki luas permukaan paling besar sehingga mempercepat laju reaksi karena lebih banyak bagian cangkang yang langsung bersentuhan dengan larutan cuka. Reaksi ini berlangsung secara bertahap, dan bagian cangkang terlihat mengelupas atau melarut sebagai hasil reaksi kimia. Percobaan ini menunjukkan bahwa bentuk dan ukuran zat padat dapat memengaruhi kecepatan suatu reaksi kimia.
          </p>
        </Card>
    </section>
  );
}
