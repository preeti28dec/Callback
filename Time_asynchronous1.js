function somelate(time) {
    setTimeout(time, 1000);
    console.log('call first asynchronously');
}
somelate(function () {
    console.log('Done');
});
console.log('call second');