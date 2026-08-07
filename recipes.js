const RECIPES = [
  {id:1,title:"Strawberry Cloud Matcha",category:"Fruchtig",time:"8 Min.",level:"Einfach",color:"berry",emoji:"🍓",note:"Erdbeere · Vanille · Hafermilch",sweet:"Mittel",temperature:"Kalt",vegan:"Ja",tags:["Vegan möglich","Kalt"],ingredients:["1 TL Matcha-Pulver","60 ml heißes Wasser (ca. 80 °C)","4 reife Erdbeeren","1 TL Ahornsirup","180 ml Hafermilch","1/2 TL Vanilleextrakt","Eiswürfel"],steps:["Erdbeeren mit Ahornsirup fein pürieren und in ein hohes Glas geben.","Matcha sieben, mit heißem Wasser anrühren und schaumig schlagen.","Eiswürfel auf das Erdbeerpüree geben. Hafermilch mit Vanille darauf gießen.","Matcha langsam über die Milch gießen und vor dem Trinken umrühren."],description:"Luftig-süße Erdbeerwolke auf cremigem Matcha – ein fruchtiger Iced Latte für den kleinen Genussmoment zwischendurch.",image:"images/recipes/strawberry-cloud-matcha.jpg",rating:4.9,reviews:312,saves:2400,popular:true,servings:"1 Glas",allergens:["Gluten (Haferdrink)"],draft:false},
  {id:2,title:"Coconut Iced Matcha",category:"Iced",time:"5 Min.",level:"Einfach",color:"coconut",emoji:"🥥",note:"Kokos · Limette · zeremonieller Matcha",sweet:"Mittel",temperature:"Kalt",vegan:"Ja",tags:["Vegan","Kalt"],ingredients:["1 TL Matcha-Pulver","60 ml heißes Wasser (ca. 80 °C)","160 ml Kokosdrink","40 ml Kokosmilch","1 TL Agavendicksaft","1 Spritzer Limettensaft","Eiswürfel"],steps:["Matcha sieben und mit heißem Wasser glatt und schaumig rühren.","Kokosdrink, Kokosmilch, Agavendicksaft und Limettensaft verrühren.","Ein Glas mit Eiswürfeln füllen und die Kokosmischung hineingießen.","Matcha darübergeben. Für den Farbverlauf nicht sofort umrühren."],description:"Kokos, Limette und zeremonieller Matcha – eiskalt und samtig, wie ein Mini-Urlaub im Glas.",image:"images/recipes/coconut-iced-matcha.jpg",rating:4.8,reviews:240,saves:1600,popular:true,servings:"1 Glas",allergens:["Kokos"],draft:false},
  {id:3,title:"Vanilla Cream Matcha",category:"Cremig",time:"7 Min.",level:"Einfach",color:"vanilla",emoji:"☁",note:"Vanille · Matcha · Cream Foam",sweet:"Süß",temperature:"Kalt",vegan:"Nein",tags:["Vegetarisch","Kalt"],ingredients:["1 TL Matcha-Pulver","60 ml heißes Wasser (ca. 80 °C)","180 ml Milch oder Hafermilch","2 EL Sahne oder vegane Schlagcreme","1 TL Vanillesirup","Eiswürfel"],steps:["Matcha sieben, mit heißem Wasser anrühren und aufschlagen.","Sahne mit Vanillesirup kurz cremig, aber noch gießbar aufschlagen.","Ein Glas mit Eis und Milch füllen. Den Matcha langsam hineingießen.","Zum Schluss die Vanille-Cream obenauf geben."],description:"Samtige Vanille-Creme auf sattem Matcha: der süße Klassiker für alle, die es cremig und gemütlich mögen.",image:"images/recipes/vanilla-cream-matcha.jpg",rating:4.8,reviews:268,saves:1900,popular:true,servings:"1 Glas",allergens:["Milch / Laktose"],draft:false},
  {id:4,title:"Blueberry Oat Matcha",category:"Fruchtig",time:"10 Min.",level:"Mittel",color:"blueberry",emoji:"🫐",note:"Blaubeere · Hafer · Ahorn",sweet:"Mittel",temperature:"Kalt",vegan:"Ja",tags:["Vegan","Kalt"],ingredients:["1 TL Matcha-Pulver","60 ml heißes Wasser (ca. 80 °C)","70 g Blaubeeren","1 TL Ahornsirup","1 TL Zitronensaft","180 ml Hafermilch","Eiswürfel"],steps:["Blaubeeren, Ahornsirup und Zitronensaft pürieren.","Matcha mit heißem Wasser schaumig schlagen.","Blaubeerpüree in ein Glas geben und mit Eis auffüllen.","Hafermilch und danach den Matcha vorsichtig eingießen."],description:"Beerige Blaubeeren, Hafer und ein Hauch Ahorn – ein wohliges Wellness-Getränk mit natürlicher Süße.",image:"images/recipes/blueberry-oat-matcha.jpg",rating:4.5,reviews:97,saves:640,popular:false,servings:"1 Glas",allergens:["Gluten (Haferdrink)"],draft:false},
  {id:5,title:"Peachy Matcha Tonic",category:"Fruchtig",time:"6 Min.",level:"Einfach",color:"peach",emoji:"🍑",note:"Pfirsich · Tonic · Matcha",sweet:"Mittel",temperature:"Kalt",vegan:"Ja",tags:["Vegan","Erfrischend"],ingredients:["1 TL Matcha-Pulver","50 ml heißes Wasser (ca. 80 °C)","1/2 reifer Pfirsich","1 TL Honig oder Agavendicksaft","120 ml mildes Tonic Water","Eiswürfel"],steps:["Pfirsich mit Honig oder Agavendicksaft fein pürieren und in ein Glas füllen.","Das Glas mit Eiswürfeln auffüllen und Tonic Water langsam dazugießen.","Matcha sieben, mit heißem Wasser glatt rühren und behutsam über einen Löffel auf das Getränk gießen.","Mit einer Pfirsichscheibe garnieren."],description:"Spritzig-leichter Pfirsich-Tonic mit Matcha: prickelnd und erfrischend – perfekt für sonnige Nachmittage.",image:"images/recipes/peachy-matcha-tonic.jpg",rating:4.7,reviews:158,saves:1200,popular:true,servings:"1 Glas",allergens:["Honig (optional)"],draft:false},
  {id:6,title:"Pistachio Latte",category:"Cremig",time:"8 Min.",level:"Mittel",color:"pistachio",emoji:"◒",note:"Pistazie · Mandel · Matcha",sweet:"Mittel",temperature:"Heiß oder kalt",vegan:"Ja",tags:["Vegan möglich","Kalt oder warm"],ingredients:["1 TL Matcha-Pulver","60 ml heißes Wasser (ca. 80 °C)","200 ml Mandeldrink","1 EL Pistazienmus","1 TL Ahornsirup","1 Prise Salz","Eiswürfel für die kalte Variante"],steps:["Pistazienmus, Ahornsirup und Salz mit einem Schluck Mandeldrink glatt rühren.","Restlichen Mandeldrink dazugeben und kalt mit Eis servieren oder aufschäumen.","Matcha sieben und mit heißem Wasser schaumig schlagen.","Matcha auf die Pistazienmilch gießen und nach Wunsch mit Pistazien dekorieren."],description:"Pistazienmus trifft Matcha: nussig, samtig und doppelt grün – kalt oder warm ein Genuss.",image:"images/recipes/pistachio-latte.jpg",rating:4.7,reviews:132,saves:980,popular:true,servings:"1 Glas",allergens:["Nüsse (Mandel, Pistazie)"],draft:false},
  {id:7,title:"Classic Iced Oat Matcha",category:"Iced",time:"5 Min.",color:"coconut",emoji:"❋",note:"Haferdrink · Eis · zeremonieller Matcha",draft:true},
  {id:8,title:"Vanilla Iced Matcha",category:"Iced",time:"5 Min.",color:"vanilla",emoji:"☁",note:"Vanille · Milch · Matcha",draft:true},
  {id:9,title:"Salted Maple Matcha",category:"Iced",time:"6 Min.",color:"pistachio",emoji:"✦",note:"Ahorn · Meersalz · Hafer",draft:true},
  {id:10,title:"Strawberry Cold Foam Matcha",category:"Iced",time:"8 Min.",color:"berry",emoji:"🍓",note:"Erdbeere · Cold Foam · Matcha",draft:true},
  {id:11,title:"Mango Iced Matcha",category:"Iced",time:"7 Min.",color:"peach",emoji:"🥭",note:"Mango · Kokos · Matcha",draft:true},
  {id:12,title:"Honey Oat Matcha",category:"Iced",time:"5 Min.",color:"vanilla",emoji:"✿",note:"Honig · Hafer · Matcha",draft:true},
  {id:13,title:"Sparkling Lemon Matcha",category:"Iced",time:"5 Min.",color:"coconut",emoji:"◌",note:"Zitrone · Soda · Matcha",draft:true},
  {id:14,title:"Lavender Iced Matcha",category:"Iced",time:"7 Min.",color:"blueberry",emoji:"✾",note:"Lavendel · Vanille · Milch",draft:true},
  {id:15,title:"Dirty Iced Matcha",category:"Iced",time:"6 Min.",color:"pistachio",emoji:"◒",note:"Espresso · Milch · Matcha",draft:true},
  {id:16,title:"Pistachio Cream Matcha",category:"Cremig",time:"8 Min.",color:"pistachio",emoji:"◒",note:"Pistazie · Mandel · Matcha",draft:true},
  {id:17,title:"White Chocolate Matcha",category:"Cremig",time:"8 Min.",color:"vanilla",emoji:"◈",note:"Weiße Schokolade · Milch · Matcha",draft:true},
  {id:18,title:"Biscoff Cloud Matcha",category:"Cremig",time:"8 Min.",color:"peach",emoji:"✦",note:"Karamellkeks · Cream Foam · Matcha",draft:true},
  {id:19,title:"Coconut Cream Matcha",category:"Cremig",time:"7 Min.",color:"coconut",emoji:"🥥",note:"Kokoscreme · Vanille · Matcha",draft:true},
  {id:20,title:"Crème Brûlée Matcha",category:"Cremig",time:"9 Min.",color:"vanilla",emoji:"◒",note:"Vanille · Karamell · Matcha",draft:true},
  {id:21,title:"Strawberry Cheesecake Matcha",category:"Cremig",time:"10 Min.",color:"berry",emoji:"🍓",note:"Erdbeere · Frischkäse · Matcha",draft:true},
  {id:22,title:"Banana Bread Matcha",category:"Cremig",time:"8 Min.",color:"peach",emoji:"🍌",note:"Banane · Zimt · Hafer",draft:true},
  {id:23,title:"Almond Croissant Matcha",category:"Cremig",time:"8 Min.",color:"vanilla",emoji:"◐",note:"Mandel · Vanille · Matcha",draft:true},
  {id:24,title:"Black Sesame Matcha",category:"Cremig",time:"8 Min.",color:"blueberry",emoji:"●",note:"Schwarzer Sesam · Milch · Matcha",draft:true},
  {id:25,title:"Raspberry Vanilla Matcha",category:"Fruchtig",time:"8 Min.",color:"berry",emoji:"♥",note:"Himbeere · Vanille · Matcha",draft:true},
  {id:26,title:"Mango Coconut Matcha",category:"Fruchtig",time:"7 Min.",color:"peach",emoji:"🥭",note:"Mango · Kokos · Matcha",draft:true},
  {id:27,title:"Yuzu Honey Matcha",category:"Fruchtig",time:"6 Min.",color:"coconut",emoji:"◌",note:"Yuzu · Honig · Matcha",draft:true},
  {id:28,title:"Passionfruit Matcha",category:"Fruchtig",time:"7 Min.",color:"peach",emoji:"◉",note:"Maracuja · Limette · Matcha",draft:true},
  {id:29,title:"Cherry Blossom Matcha",category:"Fruchtig",time:"8 Min.",color:"berry",emoji:"🍒",note:"Kirsche · Mandel · Matcha",draft:true},
  {id:30,title:"Banana Matcha Latte",category:"Fruchtig",time:"7 Min.",color:"vanilla",emoji:"🍌",note:"Banane · Hafer · Matcha",draft:true},
  {id:31,title:"Blackberry Mint Matcha",category:"Fruchtig",time:"8 Min.",color:"blueberry",emoji:"✿",note:"Brombeere · Minze · Matcha",draft:true},
  {id:32,title:"Protein Vanilla Matcha",category:"Wellness",time:"6 Min.",color:"vanilla",emoji:"✦",note:"Vanilleprotein · Milch · Matcha",draft:true},
  {id:33,title:"Chia Matcha Latte",category:"Wellness",time:"8 Min.",color:"coconut",emoji:"⌁",note:"Chia · Hafer · Matcha",draft:true},
  {id:34,title:"Banana Oat Matcha Smoothie",category:"Wellness",time:"7 Min.",color:"peach",emoji:"🍌",note:"Banane · Hafer · Matcha",draft:true},
  {id:35,title:"Coconut Water Matcha",category:"Wellness",time:"4 Min.",color:"coconut",emoji:"🥥",note:"Kokoswasser · Limette · Matcha",draft:true},
  {id:36,title:"Ginger Lemon Matcha",category:"Wellness",time:"5 Min.",color:"pistachio",emoji:"◌",note:"Ingwer · Zitrone · Matcha",draft:true},
  {id:37,title:"Date Cinnamon Matcha",category:"Wellness",time:"7 Min.",color:"vanilla",emoji:"✦",note:"Dattel · Zimt · Milch",draft:true},
  {id:38,title:"Golden Oat Matcha",category:"Wellness",time:"8 Min.",color:"peach",emoji:"☀",note:"Hafer · Kurkuma · Matcha",draft:true},
  {id:39,title:"Blueberry Yogurt Matcha",category:"Wellness",time:"8 Min.",color:"blueberry",emoji:"🫐",note:"Joghurt · Blaubeere · Matcha",draft:true},
  {id:40,title:"Mint Cucumber Matcha",category:"Wellness",time:"6 Min.",color:"coconut",emoji:"⌁",note:"Gurke · Minze · Limette",draft:true},
  {id:41,title:"Tahini Date Matcha",category:"Wellness",time:"7 Min.",color:"pistachio",emoji:"◐",note:"Tahini · Dattel · Matcha",draft:true}
];
const deriveMeta = (r) => {
  const sweet = r.sweet || (/Biscoff|Brûlée|Cheesecake|White Chocolate|Banana Bread/.test(r.title) ? "Süß" : /Classic|Sparkling|Ginger|Cucumber/.test(r.title) ? "Wenig" : "Mittel");
  const temperature = r.temperature || (r.category === "Iced" || r.category === "Fruchtig" || r.category === "Wellness" ? "Kalt" : "Heiß oder kalt");
  const vegan = r.vegan || (/Vanilla Cream|White Chocolate|Biscoff|Brûlée|Cheesecake/.test(r.title) ? "Nein" : "Ja");
  const level = r.level || (/Cold Foam|Crème|Cheesecake|Sesame|Croissant|Tonic|Pistachio|Golden/.test(r.title) ? "Mittel" : "Einfach");
  return { sweet, temperature, vegan, level };
};
const infoPills = (r) => {
  const info = deriveMeta(r);
  return `<div class="recipe-meta"><span>◷ ${r.time}</span><span>◈ ${info.level}</span><span>◌ ${info.sweet}</span><span>◉ ${info.temperature}</span><span>♧ Vegan: ${info.vegan}</span></div>`;
};
const draftIngredients = (r, info) => {
  const items = ["1 TL Matcha-Pulver", "60 ml heißes Wasser (ca. 80 °C)", "180 ml Milch oder pflanzlicher Drink", `Die Zutaten für: ${r.note}`];
  if (info.temperature === "Kalt") items.push("Eiswürfel");
  return items;
};
const draftSteps = (r, info) => {
  const cold = info.temperature === "Kalt";
  return [
    "Die geschmacksgebenden Zutaten vorbereiten und nach Wunsch fein pürieren oder verrühren.",
    "Matcha sieben, mit heißem Wasser anrühren und schaumig schlagen.",
    cold ? "Ein Glas mit Eis und Milch füllen." : "Milch erwärmen oder aufschäumen.",
    "Matcha langsam dazugeben, vorsichtig umrühren und direkt servieren."
  ];
};
const normalizeText = (s) => String(s == null ? "" : s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const searchRecipes = (list, query) => {
  const terms = normalizeText(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return list;
  return list.filter((r) => {
    const haystack = normalizeText([r.title, r.note, r.category, deriveMeta(r).level, r.time, ...(r.tags || []), ...(r.ingredients || []), ...(r.steps || [])].join(" "));
    return terms.every((t) => haystack.includes(t));
  });
};
const savedRecipes = () => JSON.parse(localStorage.getItem("matchly-saved") || "[]");
const toggleSaved = (id) => {
  const list = savedRecipes();
  const next = list.includes(id) ? list.filter((i) => i !== id) : [...list, id];
  localStorage.setItem("matchly-saved", JSON.stringify(next));
  return next;
};
const checkedIngredients = (id) => (JSON.parse(localStorage.getItem("matchly-checked") || "{}")[id] || []);
const toggleChecked = (id, idx) => {
  const all = JSON.parse(localStorage.getItem("matchly-checked") || "{}");
  const list = all[id] || [];
  all[id] = list.includes(idx) ? list.filter((i) => i !== idx) : [...list, idx];
  localStorage.setItem("matchly-checked", JSON.stringify(all));
  return all[id];
};
const similarRecipes = (r, n = 3) => RECIPES.filter((x) => x.category === r.category && x.id !== r.id).slice(0, n);
const detailMetaHTML = (r) => {
  const meta = deriveMeta(r);
  return `<div class="recipe-meta"><span>◷ ${r.time}</span><span>◈ ${meta.level}</span><span>◌ ${meta.sweet}</span><span>◉ ${meta.temperature}</span><span>♧ Vegan: ${meta.vegan}</span><span>◑ ${r.servings || "1 Glas"}</span></div>`;
};
const recipeDetailHTML = (r) => {
  const meta = deriveMeta(r);
  const isSaved = savedRecipes().includes(r.id);
  const description = r.description || r.note;
  const tagsHTML = r.draft ? "" : `<div class="detail-tags">${r.tags.map((t) => `<span>${t}</span>`).join("")}</div>`;
  const allergensHTML = (r.allergens && r.allergens.length) ? `<div class="detail-allergens"><strong>Allergene</strong>${r.allergens.map((a) => `<span>${a}</span>`).join("")}</div>` : "";
  const similar = similarRecipes(r);
  const similarHTML = similar.length ? `<section class="similar-recipes"><h3>Ähnliche Rezepte</h3><div class="similar-grid">${similar.map((s) => `<button class="similar-card ${s.color}" data-detail-open="${s.id}" aria-label="${s.title} öffnen"><span class="similar-emoji">${s.emoji}</span><strong>${s.title}</strong><small>◷ ${s.time} · ${s.category}</small></button>`).join("")}</div></section>` : "";
  const ingredients = r.draft ? draftIngredients(r, meta) : r.ingredients;
  const steps = r.draft ? draftSteps(r, meta) : r.steps;
  const checked = checkedIngredients(r.id);
  return `<div class="detail-hero ${r.color}"><span>${r.emoji}</span></div><div class="detail-body"><div class="detail-top"><div><p class="eyebrow">${r.category.toUpperCase()}${r.draft ? " · REZEPTENTWURF" : ""}</p><h2>${r.title}</h2></div><div class="detail-actions"><button class="detail-share" data-share-id="${r.id}" aria-label="${r.title} teilen">↗</button><button class="detail-heart ${isSaved ? "is-saved" : ""}" data-id="${r.id}" aria-label="${r.title} speichern">${isSaved ? "♥" : "♡"}</button></div></div><p class="detail-description">${description}</p>${detailMetaHTML(r)}${tagsHTML}<div class="detail-grid"><section><h3>Zutaten <small>für ${r.servings || "1 Glas"}</small></h3><ul>${ingredients.map((ing, idx) => `<li class="check-item${checked.includes(idx) ? " is-checked" : ""}"><label><input type="checkbox" data-recipe-id="${r.id}" data-check-idx="${idx}"${checked.includes(idx) ? " checked" : ""}><span>${ing}</span></label></li>`).join("")}</ul>${allergensHTML}</section><section><h3>Zubereitung</h3><ol>${steps.map((s) => `<li>${s}</li>`).join("")}</ol></section></div>${similarHTML}<p class="allergy-note">${r.draft ? "Testentwurf: Mengen und Schritte vor der Veröffentlichung bitte selbst testen und gegebenenfalls anpassen." : "Hinweis: Prüfe bei pflanzlichen Drinks, Sirupen und Toppings immer die Zutatenliste, besonders bei Allergien."}</p></div>`;
};
const showCopyToast = () => {
  let toast = document.querySelector(".share-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "share-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = "✓ Link in die Zwischenablage kopiert";
  toast.classList.add("show");
  clearTimeout(showCopyToast._t);
  showCopyToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
};
const shareRecipe = async (r) => {
  const url = `${location.origin}${location.pathname}#rezept-${r.id}`;
  if (navigator.share) {
    try { await navigator.share({ title: "Matchly", text: `${r.title} · ${r.note}`, url }); return; } catch (err) {}
  }
  try { await navigator.clipboard.writeText(url); showCopyToast(); } catch (err) {}
};
