# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Explanation:

# Simplified Conditional Assignment:

-   The original code had nested if statements to determine the candidate value. By using the conditional (ternary) operator ? :, we can achieve the same result in a more concise way. The condition event && event.partitionKey checks if event and event.partitionKey are truthy, and if so, assigns event.partitionKey to candidate. Otherwise, it falls back to JSON.stringify(event || TRIVIAL_PARTITION_KEY).
    Type Checking:

-   Instead of checking the type of candidate using an if statement, we can simplify it by directly applying JSON.stringify to ensure it's a string. This eliminates an unnecessary conditional block and reduces complexity.

# Ternary Operator for Hashing:

-   Rather than using an if-else statement to decide whether to hash the candidate or not, we can use a conditional (ternary) operator ? : to conditionally assign the hashed value to candidate. If the length of candidate exceeds MAX_PARTITION_KEY_LENGTH, it gets hashed using crypto.createHash("sha3-512").
