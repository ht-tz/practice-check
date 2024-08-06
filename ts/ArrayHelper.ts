export class ArrayHelper<T> {

    constructor(private arr: T[]) {
    }

    take<T>(arr: T[], n: number) {
        if (n >= arr.length) return arr
        const newArr: T[] = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i])
        }
        return newArr
    }

    shuffle<T>(arr: T[]) {
        for (let i = 0; i < arr.length; i++) {
            let index = this.getRandomIndex(0, arr.length)
            let temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp
        }
        return arr
    }

    private getRandomIndex<T>(min: number, max: number) {
        let dec = max - min
        return Math.floor(Math.random() * dec + min)

    }
}