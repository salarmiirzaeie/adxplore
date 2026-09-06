const ENAMAD_HTML =
  "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7610456&Code=TTAynE31ZROySOMylq55zc6b9LnHtleu'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7610456&Code=TTAynE31ZROySOMylq55zc6b9LnHtleu' alt='' style='cursor:pointer' code='TTAynE31ZROySOMylq55zc6b9LnHtleu'></a>";

export function EnamadSeal() {
  return <span dangerouslySetInnerHTML={{ __html: ENAMAD_HTML }} />;
}
