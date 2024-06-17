let str = [
  {
    id: 2,
    parent_id: 0,
    name: '上海市',
    children: [
      {id: 21, parent_id: 2, name: '静安区'},
      {id: 22, parent_id: 2, name: '黄浦区'},
      {
        id: 24,
        parent_id: 2,
        name: '徐汇区',
        children: [
          {id: 241, parent_id: 24, name: '田林街道'},
          {
            id: 242,
            parent_id: 24,
            name: '漕河泾街道',
            children: [
              {id: 2421, parent_id: 242, name: '上海科技绿洲'},
              {id: 2422, parent_id: 242, name: '漕河泾开发区'},
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parent_id: 0,
    name: '北京市',
    children: [
      {id: 12, parent_id: 1, name: '朝阳区'},
      {id: 13, parent_id: 1, name: '昌平区'},
      {id: 11, parent_id: 1, name: '顺义区'},
    ],
  },
  {
    id: 3,
    parent_id: 0,
    name: '广东省',
    children: [
      {id: 31, parent_id: 3, name: '广州市'},
      {id: 32, parent_id: 3, name: '深圳市'},
      {id: 33, parent_id: 3, name: '东莞市'},
    ],
  },
]

// function treeToArray(list) {
//     let res = []
//     list.forEach(el => {
//         res.push(el)
//         if (el.children) {
//             res = res.concat(treeToArray(el.children))
//             delete el.children
//         }
//     })
//     return res
// }
//


function treeToArray(list) {
  let res = []
  let stack = []
  stack = list
  while (stack.length) {
    let cur = stack.shift()
    res.push(cur)
    if (cur.children && cur.children.length > 0) {
      stack.push(...cur.children)
    }
    delete cur.children
  }
  return res
}

console.log(treeToArray(str))
