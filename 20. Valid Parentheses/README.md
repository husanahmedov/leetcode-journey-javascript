Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:

> _Input: s = "()"_ 
> _Output: true_

Example 2:

> _Input: s = "()[]{}"_
> _Output: true_

Example 3:

> _Input: s = "(]"_
> _Output: false_

Constraints:

- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.
