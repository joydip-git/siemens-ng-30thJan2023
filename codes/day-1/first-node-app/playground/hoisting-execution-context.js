var a = 200

function call() {
    console.log(x)
    var x = 100
    console.log(x)

    console.log(x + a)
    // console.log(this.y)
    // this.y = 20
    // console.log(this.y)

    //foo()
    function foo() {
        var z = 300
        console.log(x + a + z)
        console.log('foo')
    }
    //foo()

    //fn()
    var fn = function () {
        console.log('fn')
    }
    fn()
    return foo
}
var fooRef = call()
fooRef()
