//1. dynamic programming
function isValidSubsequence(t, s) {
    
    if(t.length< s.length) return false;
    
    let lcs = longestCommonSubsequence(s,t);
    
    return (s.length === lcs);
    
    
};

var longestCommonSubsequence = function(text1, text2) {
    
    let m = text1.length;
    let n = text2.length;
    let t = new Array(text1.length+1);
    
    for(let j =0; j<t.length; j++){
        t[j] = new Array(text2.length+1);
    }
    
    for(let i=0; i<m+1; i++){
        for(let j=0; j<n+1; j++){
            if(i==0 || j==0)
                t[i][j]=0;
        }
       
    }
    
    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            if(text1[i-1]=== text2[j-1]){
                t[i][j] = 1+ t[i-1][j-1];
            }
            else{
                t[i][j] = Math.max(t[i][j-1], t[i-1][j]);
            }
        }
    }
    return t[m][n];
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;


//validate subsequence -O(n) time O(1) space
function isValidSubsequence(array, sequence) {
    
    let arrIdx =0;
	  let seqIdx=0;
	
	while(arrIdx<array.length && seqIdx < sequence.length){
		if(array[arrIdx] === sequence[seqIdx]){
			seqIdx++;
		}
		arrIdx++
	}
	return seqIdx === sequence.length;
	
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

//3- o(n) time  o(1) space
function isValidSubsequence(array, sequence) {
    let seqIdx=0;
	
	for(const value of array){
		if(seqIdx === sequence.length) break;
		if(sequence[seqIdx] === value) seqIdx++;
	}
	return seqIdx === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
