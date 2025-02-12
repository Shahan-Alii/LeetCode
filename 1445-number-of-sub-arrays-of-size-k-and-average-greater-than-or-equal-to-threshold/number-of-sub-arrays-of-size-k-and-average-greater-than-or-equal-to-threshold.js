/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {

if(k>arr.length){return 0;}

    let res = 0;
    let currentSum = 0;
    let currentAvg = 0.0;


    for (let i = 0; i < k; i++) {

        currentSum += arr[i];
    }

    currentAvg = currentSum / k;

    if (currentAvg >= threshold) { res++ };


    for (let i = 0; i < arr.length; i++) {


        currentSum -= arr[i];
        currentSum += arr[i + k];

        currentAvg = currentSum / k;

        if (currentAvg >= threshold) { res++ };

    }

    return res;

};