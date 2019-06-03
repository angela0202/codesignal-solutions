Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

__Example__

* For `inputString = "(bar)"`, the output should be
`reverseInParentheses(inputString) = "rab"`;
* For `inputString = "foo(bar)baz"`, the output should be
`reverseInParentheses(inputString) = "foorabbaz"`;
* For `inputString = "foo(bar)baz(blim)"`, the output should be
 `reverseInParentheses(inputString) = "foorabbazmilb"`;
*For `inputString = "foo(bar(baz))blim"`, the output should be
`reverseInParentheses(inputString) = "foobazrabblim"`.
Because `"foo(bar(baz))blim"` becomes `"foo(barzab)blim"` and then `"foobazrabblim"`.

__Input/Output__

* __[execution time limit] 4 seconds (js)__
* __[input] string inputString__

A string consisting of lowercase English letters and the characters `(` and `)`. It is guaranteed that all parentheses in inputString form a regular bracket sequence.

*Guaranteed constraints:*
`0 ≤ inputString.length ≤ 50`.

* __[output] string__
