export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "best-time-to-buy-and-sell-stock": {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • Dynamic Programming",
  description: {
    text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
    notes: [
      "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      "Return the maximum profit you can achieve from this transaction.",
      "If you cannot achieve any profit, return 0."
    ],
  },
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.",
    },
    {
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation: "In this case, no transactions are done and the maximum profit is 0.",
    },
  ],
  constraints: [
    "1 ≤ prices.length ≤ 10⁵",
    "0 ≤ prices[i] ≤ 10⁴",
  ],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
    python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
    java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
  },
  expectedOutput: {
    javascript: "5\n0",
    python: "5\n0",
    java: "5\n0",
  },
  },

  "contains-duplicate": {
  id: "contains-duplicate",
  title: "Contains Duplicate",
  difficulty: "Easy",
  category: "Array • Hash Table",
  description: {
    text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    notes: [],
  },
  examples: [
    {
      input: "nums = [1,2,3,1]",
      output: "true",
    },
    {
      input: "nums = [1,2,3,4]",
      output: "false",
    },
    {
      input: "nums = [1,1,1,3,3,4,3,2,4,2]",
      output: "true",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁵",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
  ],
  starterCode: {
    javascript: `function containsDuplicate(nums) {
  // Write your solution here

}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
    python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
    java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
  },
  expectedOutput: {
    javascript: "true\nfalse\ntrue",
    python: "True\nFalse\nTrue",
    java: "true\nfalse\ntrue",
  },
},

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
    ],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
    // Write your solution here

  }

  // Test cases
  console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
  console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
      # Write your solution here
      pass

  # Test cases
  print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
  print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]`,
      java: `import java.util.Arrays;

  class Solution {
      public static int[] productExceptSelf(int[] nums) {
          // Write your solution here

          return new int[0];
      }

      public static void main(String[] args) {
          System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
          System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
      }
  }`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      notes: [
        "You must do this in-place without making a copy of the array.",
        "Minimize the total number of operations.",
      ],
    },
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
      {
        input: "nums = [4,2,4,0,0,3,0,5,1,0]",
        output: "[4,2,4,3,5,1,0,0,0,0]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-2³¹ ≤ nums[i] ≤ 2³¹ - 1",
    ],
    starterCode: {
      javascript: `function moveZeroes(nums) {
    // Write your solution here

  }

  // Test cases
  let test1 = [0,1,0,3,12];
  moveZeroes(test1);
  console.log(test1); // Expected: [1,3,12,0,0]

  let test2 = [0];
  moveZeroes(test2);
  console.log(test2); // Expected: [0]

  let test3 = [4,2,4,0,0,3,0,5,1,0];
  moveZeroes(test3);
  console.log(test3); // Expected: [4,2,4,3,5,1,0,0,0,0]`,
      python: `def moveZeroes(nums):
      # Write your solution here
      pass

  # Test cases
  test1 = [0,1,0,3,12]
  moveZeroes(test1)
  print(test1)  # Expected: [1,3,12,0,0]

  test2 = [0]
  moveZeroes(test2)
  print(test2)  # Expected: [0]

  test3 = [4,2,4,0,0,3,0,5,1,0]
  moveZeroes(test3)
  print(test3)  # Expected: [4,2,4,3,5,1,0,0,0,0]`,
      java: `import java.util.Arrays;

  class Solution {
      public static void moveZeroes(int[] nums) {
          // Write your solution here

      }

      public static void main(String[] args) {
          int[] test1 = {0,1,0,3,12};
          moveZeroes(test1);
          System.out.println(Arrays.toString(test1)); // Expected: [1, 3, 12, 0, 0]

          int[] test2 = {0};
          moveZeroes(test2);
          System.out.println(Arrays.toString(test2)); // Expected: [0]

          int[] test3 = {4,2,4,0,0,3,0,5,1,0};
          moveZeroes(test3);
          System.out.println(Arrays.toString(test3)); // Expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]
      }
  }`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]\n[0]\n[4,2,4,3,5,1,0,0,0,0]",
      python: "[1, 3, 12, 0, 0]\n[0]\n[4, 2, 4, 3, 5, 1, 0, 0, 0, 0]",
      java: "[1, 3, 12, 0, 0]\n[0]\n[4, 2, 4, 3, 5, 1, 0, 0, 0, 0]",
    },
  },

  "merge-sorted-array": {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
    notes: [
      "Merge nums2 into nums1 as one sorted array.",
      "The final sorted array should not be returned by the function, but instead be stored inside the array nums1.",
      "nums1 has a length of m + n, where the last n elements are set to 0 and should be ignored.",
    ],
  },
  examples: [
    {
      input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
      output: "[1,2,2,3,5,6]",
    },
    {
      input: "nums1 = [1], m = 1, nums2 = [], n = 0",
      output: "[1]",
    },
    {
      input: "nums1 = [0], m = 0, nums2 = [1], n = 1",
      output: "[1]",
    },
  ],
  constraints: [
    "nums1.length == m + n",
    "nums2.length == n",
    "0 ≤ m, n ≤ 200",
    "-10⁹ ≤ nums1[i], nums2[i] ≤ 10⁹",
  ],
  starterCode: {
    javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here

}

// Test cases
let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // Expected: [1,2,2,3,5,6]

let nums2 = [1];
merge(nums2, 1, [], 0);
console.log(nums2); // Expected: [1]

let nums3 = [0];
merge(nums3, 0, [1], 1);
console.log(nums3); // Expected: [1]`,
    python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

# Test cases
nums1 = [1,2,3,0,0,0]
merge(nums1, 3, [2,5,6], 3)
print(nums1)  # Expected: [1,2,2,3,5,6]

nums2 = [1]
merge(nums2, 1, [], 0)
print(nums2)  # Expected: [1]

nums3 = [0]
merge(nums3, 0, [1], 1)
print(nums3)  # Expected: [1]`,
    java: `import java.util.Arrays;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here

    }

    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        merge(nums1, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(nums1)); // Expected: [1, 2, 2, 3, 5, 6]

        int[] nums2 = {1};
        merge(nums2, 1, new int[]{}, 0);
        System.out.println(Arrays.toString(nums2)); // Expected: [1]

        int[] nums3 = {0};
        merge(nums3, 0, new int[]{1}, 1);
        System.out.println(Arrays.toString(nums3)); // Expected: [1]
    }
}`,
  },
  expectedOutput: {
    javascript: "[1,2,2,3,5,6]\n[1]\n[1]",
    python: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
    java: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
  },
  },

  "majority-element": {
  id: "majority-element",
  title: "Majority Element",
  difficulty: "Easy",
  category: "Array • Hash Table",
  description: {
    text: "Given an array nums of size n, return the majority element.",
    notes: [
      "The majority element is the element that appears more than ⌊n / 2⌋ times.",
      "You may assume that the majority element always exists in the array.",
    ],
  },
  examples: [
    {
      input: "nums = [3,2,3]",
      output: "3",
    },
    {
      input: "nums = [2,2,1,1,1,2,2]",
      output: "2",
    },
    {
      input: "nums = [6,5,5]",
      output: "5",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 5 × 10⁴",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
  ],
  starterCode: {
    javascript: `function majorityElement(nums) {
  // Write your solution here

}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2
console.log(majorityElement([6,5,5])); // Expected: 5`,
    python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))  # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2
print(majorityElement([6,5,5]))  # Expected: 5`,
    java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2})); // Expected: 2
        System.out.println(majorityElement(new int[]{6,5,5})); // Expected: 5
    }
}`,
  },
  expectedOutput: {
    javascript: "3\n2\n5",
    python: "3\n2\n5",
    java: "3\n2\n5",
  },
  },

  "missing-number": {
  id: "missing-number",
  title: "Missing Number",
  difficulty: "Easy",
  category: "Array • Bit Manipulation",
  description: {
    text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    notes: [
      "Each number appears exactly once except for the missing number.",
      "Your solution should run in O(n) time using O(1) extra space if possible.",
    ],
  },
  examples: [
    {
      input: "nums = [3,0,1]",
      output: "2",
    },
    {
      input: "nums = [0,1]",
      output: "2",
    },
    {
      input: "nums = [9,6,4,2,3,5,7,0,1]",
      output: "8",
    },
  ],
  constraints: [
    "n == nums.length",
    "1 ≤ n ≤ 10⁴",
    "0 ≤ nums[i] ≤ n",
    "All the numbers of nums are unique.",
  ],
  starterCode: {
    javascript: `function missingNumber(nums) {
  // Write your solution here

}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
    python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([0,1]))  # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # Expected: 8`,
    java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1})); // Expected: 8
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n2\n8",
    python: "2\n2\n8",
    java: "2\n2\n8",
  },
  },

  "find-pivot-index": {
  id: "find-pivot-index",
  title: "Find Pivot Index",
  difficulty: "Easy",
  category: "Array • Prefix Sum",
  description: {
    text: "Given an integer array nums, calculate the pivot index of this array.",
    notes: [
      "The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.",
      "If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.",
      "If the index is on the right edge of the array, then the right sum is 0 because there are no elements to the right.",
      "Return the leftmost pivot index. If no such index exists, return -1.",
    ],
  },
  examples: [
    {
      input: "nums = [1,7,3,6,5,6]",
      output: "3",
      explanation: "The pivot index is 3. Left sum = 1 + 7 + 3 = 11, Right sum = 5 + 6 = 11.",
    },
    {
      input: "nums = [1,2,3]",
      output: "-1",
      explanation: "There is no index that satisfies the conditions.",
    },
    {
      input: "nums = [2,1,-1]",
      output: "0",
      explanation: "The left sum is 0 and the right sum is 1 + (-1) = 0.",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁴",
    "-1000 ≤ nums[i] ≤ 1000",
  ],
  starterCode: {
    javascript: `function pivotIndex(nums) {
  // Write your solution here

}

// Test cases
console.log(pivotIndex([1,7,3,6,5,6])); // Expected: 3
console.log(pivotIndex([1,2,3])); // Expected: -1
console.log(pivotIndex([2,1,-1])); // Expected: 0`,
    python: `def pivotIndex(nums):
    # Write your solution here
    pass

# Test cases
print(pivotIndex([1,7,3,6,5,6]))  # Expected: 3
print(pivotIndex([1,2,3]))  # Expected: -1
print(pivotIndex([2,1,-1]))  # Expected: 0`,
    java: `class Solution {
    public static int pivotIndex(int[] nums) {
        // Write your solution here

        return -1;
    }

    public static void main(String[] args) {
        System.out.println(pivotIndex(new int[]{1,7,3,6,5,6})); // Expected: 3
        System.out.println(pivotIndex(new int[]{1,2,3})); // Expected: -1
        System.out.println(pivotIndex(new int[]{2,1,-1})); // Expected: 0
    }
}`,
  },
  expectedOutput: {
    javascript: "3\n-1\n0",
    python: "3\n-1\n0",
    java: "3\n-1\n0",
  },
  },

  "remove-duplicates-from-sorted-array": {
  id: "remove-duplicates-from-sorted-array",
  title: "Remove Duplicates from Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
    notes: [
      "The relative order of the elements should be kept the same.",
      "Return the number of unique elements k after placing the first k elements in nums.",
      "The remaining elements of nums beyond the first k positions are not important.",
    ],
  },
  examples: [
    {
      input: "nums = [1,1,2]",
      output: "2, nums = [1,2,_]",
      explanation: "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.",
    },
    {
      input: "nums = [0,0,1,1,1,2,2,3,3,4]",
      output: "5, nums = [0,1,2,3,4,_,_,_,_,_]",
      explanation: "Your function should return k = 5, with the first five elements of nums containing the unique values.",
    },
    {
      input: "nums = [1]",
      output: "1, nums = [1]",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 3 × 10⁴",
    "-100 ≤ nums[i] ≤ 100",
    "nums is sorted in non-decreasing order.",
  ],
  starterCode: {
    javascript: `function removeDuplicates(nums) {
  // Write your solution here

  return 0;
}

// Test cases
let nums1 = [1,1,2];
console.log(removeDuplicates(nums1)); // Expected: 2
console.log(nums1.slice(0,2)); // Expected: [1,2]

let nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2)); // Expected: 5
console.log(nums2.slice(0,5)); // Expected: [0,1,2,3,4]

let nums3 = [1];
console.log(removeDuplicates(nums3)); // Expected: 1
console.log(nums3.slice(0,1)); // Expected: [1]`,
    python: `def removeDuplicates(nums):
    # Write your solution here
    return 0

# Test cases
nums1 = [1,1,2]
print(removeDuplicates(nums1))  # Expected: 2
print(nums1[:2])  # Expected: [1,2]

nums2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(nums2))  # Expected: 5
print(nums2[:5])  # Expected: [0,1,2,3,4]

nums3 = [1]
print(removeDuplicates(nums3))  # Expected: 1
print(nums3[:1])  # Expected: [1]`,
    java: `import java.util.Arrays;

class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        int[] nums1 = {1,1,2};
        int k1 = removeDuplicates(nums1);
        System.out.println(k1); // Expected: 2
        System.out.println(Arrays.toString(Arrays.copyOf(nums1, k1))); // Expected: [1, 2]

        int[] nums2 = {0,0,1,1,1,2,2,3,3,4};
        int k2 = removeDuplicates(nums2);
        System.out.println(k2); // Expected: 5
        System.out.println(Arrays.toString(Arrays.copyOf(nums2, k2))); // Expected: [0, 1, 2, 3, 4]

        int[] nums3 = {1};
        int k3 = removeDuplicates(nums3);
        System.out.println(k3); // Expected: 1
        System.out.println(Arrays.toString(Arrays.copyOf(nums3, k3))); // Expected: [1]
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n[1,2]\n5\n[0,1,2,3,4]\n1\n[1]",
    python: "2\n[1, 2]\n5\n[0, 1, 2, 3, 4]\n1\n[1]",
    java: "2\n[1, 2]\n5\n[0, 1, 2, 3, 4]\n1\n[1]",
  },
  },

  "remove-element": {
  id: "remove-element",
  title: "Remove Element",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.",
    notes: [
      "The order of the elements may be changed.",
      "Return the number of elements in nums which are not equal to val.",
      "The first k elements of nums should contain the elements which are not equal to val.",
    ],
  },
  examples: [
    {
      input: "nums = [3,2,2,3], val = 3",
      output: "2, nums = [2,2,_,_]",
      explanation: "Your function should return k = 2, with the first two elements containing 2.",
    },
    {
      input: "nums = [0,1,2,2,3,0,4,2], val = 2",
      output: "5, nums = [0,1,4,0,3,_,_,_]",
      explanation: "The first five elements can be returned in any order.",
    },
    {
      input: "nums = [1], val = 1",
      output: "0, nums = [_]",
    },
  ],
  constraints: [
    "0 ≤ nums.length ≤ 100",
    "0 ≤ nums[i] ≤ 50",
    "0 ≤ val ≤ 100",
  ],
  starterCode: {
    javascript: `function removeElement(nums, val) {
  // Write your solution here

  return 0;
}

// Test cases
let nums1 = [3,2,2,3];
console.log(removeElement(nums1, 3)); // Expected: 2
console.log(nums1.slice(0,2)); // Expected: [2,2]

let nums2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums2, 2)); // Expected: 5
console.log(nums2.slice(0,5)); // Expected: [0,1,4,0,3]

let nums3 = [1];
console.log(removeElement(nums3, 1)); // Expected: 0`,
    python: `def removeElement(nums, val):
    # Write your solution here
    return 0

# Test cases
nums1 = [3,2,2,3]
print(removeElement(nums1, 3))  # Expected: 2
print(nums1[:2])  # Expected: [2,2]

nums2 = [0,1,2,2,3,0,4,2]
print(removeElement(nums2, 2))  # Expected: 5
print(nums2[:5])  # Expected: [0,1,4,0,3]

nums3 = [1]
print(removeElement(nums3, 1))  # Expected: 0`,
    java: `import java.util.Arrays;

class Solution {
    public static int removeElement(int[] nums, int val) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        int[] nums1 = {3,2,2,3};
        int k1 = removeElement(nums1, 3);
        System.out.println(k1); // Expected: 2
        System.out.println(Arrays.toString(Arrays.copyOf(nums1, k1))); // Expected: [2, 2]

        int[] nums2 = {0,1,2,2,3,0,4,2};
        int k2 = removeElement(nums2, 2);
        System.out.println(k2); // Expected: 5
        System.out.println(Arrays.toString(Arrays.copyOf(nums2, k2))); // Expected: [0, 1, 4, 0, 3]

        int[] nums3 = {1};
        int k3 = removeElement(nums3, 1);
        System.out.println(k3); // Expected: 0
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n[2,2]\n5\n[0,1,4,0,3]\n0",
    python: "2\n[2, 2]\n5\n[0, 1, 4, 0, 3]\n0",
    java: "2\n[2, 2]\n5\n[0, 1, 4, 0, 3]\n0",
  },
  },

  "longest-common-prefix": {
  id: "longest-common-prefix",
  title: "Longest Common Prefix",
  difficulty: "Easy",
  category: "String",
  description: {
    text: "Write a function to find the longest common prefix string amongst an array of strings.",
    notes: [
      "If there is no common prefix, return an empty string \"\".",
    ],
  },
  examples: [
    {
      input: 'strs = ["flower","flow","flight"]',
      output: '"fl"',
      explanation: 'The longest common prefix among the strings is "fl".',
    },
    {
      input: 'strs = ["dog","racecar","car"]',
      output: '""',
      explanation: "There is no common prefix among the input strings.",
    },
    {
      input: 'strs = ["interspecies","interstellar","interstate"]',
      output: '"inters"',
    },
  ],
  constraints: [
    "1 ≤ strs.length ≤ 200",
    "0 ≤ strs[i].length ≤ 200",
    "strs[i] consists of only lowercase English letters.",
  ],
  starterCode: {
    javascript: `function longestCommonPrefix(strs) {
  // Write your solution here

}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Expected: ""
console.log(longestCommonPrefix(["interspecies","interstellar","interstate"])); // Expected: "inters"`,
    python: `def longestCommonPrefix(strs):
    # Write your solution here
    pass

# Test cases
print(longestCommonPrefix(["flower","flow","flight"]))  # Expected: fl
print(longestCommonPrefix(["dog","racecar","car"]))  # Expected:
print(longestCommonPrefix(["interspecies","interstellar","interstate"]))  # Expected: inters`,
    java: `class Solution {
    public static String longestCommonPrefix(String[] strs) {
        // Write your solution here

        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[]{"flower","flow","flight"})); // Expected: fl
        System.out.println(longestCommonPrefix(new String[]{"dog","racecar","car"})); // Expected:
        System.out.println(longestCommonPrefix(new String[]{"interspecies","interstellar","interstate"})); // Expected: inters
    }
}`,
  },
  expectedOutput: {
    javascript: "fl\n\ninters",
    python: "fl\n\ninters",
    java: "fl\n\ninters",
  },
  },

  "valid-anagram": {
  id: "valid-anagram",
  title: "Valid Anagram",
  difficulty: "Easy",
  category: "String • Hash Table",
  description: {
    text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    notes: [
      "An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
    ],
  },
  examples: [
    {
      input: 's = "anagram", t = "nagaram"',
      output: "true",
      explanation: '"nagaram" is an anagram of "anagram".',
    },
    {
      input: 's = "rat", t = "car"',
      output: "false",
      explanation: '"car" cannot be formed by rearranging the letters of "rat".',
    },
    {
      input: 's = "listen", t = "silent"',
      output: "true",
    },
  ],
  constraints: [
    "1 ≤ s.length, t.length ≤ 5 × 10⁴",
    "s and t consist of lowercase English letters.",
  ],
  starterCode: {
    javascript: `function isAnagram(s, t) {
  // Write your solution here

}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false
console.log(isAnagram("listen", "silent")); // Expected: true`,
    python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False
print(isAnagram("listen", "silent"))  # Expected: True`,
    java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
        System.out.println(isAnagram("listen", "silent")); // Expected: true
    }
}`,
  },
  expectedOutput: {
    javascript: "true\nfalse\ntrue",
    python: "True\nFalse\nTrue",
    java: "true\nfalse\ntrue",
  },
  },

  "isomorphic-strings": {
  id: "isomorphic-strings",
  title: "Isomorphic Strings",
  difficulty: "Easy",
  category: "Hash Table • String",
  description: {
    text: "Given two strings s and t, determine if they are isomorphic.",
    notes: [
      "Two strings are isomorphic if the characters in s can be replaced to get t.",
      "All occurrences of a character must be replaced with another character while preserving the order of characters.",
      "No two characters may map to the same character, but a character may map to itself.",
    ],
  },
  examples: [
    {
      input: 's = "egg", t = "add"',
      output: "true",
      explanation: 'The characters "e" and "g" can be mapped to "a" and "d" respectively.',
    },
    {
      input: 's = "foo", t = "bar"',
      output: "false",
      explanation: 'The character "o" cannot map to both "a" and "r".',
    },
    {
      input: 's = "paper", t = "title"',
      output: "true",
      explanation: 'Each character in "paper" maps uniquely to the corresponding character in "title".',
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 5 × 10⁴",
    "t.length == s.length",
    "s and t consist of any valid ASCII character.",
  ],
  starterCode: {
    javascript: `function isIsomorphic(s, t) {
  // Write your solution here

}

// Test cases
console.log(isIsomorphic("egg", "add")); // Expected: true
console.log(isIsomorphic("foo", "bar")); // Expected: false
console.log(isIsomorphic("paper", "title")); // Expected: true`,
    python: `def isIsomorphic(s, t):
    # Write your solution here
    pass

# Test cases
print(isIsomorphic("egg", "add"))  # Expected: True
print(isIsomorphic("foo", "bar"))  # Expected: False
print(isIsomorphic("paper", "title"))  # Expected: True`,
    java: `class Solution {
    public static boolean isIsomorphic(String s, String t) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isIsomorphic("egg", "add")); // Expected: true
        System.out.println(isIsomorphic("foo", "bar")); // Expected: false
        System.out.println(isIsomorphic("paper", "title")); // Expected: true
    }
}`,
  },
  expectedOutput: {
    javascript: "true\nfalse\ntrue",
    python: "True\nFalse\nTrue",
    java: "true\nfalse\ntrue",
  },
  },

  "first-unique-character-in-a-string": {
  id: "first-unique-character-in-a-string",
  title: "First Unique Character in a String",
  difficulty: "Easy",
  category: "String • Hash Table",
  description: {
    text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    notes: [
      "A character is considered unique if it appears exactly once in the string.",
    ],
  },
  examples: [
    {
      input: 's = "leetcode"',
      output: "0",
      explanation: 'The character "l" is the first unique character.',
    },
    {
      input: 's = "loveleetcode"',
      output: "2",
      explanation: 'The character "v" is the first unique character.',
    },
    {
      input: 's = "aabb"',
      output: "-1",
      explanation: "There are no unique characters in the string.",
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁵",
    "s consists of only lowercase English letters.",
  ],
  starterCode: {
    javascript: `function firstUniqChar(s) {
  // Write your solution here

}

// Test cases
console.log(firstUniqChar("leetcode")); // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb")); // Expected: -1`,
    python: `def firstUniqChar(s):
    # Write your solution here
    pass

# Test cases
print(firstUniqChar("leetcode"))  # Expected: 0
print(firstUniqChar("loveleetcode"))  # Expected: 2
print(firstUniqChar("aabb"))  # Expected: -1`,
    java: `class Solution {
    public static int firstUniqChar(String s) {
        // Write your solution here

        return -1;
    }

    public static void main(String[] args) {
        System.out.println(firstUniqChar("leetcode")); // Expected: 0
        System.out.println(firstUniqChar("loveleetcode")); // Expected: 2
        System.out.println(firstUniqChar("aabb")); // Expected: -1
    }
}`,
  },
  expectedOutput: {
    javascript: "0\n2\n-1",
    python: "0\n2\n-1",
    java: "0\n2\n-1",
  },
  },

  "reverse-words-in-a-string": {
  id: "reverse-words-in-a-string",
  title: "Reverse Words in a String",
  difficulty: "Medium",
  category: "String • Two Pointers",
  description: {
    text: "Given an input string s, reverse the order of the words.",
    notes: [
      "A word is defined as a sequence of non-space characters.",
      "The words in s will be separated by at least one space.",
      "Return a string with the words in reverse order concatenated by a single space.",
      "The returned string should not contain leading or trailing spaces.",
    ],
  },
  examples: [
    {
      input: 's = "the sky is blue"',
      output: '"blue is sky the"',
    },
    {
      input: 's = "  hello world  "',
      output: '"world hello"',
      explanation: "Your reversed string should not contain leading or trailing spaces.",
    },
    {
      input: 's = "a good   example"',
      output: '"example good a"',
      explanation: "Reduce multiple spaces between words to a single space in the returned string.",
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁴",
    "s contains English letters, digits, and spaces.",
    "There is at least one word in s.",
  ],
  starterCode: {
    javascript: `function reverseWords(s) {
  // Write your solution here

}

// Test cases
console.log(reverseWords("the sky is blue")); // Expected: "blue is sky the"
console.log(reverseWords("  hello world  ")); // Expected: "world hello"
console.log(reverseWords("a good   example")); // Expected: "example good a"`,
    python: `def reverseWords(s):
    # Write your solution here
    pass

# Test cases
print(reverseWords("the sky is blue"))  # Expected: blue is sky the
print(reverseWords("  hello world  "))  # Expected: world hello
print(reverseWords("a good   example"))  # Expected: example good a`,
    java: `class Solution {
    public static String reverseWords(String s) {
        // Write your solution here

        return "";
    }

    public static void main(String[] args) {
        System.out.println(reverseWords("the sky is blue")); // Expected: blue is sky the
        System.out.println(reverseWords("  hello world  ")); // Expected: world hello
        System.out.println(reverseWords("a good   example")); // Expected: example good a
    }
}`,
  },
  expectedOutput: {
    javascript: "blue is sky the\nworld hello\nexample good a",
    python: "blue is sky the\nworld hello\nexample good a",
    java: "blue is sky the\nworld hello\nexample good a",
  },
  },

  "longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: [
      "A substring is a contiguous sequence of characters within the string.",
      "The characters in the substring must all be unique.",
    ],
  },
  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: 'The answer is "abc", with the length of 3.',
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: 'The answer is "b", with the length of 1.',
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: 'The answer is "wke", with the length of 3. Notice that the answer must be a substring, not a subsequence.',
    },
  ],
  constraints: [
    "0 ≤ s.length ≤ 5 × 10⁴",
    "s consists of English letters, digits, symbols, and spaces.",
  ],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
    python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
    java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
  },
  expectedOutput: {
    javascript: "3\n1\n3",
    python: "3\n1\n3",
    java: "3\n1\n3",
  },
  },

  "group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Array • Hash Table • String",
  description: {
    text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    notes: [
      "An anagram is a word or phrase formed by rearranging the letters of another word, using all the original letters exactly once.",
    ],
  },
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      explanation: 'The order of the output and the order of strings within each group does not matter.',
    },
    {
      input: 'strs = [""]',
      output: '[[""]]',
    },
    {
      input: 'strs = ["a"]',
      output: '[["a"]]',
    },
  ],
  constraints: [
    "1 ≤ strs.length ≤ 10⁴",
    "0 ≤ strs[i].length ≤ 100",
    "strs[i] consists of lowercase English letters.",
  ],
  starterCode: {
    javascript: `function groupAnagrams(strs) {
  // Write your solution here

}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([""]));
// Expected: [[""]]

console.log(groupAnagrams(["a"]));
// Expected: [["a"]]`,
    python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
# Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]

print(groupAnagrams([""]))
# Expected: [[""]]

print(groupAnagrams(["a"]))
# Expected: [["a"]]`,
    java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here

        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        // Expected: [[bat], [nat, tan], [ate, eat, tea]]

        System.out.println(groupAnagrams(new String[]{""}));
        // Expected: [[]]

        System.out.println(groupAnagrams(new String[]{"a"}));
        // Expected: [[a]]
    }
}`,
  },
  expectedOutput: {
    javascript: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[[""]]\n[["a"]]',
    python: "[['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]\n[['']]\n[['a']]",
    java: "[[bat], [nat, tan], [ate, eat, tea]]\n[[]]\n[[a]]",
  },
  },

  "longest-repeating-character-replacement": {
  id: "longest-repeating-character-replacement",
  title: "Longest Repeating Character Replacement",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.",
    notes: [
      "You can perform this operation at most k times.",
      "Return the length of the longest substring containing the same letter after performing at most k replacements.",
    ],
  },
  examples: [
    {
      input: 's = "ABAB", k = 2',
      output: "4",
      explanation: 'Replace the two \'A\' characters with \'B\' (or vice versa) to get "BBBB".',
    },
    {
      input: 's = "AABABBA", k = 1',
      output: "4",
      explanation: 'Replace the middle \'A\' with \'B\' to obtain the substring "BBBB".',
    },
    {
      input: 's = "AAAA", k = 2',
      output: "4",
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁵",
    "s consists of only uppercase English letters.",
    "0 ≤ k ≤ s.length",
  ],
  starterCode: {
    javascript: `function characterReplacement(s, k) {
  // Write your solution here

}

// Test cases
console.log(characterReplacement("ABAB", 2)); // Expected: 4
console.log(characterReplacement("AABABBA", 1)); // Expected: 4
console.log(characterReplacement("AAAA", 2)); // Expected: 4`,
    python: `def characterReplacement(s, k):
    # Write your solution here
    pass

# Test cases
print(characterReplacement("ABAB", 2))  # Expected: 4
print(characterReplacement("AABABBA", 1))  # Expected: 4
print(characterReplacement("AAAA", 2))  # Expected: 4`,
    java: `class Solution {
    public static int characterReplacement(String s, int k) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(characterReplacement("ABAB", 2)); // Expected: 4
        System.out.println(characterReplacement("AABABBA", 1)); // Expected: 4
        System.out.println(characterReplacement("AAAA", 2)); // Expected: 4
    }
}`,
  },
  expectedOutput: {
    javascript: "4\n4\n4",
    python: "4\n4\n4",
    java: "4\n4\n4",
  },
  },

  "permutation-in-string": {
  id: "permutation-in-string",
  title: "Permutation in String",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
    notes: [
      "In other words, return true if one of s1's permutations is the substring of s2.",
      "Both strings consist of lowercase English letters.",
    ],
  },
  examples: [
    {
      input: 's1 = "ab", s2 = "eidbaooo"',
      output: "true",
      explanation: '"ba" is a permutation of "ab" and is a substring of s2.',
    },
    {
      input: 's1 = "ab", s2 = "eidboaoo"',
      output: "false",
      explanation: "No permutation of s1 exists as a substring of s2.",
    },
    {
      input: 's1 = "adc", s2 = "dcda"',
      output: "true",
      explanation: '"cda" is a permutation of "adc".',
    },
  ],
  constraints: [
    "1 ≤ s1.length, s2.length ≤ 10⁴",
    "s1 and s2 consist of lowercase English letters.",
  ],
  starterCode: {
    javascript: `function checkInclusion(s1, s2) {
  // Write your solution here

}

// Test cases
console.log(checkInclusion("ab", "eidbaooo")); // Expected: true
console.log(checkInclusion("ab", "eidboaoo")); // Expected: false
console.log(checkInclusion("adc", "dcda")); // Expected: true`,
    python: `def checkInclusion(s1, s2):
    # Write your solution here
    pass

# Test cases
print(checkInclusion("ab", "eidbaooo"))  # Expected: True
print(checkInclusion("ab", "eidboaoo"))  # Expected: False
print(checkInclusion("adc", "dcda"))  # Expected: True`,
    java: `class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(checkInclusion("ab", "eidbaooo")); // Expected: true
        System.out.println(checkInclusion("ab", "eidboaoo")); // Expected: false
        System.out.println(checkInclusion("adc", "dcda")); // Expected: true
    }
}`,
  },
  expectedOutput: {
    javascript: "true\nfalse\ntrue",
    python: "True\nFalse\nTrue",
    java: "true\nfalse\ntrue",
  },
  },

  "minimum-window-substring": {
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "String • Sliding Window • Hash Table",
  description: {
    text: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
    notes: [
      "If there is no such substring, return an empty string \"\".",
      "If there is such a substring, it is guaranteed to be unique.",
    ],
  },
  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation: '"BANC" is the smallest substring of s containing \'A\', \'B\', and \'C\'.',
    },
    {
      input: 's = "a", t = "a"',
      output: '"a"',
    },
    {
      input: 's = "a", t = "aa"',
      output: '""',
      explanation: "Since t contains two occurrences of 'a', no valid window exists.",
    },
  ],
  constraints: [
    "m == s.length",
    "n == t.length",
    "1 ≤ m, n ≤ 10⁵",
    "s and t consist of uppercase and lowercase English letters.",
  ],
  starterCode: {
    javascript: `function minWindow(s, t) {
  // Write your solution here

}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""`,
    python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: BANC
print(minWindow("a", "a"))  # Expected: a
print(minWindow("a", "aa"))  # Expected: ""`,
    java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here

        return "";
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
        System.out.println(minWindow("a", "a")); // Expected: a
        System.out.println(minWindow("a", "aa")); // Expected:
    }
}`,
  },
  expectedOutput: {
    javascript: "BANC\na\n",
    python: "BANC\na\n",
    java: "BANC\na\n",
  },
  },

  "valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack • String",
  description: {
    text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    notes: [
      "An input string is valid if open brackets are closed by the same type of brackets.",
      "Open brackets must be closed in the correct order.",
      "Every closing bracket has a corresponding opening bracket of the same type.",
    ],
  },
  examples: [
    {
      input: 's = "()"',
      output: "true",
    },
    {
      input: 's = "()[]{}"',
      output: "true",
    },
    {
      input: 's = "(]"',
      output: "false",
    },
    {
      input: 's = "([)]"',
      output: "false",
    },
    {
      input: 's = "{[]}"',
      output: "true",
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁴",
    "s consists of parentheses only '()[]{}'.",
  ],
  starterCode: {
    javascript: `function isValid(s) {
  // Write your solution here

}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true`,
    python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("([)]"))  # Expected: False
print(isValid("{[]}"))  # Expected: True`,
    java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("([)]")); // Expected: false
        System.out.println(isValid("{[]}")); // Expected: true
    }
}`,
  },
  expectedOutput: {
    javascript: "true\ntrue\nfalse\nfalse\ntrue",
    python: "True\nTrue\nFalse\nFalse\nTrue",
    java: "true\ntrue\nfalse\nfalse\ntrue",
  },
  },

  "min-stack": {
  id: "min-stack",
  title: "Min Stack",
  difficulty: "Medium",
  category: "Stack • Design",
  description: {
    text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    notes: [
      "Implement the MinStack class.",
      "MinStack() initializes the stack object.",
      "void push(int val) pushes the element val onto the stack.",
      "void pop() removes the element on the top of the stack.",
      "int top() gets the top element of the stack.",
      "int getMin() retrieves the minimum element in the stack.",
      "All operations must run in O(1) time.",
    ],
  },
  examples: [
    {
      input:
        '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
      output: "[null,null,null,null,-3,null,0,-2]",
      explanation:
        "MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // returns -3\nminStack.pop();\nminStack.top(); // returns 0\nminStack.getMin(); // returns -2",
    },
  ],
  constraints: [
    "-2³¹ ≤ val ≤ 2³¹ - 1",
    "Methods pop, top and getMin will always be called on non-empty stacks.",
    "At most 3 × 10⁴ calls will be made to push, pop, top, and getMin.",
  ],
  starterCode: {
    javascript: `class MinStack {
  constructor() {
    // Initialize your data structure here
  }

  push(val) {
    // Write your solution here
  }

  pop() {
    // Write your solution here
  }

  top() {
    // Write your solution here
  }

  getMin() {
    // Write your solution here
  }
}

// Test cases
const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // Expected: -3

minStack.pop();

console.log(minStack.top()); // Expected: 0
console.log(minStack.getMin()); // Expected: -2`,
    python: `class MinStack:

    def __init__(self):
        # Initialize your data structure here
        pass

    def push(self, val):
        # Write your solution here
        pass

    def pop(self):
        # Write your solution here
        pass

    def top(self):
        # Write your solution here
        pass

    def getMin(self):
        # Write your solution here
        pass


# Test cases
minStack = MinStack()

minStack.push(-2)
minStack.push(0)
minStack.push(-3)

print(minStack.getMin())  # Expected: -3

minStack.pop()

print(minStack.top())     # Expected: 0
print(minStack.getMin())  # Expected: -2`,
    java: `class MinStack {

    public MinStack() {
        // Initialize your data structure here
    }

    public void push(int val) {
        // Write your solution here
    }

    public void pop() {
        // Write your solution here
    }

    public int top() {
        // Write your solution here
        return 0;
    }

    public int getMin() {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        MinStack minStack = new MinStack();

        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);

        System.out.println(minStack.getMin()); // Expected: -3

        minStack.pop();

        System.out.println(minStack.top());    // Expected: 0
        System.out.println(minStack.getMin()); // Expected: -2
    }
}`,
  },
  expectedOutput: {
    javascript: "-3\n0\n-2",
    python: "-3\n0\n-2",
    java: "-3\n0\n-2",
  },
  },

  "daily-temperatures": {
  id: "daily-temperatures",
  title: "Daily Temperatures",
  difficulty: "Medium",
  category: "Array • Stack • Monotonic Stack",
  description: {
    text: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
    notes: [
      "If there is no future day for which this is possible, keep answer[i] == 0.",
    ],
  },
  examples: [
    {
      input: "temperatures = [73,74,75,71,69,72,76,73]",
      output: "[1,1,4,2,1,1,0,0]",
      explanation:
        "A warmer temperature occurs after 1, 1, 4, 2, 1, 1, 0, and 0 days respectively.",
    },
    {
      input: "temperatures = [30,40,50,60]",
      output: "[1,1,1,0]",
    },
    {
      input: "temperatures = [30,60,90]",
      output: "[1,1,0]",
    },
  ],
  constraints: [
    "1 ≤ temperatures.length ≤ 10⁵",
    "30 ≤ temperatures[i] ≤ 100",
  ],
  starterCode: {
    javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here

}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
// Expected: [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([30,40,50,60]));
// Expected: [1,1,1,0]

console.log(dailyTemperatures([30,60,90]));
// Expected: [1,1,0]`,
    python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

# Test cases
print(dailyTemperatures([73,74,75,71,69,72,76,73]))
# Expected: [1,1,4,2,1,1,0,0]

print(dailyTemperatures([30,40,50,60]))
# Expected: [1,1,1,0]

print(dailyTemperatures([30,60,90]))
# Expected: [1,1,0]`,
    java: `import java.util.Arrays;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})
        ));
        // Expected: [1, 1, 4, 2, 1, 1, 0, 0]

        System.out.println(Arrays.toString(
            dailyTemperatures(new int[]{30,40,50,60})
        ));
        // Expected: [1, 1, 1, 0]

        System.out.println(Arrays.toString(
            dailyTemperatures(new int[]{30,60,90})
        ));
        // Expected: [1, 1, 0]
    }
}`,
  },
  expectedOutput: {
    javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]\n[1,1,0]",
    python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
    java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
  },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};