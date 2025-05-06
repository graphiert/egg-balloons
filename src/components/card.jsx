export default function Card({ title, children, img }) {
  return (
    <article className="flex rounded-none w-sm flex-col overflow-hidden border-4 shadow-xl border-black bg-neutral-50 text-black">
      {img && (
        <div className="h-44 overflow-hidden">
          <img src={img} className="object-cover" alt={title} />
        </div>
      )}
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-balance text-xl lg:text-2xl font-bold text-black">
          {title}
        </h3>
        {children}
      </div>
    </article>
  );
}
