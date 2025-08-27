function rot13(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      char = String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }

    str = str.slice(0, i) + char + str.slice(i + 1);
  }

  return str;
}
