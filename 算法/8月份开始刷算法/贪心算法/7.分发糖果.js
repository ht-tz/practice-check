// 分别发糖果
var candy = function (ratings) {
    let candyVec = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyVec[i] = candyVec[i - 1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i++) {
        //所有右边大于左的， +1
        //  后向前，左边大于右边的，
        if (ratings[i] > ratings[i + 1]) {
            //i 位置上的最多能保证 candyVec[i] 比左边的多，也比右边的多
            candyVec[i] = Math.max(candyVec[i], candyVec[i + 1] + 1);
        }
    }
    let sum = 0;
    sum = candyVec.reduce((a, b) => a + b);
    return sum;
};
