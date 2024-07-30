var a = 10;
function main() {
    console.log(a)
    var a = 2
    console.log(this.a)
    this.a = 3
}
main()
new main()