let heroImage = document.getElementById("hero-image");
let heroName = document.getElementById("hero-name");
let heroUniverse = document.getElementById("hero-universe");
let heroStats = document.getElementById("hero-stats");

let heroData;

async function loadHeroes() {
    let url = "https://akabab.github.io/superhero-api/api/all.json";
    try {
        let response = await fetch(url);
        heroData = await response.json();
        getRandomHero();
    } catch (error) {
        console.error("Ошибка при загрузке данных о героях:", error);
    }
}

function getRandomHero() {
    if (!heroData) return;

    let randomHero = heroData[Math.floor(Math.random() * heroData.length)];


    heroName.innerText = randomHero.name;
    heroUniverse.innerText = `Origin Universe: ${randomHero.biography.publisher || "Unknown"}`;
    heroImage.src = randomHero.images.md;

    heroStats.innerHTML = `
        <p class="hero-stat"><strong>Alignment:</strong> ${randomHero.biography.alignment}</p>
        <p class="hero-stat"><strong>Occupation:</strong> ${randomHero.work.occupation || "Unknown"}</p>
        <p class="hero-stat"><strong>Power:</strong> ${randomHero.powerstats.power || "Not Available"}</p>
        <p class="hero-stat"><strong>Strength Level:</strong> ${randomHero.powerstats.strength || "Unknown"}</p>
        <p class="hero-stat"><strong>Agility:</strong> ${randomHero.powerstats.speed || "N/A"}</p>
    `;
}
window.addEventListener("load", loadHeroes);
