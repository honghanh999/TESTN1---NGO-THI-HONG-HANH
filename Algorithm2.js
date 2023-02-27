function addToTarget(nums, target) {
    let arr = []
    const result = []
    for (let i = 1; i <= target; i++) {
        arr.push(nums[0])
    }
    result.push(arr)
    let changeValueArray = (array) => {
        let newArray = [...array]
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] === nums[0] && newArray[j+1] === nums[0] && j < newArray.length -1 ) {
                newArray.splice(j, 2, nums[1])
                result.push(newArray)
                changeValueArray([...newArray])
                newArray = [...array]
            }
        }
    }
    changeValueArray([...arr])
    return result.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse)
}

console.log(addToTarget([1,2], 12))
