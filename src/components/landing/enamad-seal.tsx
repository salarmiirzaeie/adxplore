const ENAMAD_HREF =
  "https://trustseal.enamad.ir/?id=7610456&Code=TTAynE31ZROySOMylq55zc6b9LnHtleu";
const ENAMAD_SRC =
  "https://trustseal.enamad.ir/logo.aspx?id=7610456&Code=TTAynE31ZROySOMylq55zc6b9LnHtleu";

export function EnamadSeal() {
  return (
    <a referrerPolicy="origin" target="_blank" rel="noopener noreferrer" href={ENAMAD_HREF}>
      <img
        referrerPolicy="origin"
        src={ENAMAD_SRC}
        alt="نماد اعتماد الکترونیکی"
        width={125}
        height={140}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="h-[88px] w-auto"
        {...{ code: "TTAynE31ZROySOMylq55zc6b9LnHtleu" }}
      />
    </a>
  );
}
