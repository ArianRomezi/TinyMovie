export function Reducer(number) {
  const newNumber = Math.round(number * 10) / 10;
  return newNumber;
  console.log(newNumber);
}
