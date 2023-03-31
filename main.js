// Bubble sort Implementation using Javascript



// This is our unsorted array
var arr = [document.getElementById(one).TEXT_NODE, document.getElementById(two).TEXT_NODE,
    document.getElementById(three).TEXT_NODE, document.getElementById(four).TEXT_NODE, document.getElementById(five).TEXT_NODE,
    document.getElementById(six).TEXT_NODE];




// Creating the bblSort function
function bblSort(arr) {

	for (var i = 0; i < arr.length; i++) {

		// Last i elements are already in place
		for (var j = 0; j < (arr.length - i - 1); j++) {

			// Checking if the item at present iteration
			// is greater than the next iteration
			if (arr[j] > arr[j + 1]) {

				// If the condition is true
				// then swap them
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}

	// Print the sorted array
	console.log(arr);
}


// Now pass this array to the bblSort() function
let btn=document.getElementById(btn1);
btn.addEventListener("click",bblSort(arr));
   
