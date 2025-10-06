function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in pairs) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop()!;
      if (pairs[last] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("{}[]{)"));

/* 
    1. Bo'sh container o'zgaruvchi ochish
    2. Bizda opening va closing uchun object ochib olish kerak bo'ladi
    3. for loop orqali parameterlarni olamiz va objectga solishtiramiz

    Yechim agar har bir opening va closing bracketlar bir biriga tushsa
    va oxirida yaratilgan container bo'sh qolsa
*/
