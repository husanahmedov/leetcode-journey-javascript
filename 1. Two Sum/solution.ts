function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
        return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([3, 4, 5], 9));
/* 
Sonlardan iborat array mavjud.
Target esa chiqishi kerak bo'lgan natija
return holatda indexlarni oladi va bu array holatda bo'ladi
*/
