function quickSort(arr, low, high){
    if(low < high){
        partitionIndex = partition(arr, low, high)

        quickSort(arr, low, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, high)
    }
}

function partition(arr, low, high){
    let pivot = arr[high]
    let pivotIndex = low - 1

    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            pivotIndex++

            let temp = arr[j]
            arr[j] = arr[pivotIndex]
            arr[pivotIndex] = temp
        }
    }

    let temp = arr[high]
    arr[high] = arr[pivotIndex + 1]
    arr[pivotIndex + 1] = temp

    return pivotIndex + 1
}

let arr = [4,2,5,1,6,7,2,10,0]
quickSort(arr, 0, arr.length - 1)
