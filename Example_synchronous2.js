function doSomething(then) {
    console.log('call first');
    then();
}
// call first, then execute callback to log 'done'
doSomething(function () {
    console.log('Done');
});
console.log('call second');