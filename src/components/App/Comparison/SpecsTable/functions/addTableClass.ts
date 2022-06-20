export function addTableClass(number: number) {
  switch (number) {
    case 4:
      return "show-four";
    case 5:
      return "show-five";
    case 6:
      return "show-six";
    default:
      return "";
  }
}
