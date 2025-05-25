import Card from "../components/card";

export default function Conclusion() {
  return (
    <section className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4">
        <Card title="Apa kesimpulannya?" wide>
          <p className="text-pretty">
Berdasarkan hasil percobaan dan landasan teori, dapat disimpulkan bahwa laju reaksi kimia dipengaruhi oleh konsentrasi reaktan dan luas permukaan zat padat. Pada praktikum pertama, semakin besar jumlah soda kue yang digunakan (yang berarti konsentrasi reaktan lebih tinggi), semakin cepat dan banyak gas karbon dioksida (CO₂) yang dihasilkan, sehingga balon mengembang lebih besar. Hal ini sesuai dengan teori bahwa peningkatan konsentrasi pereaksi mempercepat laju reaksi. Sedangkan pada praktikum kedua, cangkang telur dalam bentuk serbuk bereaksi lebih cepat dibandingkan bentuk utuh atau pecahan, karena memiliki luas permukaan yang lebih besar sehingga kontak dengan cuka lebih banyak. Ini mendukung teori bahwa semakin besar luas permukaan suatu zat padat, maka semakin tinggi laju reaksinya. Oleh karena itu, kedua percobaan membuktikan bahwa konsentrasi dan luas permukaan merupakan faktor penting yang memengaruhi kecepatan reaksi kimia.
          </p>
        </Card>
    </section>
  );
}
