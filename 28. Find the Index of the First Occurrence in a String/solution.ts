function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const sub = haystack.substring(i, i + needle.length);
    if (sub === needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad")); // ✅ 3
