//კითხვის ფორმები.

//ვინ მოიგო champions league 2018?
//ვინ მოიგო nba 2023?
//ვინ მოიგო world cup 2022?
//Nike Air Zoom Pegasus რა ღირს?


const products = {
  "Nike Air Zoom Pegasus": { type: "სარბენი ფეხსაცმელი", price: "≈250$", desc: "მსუბუქი, ამორტიზირებადი ფეხსაცმელი გრძელ დისტანციებზე სარბენად." },
  "Adidas Predator": { type: "ფეხბურთის ბუცი", price: "≈300$", desc: "მაღალი კონტროლი და სიზუსტე ბურთზე — პროფესიონალური ბუცი." },
  "Wilson Evolution Basketball": { type: "კალათბურთის ბურთი", price: "≈80$", desc: "რბილი და ხარისხიანი ბურთი შიდა დარბაზში სათამაშოდ." },
  "Spalding NBA Ball": { type: "კალათბურთის ბურთი", price: "≈90$", desc: "NBA-ის ოფიციალური ბურთი — შესაფერისია პროფესიონალური თამაშისთვის." },
  "Puma Ultra": { type: "ფეხბურთის ბუცი", price: "≈220$", desc: "სწრაფი და მსუბუქი ბუცები მაქსიმალური სიჩქარისთვის." }
};


const facts = [
  { question: ["champions league 2016"], answer: "🏆 2016 წელს ჩემპიონთა ლიგა მოიგო რეალმა — ფინალში ატლეტიკოს პენალტებით მოუგო." },
  { question: ["champions league 2017"], answer: "🏆 2017 წელს ჩემპიონთა ლიგა მოიგო რეალმა — ფინალში დაამარცხა იუვენტუსი 4:1." },
  { question: ["champions league 2018"], answer: "🏆 2018 წელს ჩემპიონთა ლიგა მოიგო რეალმა — ფინალში დაამარცხა ლივერპული 3:1." },
  { question: ["champions league 2019"], answer: "🏆 2019 წელს ჩემპიონთა ლიგა მოიგო ლივერპულმა — ტოტენჰემი დაამარცხა 2:0." },
  { question: ["champions league 2020"], answer: "🏆 2020 წელს ჩემპიონთა ლიგა მოიგო ბაიერნმა — ფინალში პსჟ დაამარცხა 1:0." },
  { question: ["champions league 2021"], answer: "🏆 2021 წელს ჩემპიონთა ლიგა მოიგო ჩელსიმ — მანჩესტერ სიტი დაამარცხა 1:0." },
  { question: ["champions league 2022"], answer: "🏆 2022 წელს ჩემპიონთა ლიგა მოიგო რეალმა — ფინალში დაამარცხა ლივერპული 1:0." },
  { question: ["champions league 2023"], answer: "🏆 2023 წელს ჩემპიონთა ლიგა მოიგო მანჩესტერ სიტიმ — ფინალში ინტერს მოუგო 1:0." },

  { question: ["world cup 2010"], answer: "🌍 2010 წლის მსოფლიო ჩემპიონატი მოიგო ესპანეთმა — ფინალში ნიდერლანდები დაამარცხა 1:0." },
  { question: ["world cup 2014"], answer: "🌍 2014 წლის მსოფლიო ჩემპიონატი მოიგო გერმანიამ — ფინალში არგენტინა დაამარცხა 1:0." },
  { question: ["world cup 2018"], answer: "🌍 2018 წლის მსოფლიო ჩემპიონატი მოიგო საფრანგეთმა — ფინალში ხორვატია დაამარცხა 4:2." },
  { question: ["world cup 2022"], answer: "🌍 2022 წლის მსოფლიო ჩემპიონატი მოიგო არგენტინამ — ფინალში ფრანგები დაამარცხა პენალტებით 3:3 (4:2)." },

  { question: ["nba 2016"], answer: "🏀 2016 წლის NBA ჩემპიონი გახდა კლივლენდ კავალიერსი — ლებრონ ჯეიმსის ხელმძღვანელობით." },
  { question: ["nba 2017"], answer: "🏀 2017 წელს NBA მოიგო გოლდენ სტეიტ უორიორსი — ფინალში დაამარცხა კლივლენდი 4:1." },
  { question: ["nba 2018"], answer: "🏀 2018 წელს NBA მოიგო გოლდენ სტეიტ უორიორსი — ისევ კლივლენდი დაამარცხა 4:0." },
  { question: ["nba 2019"], answer: "🏀 2019 წელს NBA მოიგო ტორონტო რეპტორსი — ფინალში დაამარცხა გოლდენ სტეიტი 4:2." },
  { question: ["nba 2020"], answer: "🏀 2020 წელს NBA მოიგო ლოს-ანჯელეს ლეიკერსი — ფინალში მაიამი ჰიტი დაამარცხა." },
  { question: ["nba 2021"], answer: "🏀 2021 წელს NBA მოიგო მილუოკი ბაქსი — იანნის ანტეტოკუმპოს MVP." },
  { question: ["nba 2022"], answer: "🏀 2022 წელს NBA მოიგო გოლდენ სტეიტ უორიორსი — ბოსტონი დაამარცხა 4:2." },
  { question: ["nba 2023"], answer: "🏀 2023 წელს NBA მოიგო დენვერ ნაგეთსი — ნიკოლა იოკიჩის ხელმძღვანელობით." }
];


const keywordFacts = [
  { keywords: ["champions league","ჩემპიონთა ლიგა","2018"], answer: "🏆 2018 წელს ჩემპიონთა ლიგა მოიგო რეალმა — ფინალში დაამარცხა ლივერპული 3:1." },
  { keywords: ["nba","2023","ენბეე"], answer: "🏀 2023 წელს NBA მოიგო დენვერ ნაგეთსი — ნიკოლა იოკიჩის ხელმძღვანელობით." },
  { keywords: ["world cup","მსოფლიო ჩემპიონატი","2022"], answer: "🌍 2022 წლის მსოფლიო ჩემპიონატი მოიგო არგენტინამ — ფინალში ფრანგები დაამარცხა პენალტებით 3:3 (4:2)." },
  { keywords: ["nike air zoom pegasus","nike","ფეხსაცმელი"], answer: "<b>Nike Air Zoom Pegasus</b> — სარბენი ფეხსაცმელი, ფასი ≈250$, მსუბუქი და ამორტიზირებადი გრძელ დისტანციებზე სარბენად." }
];


function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<p><b>👤 შენ:</b> ${userText}</p>`;
  input.value = "";

  let reply = "სამწუხაროდ, ამ კითხვაზე ინფორმაცია არ მაქვს 😕";

  
  if (userText.toLowerCase().includes("გამარჯობა")) {
    reply = "გამარჯობა, რით შემიძლია დაგეხმარო?";
  } else {
    
    
    for (const [key, info] of Object.entries(products)) {
      if (userText.toLowerCase().includes(key.toLowerCase().split(" ")[0])) {
        reply = `<b>${key}</b> (${info.type})<br>ფასი: ${info.price}<br>${info.desc}`;
        break;
      }
    }

    
    if (reply.includes("ინფორმაცია არ მაქვს")) {
      for (const fact of keywordFacts) {
        const matched = fact.keywords.every(kw => userText.toLowerCase().includes(kw.toLowerCase()));
        if (matched) {
          reply = fact.answer;
          break;
        }
      }

      
      if (reply.includes("ინფორმაცია არ მაქვს")) {
        for (const fact of facts) {
          if (fact.question.some(q => userText.toLowerCase().includes(q.toLowerCase()))) {
            reply = fact.answer;
            break;
          }
        }
      }
    }
  }

  setTimeout(() => {
    chatBox.innerHTML += `<p><b>🤖 SportBot:</b> ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
}

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
