export const getArrLastItem = (arr) => {
    const length = arr.length;
    return getArrItemByIndex(arr, length-1);
}

const getArrItemByIndex = (arr, index) => {
    return arr[index];
}