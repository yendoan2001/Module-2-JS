function classifyPhoneNumber(arr:string[]){
    let arrViettel: string[]=[];
    let arrMobifone: string[]=[];
    let arrVinaphone: string[]=[];
    let i: number=0;
    while(i<arr.length){
        if(arr[i].substring(0,3)=='016'){
            arrViettel.push(arr[i]);
        }if(arr[i].substring(0,4)=='0120'){
            arrMobifone.push(arr[i]);
        } if(arr[i].substring(0,4)=='0124'){
            arrVinaphone.push(arr[i]);
        }
        i++;
    }
    return `Viettel: ${arrViettel}; Vinaphone: ${arrVinaphone}; Mobilefone: ${arrMobifone}`;
}
let arr=['016547372367','012054372367','012447562967','016547649867']
console.log(classifyPhoneNumber(arr))
