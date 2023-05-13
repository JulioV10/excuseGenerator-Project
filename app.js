
window.onload = function() {
  //write your code here
  function excuseGenerate() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let selectWho = who[Math.floor(Math.random() * who.length)];
    let selectAction = action[Math.floor(Math.random() * action.length)];
    let selectWhat = what[Math.floor(Math.random() * what.length)];
    let selectWhen = when[Math.floor(Math.random() * when.length)];
    let e = " ";

    let excuse = selectWho + e + selectAction + e + selectWhat + e + selectWhen;
    document.getElementById("excuse").innerHTML = excuse;
  }

  excuseGenerate();
};
