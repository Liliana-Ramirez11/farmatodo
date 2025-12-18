export function alphabeticalOrder<T extends { name: string }>(array: T[]): T[] {
  const copy = [...array];
  const ordered: T[] = [];

  while (copy.length > 0) {
    let smallest = copy[0];
    let smallestIndex = 0;

    for (let i = 1; i < copy.length; i++) {
      if (copy[i].name < smallest.name) {
        smallest = copy[i];
        smallestIndex = i;
      }
    }

    copy.splice(smallestIndex, 1);
    ordered.push(smallest);
  }

  return ordered;
}