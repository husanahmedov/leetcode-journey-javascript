function searchInserts(nums: number[], target: number): number {
    if (nums.includes(target)) return nums.indexOf(target)
    else {
        nums.push(target)
        nums.sort((x, y) => x - y)
        return nums.indexOf(target)
    }
    
}

console.log(searchInserts([1001, 87], 5));