import Card from "../components/card";

export default function FirstQuestion() {
  return (
    <section className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4">
      <div className="flex justify-center">
        <Card title="Pertanyaan 1: Bagaimana reaksi yang kalian amati pada 2 percobaan?" centerizeTitle wide={2} />
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:max-w-4/5">
        <Card title="Percobaan 1: Cuka dan Soda Kue" wide>
          <p className="text-pretty">
Pada percobaan pertama, terjadi reaksi antara asam asetat (CH₃COOH) dalam cuka dengan natrium bikarbonat (NaHCO₃) dalam soda kue yang menghasilkan gas karbon dioksida (CO₂), air (H₂O), dan natrium asetat (CH₃COONa). Persamaan reaksinya adalah {' '}
<span className="font-bold">NaHCO₃ + CH₃COOH → CO₂ + H₂O + CH₃COONa</span>.
Reaksi ini ditandai dengan mengembangnya balon akibat gas CO₂ yang terbentuk. Semakin banyak soda kue yang digunakan, semakin besar gas yang dihasilkan sehingga balon mengembang lebih besar. Hal ini terjadi karena reaksi asam-basa antara cuka dan soda kue menghasilkan gas CO₂ sebagai hasil utama.
          </p>
        </Card>
        <Card title="Percobaan 2: Cuka dan Cangkang Telur" wide>
          <p className="text-pretty">
Pada percobaan kedua, cangkang telur yang mengandung kalsium karbonat (CaCO₃) bereaksi dengan asam asetat (CH₃COOH) dalam cuka dan menghasilkan gas karbon dioksida (CO₂), air (H₂O), dan kalsium asetat [Ca(CH₃COO)₂]. Persamaan reaksinya adalah {' '}
<span className="font-bold">CaCO₃ + 2CH₃COOH → CO₂ + H₂O + Ca(CH₃COO)₂</span>.
Selama reaksi berlangsung, diamati cangkang telur berbuih dan perlahan mengelupas, terutama pada bentuk serbuk yang paling cepat bereaksi. Hal ini disebabkan luas permukaan yang lebih besar pada serbuk, sehingga mempercepat reaksi. Gelembung yang muncul menandakan terbentuknya gas CO₂ dari reaksi asam-karbonat tersebut.
          </p>
        </Card>
      </div>
    </section>
  );
}
