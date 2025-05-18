export default function Card({ title, children, img, centerizeTitle, wide }) {
  return (
    <article
      className={`flex rounded-none flex-col overflow-hidden border-4 shadow-xl border-black bg-neutral-50 text-black ${
        wide == 2 ? "w-4/5" : wide == 1 ? "w-2xl" : "w-sm"
      }`}
    >
      {img && (
        <div className="h-60 overflow-hidden">
          <img src={img} className="object-cover" alt={title} />
        </div>
      )}
      {(title || children) && (
        <div
          className={`flex flex-col gap-4 p-4 ${
            centerizeTitle && "text-center"
          }`}
        >
          <h3 className="text-balance text-xl lg:text-2xl font-bold text-black">
            {title}
          </h3>
          {children}
        </div>
      )}
    </article>
  );
}
