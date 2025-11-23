export default function Card({title, subtitle, children, className=""}){
  return (
    <div className={"bg-white rounded-lg p-5 shadow-sm border " + className}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      <div className="mt-3">{children}</div>
    </div>
  );
}
