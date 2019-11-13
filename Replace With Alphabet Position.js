function alphabetPosition(text) {
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let textArr = text.split(" ").join().split("").map((v)=>v.toUpperCase()).filter((v)=>abc.indexOf(v)>-1).map((v)=>abc.indexOf(v)+1).join(" ");
  return textArr;
}