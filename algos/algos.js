// const letters = ["a", "b", "c"];

// const lettersDuplicate = letters.concat(letters);
// console.log(lettersDuplicate);

// const nums = [1,2,1]

// var getConcatenation = function(nums) {
//     const ans = nums.concat(nums);
//     return ans
// };

// getConcatenation(nums)
// console.log(getConcatenation(nums))

//contains duplicate algo

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */

// nums = [1, 0, 2, 3]

// function hasDuplicate(nums) {
//     let k = 0
//     for (let i = 0; i < nums.length; i++)
//         for (let j = i + 1; j < nums.length; j++)
//             if (nums[i] == nums[j])
//             k++
//         if (k > 0) {
//             return true
//          } else {
//             return false
//          }
//         }
        


// hasDuplicate(nums)
// // console.log(hasDuplicate(nums))

s = "[]"

function testFunction(s) {
        let newArr = []
        for (let i = 0; i < s.length; i++) {
            console.log(s[i])
            if (s[i] == "[") {
                newArr.push(s[i])
            } else if (s[i] == "(") {
                newArr.push(s[i]) 
             } else if (s[i] == "{") {
                newArr.push(s[i]) 
             } else if (["]", ")", "}"].includes(s[i]) && newArr.length == 0) {
                return false

             } if (newArr.length > 0 && s[i] =="]" && newArr[newArr.length - 1] !== "[") {
                return false 
             }
                newArr.pop()
             if (newArr.length > 0 && s[i] ==")" && newArr[newArr.length - 1] !== "(") {
                return false
             } newArr.pop()
            if (newArr.length > 0 && s[i] =="}" && newArr[newArr.length - 1] !== "{") {
                return false 
            } 
                    newArr.pop()
        }
        
        if (newArr.length == 0)
            return true
    }
    

testFunction(s)
console.log(testFunction(s))

// s = "[]"

// function testFunction(s) {
//         let newArr = []
//         for (let i = 0; i < s.length; i++) {
//             console.log(s[i])
//             if (s[i] == "[") {
//                 newArr.push(s[i])
//             } else if (s[i] == "(") {
//                 newArr.push(s[i]) 
//              } else if (s[i] == "{") {
//                 newArr.push(s[i]) 
//              } else if (["]", ")", "}"].includes(s[i]) && newArr.length == 0) {
//                 return false

//              } if (newArr.length > 0 && s[i] =="]" && newArr[newArr.length - 1] !== "[") {
//                 return false 
//              } else {
//                 newArr.pop()
//              } if (newArr.length > 0 && s[i] ==")" && newArr[newArr.length - 1] !== "(") {
//                 return false
//              } else {
//                 newArr.pop()
//             } if (newArr.length > 0 && s[i] =="}" && newArr[newArr.length - 1] !=="{")  {
//                 return false 
//             } else {
//                     newArr.pop()

//         }
//         if (newArr.length == 0)
//             return true
//     }

// testFunction(s)
// console.log(testFunction(s))

function testFunction(s) {
    let newArr = []
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if (s[i] == "[") {
            newArr.push(s[i])
        } else if (s[i] == "(") {
            newArr.push(s[i]) 
        } else if (s[i] == "{") {
            newArr.push(s[i]) 
        } else if (["]", ")", "}"].includes(s[i]) && newArr.length == 0) {
            return false  // Mismatched closing bracket with no opening bracket
        }

        // Check for mismatches and immediately return false if a mismatch is found
        if (newArr.length > 0 && s[i] == "]" && newArr[newArr.length - 1] !== "[") {
            return false  // Mismatch for closing bracket
        }
        if (newArr.length > 0 && s[i] == ")" && newArr[newArr.length - 1] !== "(") {
            return false  // Mismatch for closing parenthesis
        }
        if (newArr.length > 0 && s[i] == "}" && newArr[newArr.length - 1] !== "{") {
            return false  // Mismatch for closing brace
        }

        // Only pop when we successfully match a pair
        if (s[i] == "]" || s[i] == ")" || s[i] == "}") {
            newArr.pop()
        }
    }

    // After processing all characters, the array should be empty
    return newArr.length == 0
}

console.log(testFunction("[]"))  // Should return true
console.log(testFunction("[(])"))  // Should return false
console.log(testFunction("[({})]"))  // Should return true

