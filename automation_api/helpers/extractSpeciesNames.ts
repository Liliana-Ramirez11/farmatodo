export function extractSpeciesNames(chainNode: any): string[] {
  const names: string[] = [];

  function traverse(node: any) {
    names.push(node.species.name);
    node.evolves_to.forEach(traverse);
  }

  traverse(chainNode);
  return names;
}