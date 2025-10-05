function map(
  arr: number[],
  callback: (n: number, i: number) => number
): number[] {
  const results: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(callback(arr[i], i));
  }
  return results;
}

// Done
