const category=new URLSearchParams(location.search).get("category")||"Alle";
const info={Alle:["Alle Matchly-Rezepte","Entdecke alle kleinen Matcha-Momente an einem Ort."],Iced:["Iced & Fresh","Zehn eisgekühlte Matcha-Rezepte für sonnige Tage und frische Pausen."],Cremig:["Cremig & Sweet","Elf samtige Matcha-Kreationen für deinen gemütlichen Genussmoment."],Fruchtig:["Fruchtig","Zehn leichte, frische Matcha-Rezepte mit deinen Lieblingsfrüchten."],Wellness:["Wellness","Zehn bewusste Matcha-Momente, die einfach gut schmecken."]}[category]||["Rezepte","Matcha-Inspiration für dich."];
document.title=`${info[0]} — Matchly`;document.querySelector("#categoryTitle").textContent=info[0];document.querySelector("#categoryIntro").textContent=info[1];
const categoryRecipes=category==="Alle"?RECIPES:RECIPES.filter(r=>r.category===category);
let saved=savedRecipes();
const grid=document.querySelector("#categoryRecipeGrid"),modal=document.querySelector("#categoryRecipeDialog"),categorySearch=document.querySelector("#categorySearch"),emptyEl=document.querySelector("#categoryEmptyState");
function cardHTML(r){return `<article class="recipe-card" data-recipe-id="${r.id}" tabindex="0" role="button" aria-label="${r.title} öffnen"><div class="recipe-image ${r.color}"><span class="recipe-emoji">${r.emoji}</span><button class="heart ${saved.includes(r.id)?"is-saved":""}" data-id="${r.id}" aria-label="${r.title} speichern">${saved.includes(r.id)?"♥":"♡"}</button><span class="tag">${r.category}</span></div><div class="recipe-content"><h3>${r.title}</h3><span>${r.note}</span>${infoPills(r)}<button class="recipe-open" data-recipe-id="${r.id}">Rezept ansehen <b>→</b></button></div></article>`}
function renderCategory(){const q=categorySearch.value;const visible=q.trim()?searchRecipes(categoryRecipes,q):categoryRecipes;grid.innerHTML=visible.map(cardHTML).join("");emptyEl.hidden=visible.length>0}
function openCategoryRecipe(id){const r=RECIPES.find(item=>item.id===id);document.querySelector("#categoryRecipeDetail").innerHTML=recipeDetailHTML(r);modal.showModal()}
categorySearch.addEventListener("input",renderCategory);
grid.addEventListener("click",e=>{const heart=e.target.closest(".heart");if(heart){saved=toggleSaved(Number(heart.dataset.id));renderCategory();return}const card=e.target.closest("[data-recipe-id]");if(card)openCategoryRecipe(Number(card.dataset.recipeId))});
grid.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){const card=e.target.closest("[data-recipe-id]");if(card){e.preventDefault();openCategoryRecipe(Number(card.dataset.recipeId))}}});
document.querySelector("#closeCategoryRecipe").addEventListener("click",()=>modal.close());
document.querySelector("#categoryRanking").innerHTML=categoryRecipes.slice(0,5).map((recipe,index)=>`<li><b>${index+1}</b><strong>${recipe.title}</strong><span>♡ ${(14-index*2)}${index===0?"2":"8"}</span></li>`).join("");
renderCategory();
