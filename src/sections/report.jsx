import Card from "../components/card";

export default function Intro() {
  return (
    <section id="page5" className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4">
      <div className="md:pl-24 flex flex-row w-full">
        <Card title="Pembahasan praktikum" wide={2}>
          <p className="text-pretty text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus eos deleniti totam hic aperiam amet, aspernatur laboriosam ex repudiandae quod, praesentium saepe a molestias tempora. Eligendi corporis quas, debitis animi, mollitia iste odit eveniet sapiente soluta aliquam magni provident inventore sequi in itaque, aspernatur voluptatum suscipit veritatis assumenda ducimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus eos deleniti totam hic aperiam amet, aspernatur laboriosam ex repudiandae quod, praesentium saepe a molestias tempora. Eligendi corporis quas, debitis animi, mollitia iste odit eveniet sapiente soluta aliquam magni provident inventore sequi in itaque, aspernatur voluptatum suscipit veritatis assumenda ducimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus eos deleniti totam hic aperiam amet, aspernatur laboriosam ex repudiandae quod, praesentium saepe a molestias tempora. Eligendi corporis quas, debitis animi, mollitia iste odit eveniet sapiente soluta aliquam magni provident inventore sequi in itaque, aspernatur voluptatum suscipit veritatis assumenda ducimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus eos deleniti totam hic aperiam amet, aspernatur laboriosam ex repudiandae quod, praesentium saepe a molestias tempora. Eligendi corporis quas, debitis animi, mollitia iste odit eveniet sapiente soluta aliquam magni provident inventore sequi in itaque, aspernatur voluptatum suscipit veritatis assumenda ducimus.
          </p>
        </Card>
      </div>
      <div className="md:pr-24 flex flex-row-reverse w-full">
        <Card title="Apa kesimpulannya?" wide={2}>
          <p className="text-pretty text-sm">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nam voluptatem inventore asperiores optio ullam maxime quisquam et! Modi ipsa sed tempora perferendis, provident tenetur necessitatibus, nostrum inventore consequatur mollitia, sequi officiis! Perferendis, nihil quam natus nesciunt aperiam dolores quaerat sunt mollitia debitis ab quo deleniti nobis facere repudiandae minus?
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nam voluptatem inventore asperiores optio ullam maxime quisquam et! Modi ipsa sed tempora perferendis, provident tenetur necessitatibus, nostrum inventore consequatur mollitia, sequi officiis! Perferendis, nihil quam natus nesciunt aperiam dolores quaerat sunt mollitia debitis ab quo deleniti nobis facere repudiandae minus?
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nam voluptatem inventore asperiores optio ullam maxime quisquam et! Modi ipsa sed tempora perferendis, provident tenetur necessitatibus, nostrum inventore consequatur mollitia, sequi officiis! Perferendis, nihil quam natus nesciunt aperiam dolores quaerat sunt mollitia debitis ab quo deleniti nobis facere repudiandae minus?
          </p>
        </Card>
      </div>
    </section>
  );
}
