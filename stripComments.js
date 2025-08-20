function solution(text, markers) {
  return text
    .split("\n")
    .map((line) => {
      for (let marker of markers) {
        if (line.includes(marker)) {
          line = line.split(marker)[0];
        }
      }
      return line.trimEnd();
    })
    .join("\n");
}

console.log(solution("aa bb\ncc dd", ["#", "!"]));
