function init(){
    console.log(123);
}
setTimeout(() => {
    init()
}, 100);