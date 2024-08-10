interface User {
    name: string; 
    age: number 
} 

 // 把user所有的属性都变成了可选的属性
type ParilalUser = {
    [key in keyof User]?: string
}

function updateUser(id: number, updateUser: ParilalUser): User { 
    return updateUser
}

// 只更更新年龄
updateUser(123, { age: 30})