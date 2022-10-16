function classifyPhoneNumber(arr) {
    var arrViettel = [];
    var arrMobifone = [];
    var arrVinaphone = [];
    var i = 0;
    while (i < arr.length) {
        if (arr[i].substring(0, 9) === '016') {
            arrViettel.push(arr[i]);
        }
        if (arr[i].substring(0, 8) === '0120') {
            arrMobifone.push(arr[i]);
        }
        if (arr[i].substring(0, 8) === '0124') {
            arrVinaphone.push(arr[i]);
        }
        i++;
    }
    return [arrVinaphone, arrViettel, arrMobifone];
}
var arr = ['016547372367', '012054372367', '012447562967', '016547649867'];
console.log(classifyPhoneNumber(arr));
