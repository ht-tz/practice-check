/**
 * 多层循，如何终止循环
 */

const arr = [
    {
        name: '章三',
        fruit: ['苹果', '香蕉']
    },
    {
        name: '李四',
        fruit: ['梨', '芒果']
    },
    {
        name: '王五',
        fruit: ['樱桃', '西瓜']
    },
    {
        name: '赵六',
        fruit: ["菠萝", "芒果"]
    }
]

{
    // let personName;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].fruit.length; j++) {

    //         const fruit = arr[i].fruit;
    //         if (fruit[j] === '芒果') {
    //             personName = arr[i].name;
    //             console.log(`第一个吃芒果的人${personName}`);
    //             throw Error('找到就结束')
    //         }
    //     }
    // }

    // console.log('结束人力', personName)
}

{
    
    let personName;
    loop1:
    for (let i = 0; i < arr.length; i++) {
        loop2:
        for (let j = 0; j < arr[i].fruit.length; j++) {
            const fruit = arr[i].fruit;
            if (fruit[j] === '芒果') {
                personName = arr[i].name;
                console.log(`第一个吃芒果的人${personName}`);
                break loop1
            }
        }
    }

    console.log('结束人力', personName) 
}