let sr = ["banana", "apple", "cherry"]
sr.sort();
console.log(sr)

let num = [50, 40, 100, 200, 10, 20, 55, 99];
num.sort()
console.log(num)

// [10, 100, 20, 200, 40,  50, 55,  99] natural sorting, laxical sorting

let nums = [50, 40, 100, 200, 10, 20, 55, 99];
nums.sort((a, b) => a - b);
console.log(nums)

// reverse sorting

let numbs = [50, 40, 100, 200, 10, 20, 55, 99];
numbs.sort((a, b) => b - a);
console.log(numbs)
