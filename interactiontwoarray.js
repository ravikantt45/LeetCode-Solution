function intersect(nums1, nums2) {
    const counts1 = {};
    const counts2 = {};
    for (const num of nums1) {
        if (counts1[num] === undefined) {
            counts1[num] = 1;
        } else {
            counts1[num]++;
        }
    }
    for (const num of nums2) {
        if (counts2[num] === undefined) {
            counts2[num] = 1;
        } else {
            counts2[num]++;
        }
    }
    const result = [];
    for (const num in counts1) {
        if (counts2[num] !== undefined) {
            const minCount = Math.min(counts1[num], counts2[num]);
            for (let i = 0; i < minCount; i++) {
                result.push(num);
            }
        }
    }
    
    return result;
}
