export function range(count: number) {
  if (count < 0) throw new Error("Parametr {count} has to be more than 0");

  return new Array(count).fill(0).map((v, k) => k);
}
