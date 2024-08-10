var reconstructQueue = function (people) {
    let queue = [];
    people.sort((a, b) => {
        if (b[0] !== a[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    for (let i = 0; i < people.length; i++) {
        // 不删除，插入的位置，插入的元素
        queue.splice(people[i][1], 0, people[i]);
    }
    return queue;
};
