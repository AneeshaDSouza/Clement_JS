//0(n) time and o(1) space

function moveElementToEnd(array, toMove) {
  
	let i=0;
	let j = array.length-1;
	while(i<j){
		while(i<j && array[j] === toMove) j--;
		if(array[i] === toMove) ([array[i], array[j]]= [array[j], array[i]]);
	  i++;
	}
	return array
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

//o(n) time and o(n) space 

function moveElementToEnd(nums, toMove) {
    const arrZeros = [];
    const arrNotZeros = [];
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (item === toMove) {
            arrZeros.push(item);
        } else {
            arrNotZeros.push(item);
        }
    }
    nums.length = 0;
    nums.push(...arrNotZeros, ...arrZeros);

    return nums;
};

//O(n) time o(1) space
var moveZeroes = function(nums) {
    //two pointers
var pos = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[pos++] = nums[i];
    }
}
for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
}
}

//easy
function moveElementToEnd(nums, toMove) {
 
    //two pointers
var pos = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== toMove) {
        nums[pos++] = nums[i];
    }
}
for (i = pos; i < nums.length; i++) {
    nums[i] = toMove;
}
return nums
}
// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;