# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
It is common that we divide our program into chunks using functions which we can call later to perform some useful action.
Sometimes, a function can become expensive to call multiple times (say, a function to calculate the factorial of a number).
For example, let’s say we have a function to return the factorial of a number:

function factorial(n) {
    // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
    return factorial
}

Great, now let’s find factorial(50). The computer will perform calculations and return us the final answer, sweet!

When that’s done, let’s find factorial(51). The computer again performs a number of calculations and gets us the result, but you might have noticed that we’re already repeating a number of steps that could have been avoided. An optimized way would be:

factorial(51) = factorial(50) * 51

But our function performs the calculations from scratch every time it’s called:

factorial(51) = 51 * 50 * 49 * ... * 2 * 1

This way if we could make our factorial function could remember the values from its previous calculations and use them to speed up the execution by caching the results so that we can return the cached result when the same inputs occur again.

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*