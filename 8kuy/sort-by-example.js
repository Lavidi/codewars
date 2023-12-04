/* Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

Example:

Arr: [1,3,4,4,4,4,5]

Example Arr: [4,1,2,3,5]

Result: [4,4,4,4,1,3,5] */

function exampleSort(arr, exampleArr) {
    // Create a mapping of element indices in the example array
    const indexMap = {};
    exampleArr.forEach((num, index) => (indexMap[num] = index));
  
    // Custom sorting function based on the example array indices
    const customSort = (a, b) => indexMap[a] - indexMap[b];
  
    // Sort the array using the custom sorting function
    const result = arr.sort(customSort);
  
    return result;
  }
  
  // Example
  const arr = [1, 3, 4, 4, 4, 4, 5];
  const exampleArr = [4, 1, 2, 3, 5];
  const sortedArr = exampleSort(arr, exampleArr);
  console.log(sortedArr); // Output: [4, 4, 4, 4, 1, 3, 5]