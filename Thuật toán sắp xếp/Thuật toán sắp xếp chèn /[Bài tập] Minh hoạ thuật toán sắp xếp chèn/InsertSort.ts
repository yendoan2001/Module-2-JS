export class InsertionSort {
    static numbers: number[] = [8, 3, 6, 1, 4, 10, 2, 50];
    public static insertSort(arr: number[]): void {

        let i, key, j;
        for (i = 1; i < arr.length; i++) {

            key = arr[i];
            j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;

            console.log("List after the  " + i + " sort: ");
            for (let j = 0; j <arr.length; j++) {
                console.log(arr[j] + "\t");
            }
            console.log();
        }
    }
}
