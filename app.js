let allProducts = [];
let filteredProducts = [];
let lineChart, pieChart;

const months = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sep", "Oct", "Nov", "Déc"
];

function loadData() {
    fetch('ventes.json')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            setupCategories();
            filterProducts();
        });
}

function setupCategories() {
    const select = document.getElementById('categoryFilter');
    const categories = [...new Set(allProducts.map(p => p.categorie))];
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });
    select.addEventListener('change', filterProducts);
}

function filterProducts() {
    const cat = document.getElementById('categoryFilter').value;
    filteredProducts = (cat === "all") ? allProducts : allProducts.filter(p => p.categorie === cat);
    displayProducts();
    displayStats();
    drawCharts();
}

function displayProducts() {
    const div = document.getElementById('products');
    div.innerHTML = '';
    filteredProducts.forEach(prod => {
        div.innerHTML += `
            <div class="product-card">
                <img src="images/${prod.image}" alt="${prod.nom}">
                <h3>${prod.nom}</h3>
                <div>Prix : ${prod.prix} DH</div>
                <div>Catégorie : ${prod.categorie}</div>
            </div>
        `;
    });
}

function displayStats() {
    let html = '';
    filteredProducts.forEach(prod => {
        const totalVentes = prod.ventes_mensuelles.reduce((a, b) => a + b, 0);
        const chiffreAnnuel = totalVentes * prod.prix;
        html += `<div><b>${prod.nom}</b> - Chiffre d'affaires annuel : ${chiffreAnnuel} DH</div>`;
    });
    // Produit le plus vendu
    if (filteredProducts.length > 0) {
        const best = filteredProducts.reduce((max, p) =>
            (p.ventes_mensuelles.reduce((a, b) => a + b, 0) > max.ventes_mensuelles.reduce((a, b) => a + b, 0)) ? p : max
        );
        html += `<div style="margin-top:10px;"><b>Produit le plus vendu :</b> ${best.nom}</div>`;
    }
    document.getElementById('stats').innerHTML = html;
}

function drawCharts() {
    // Détruire les anciens graphiques s'ils existent
    if (lineChart) lineChart.destroy();
    if (pieChart) pieChart.destroy();

    // Données du graphique en ligne
    const datasets = filteredProducts.map(prod => ({
        label: prod.nom,
        data: prod.ventes_mensuelles.map(v => v * prod.prix),
        fill: false,
        borderColor: randomColor(),
        tension: 0.2
    }));

    const ctxLine = document.getElementById('lineChart').getContext('2d');
    lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: months,
            datasets: datasets
        },
        options: {
            plugins: { title: { display: true, text: "Évolution du chiffre d'affaires mensuel" } }
        }
    });

    // Données du graphique circulaire
    const pieLabels = filteredProducts.map(p => p.nom);
    const pieData = filteredProducts.map(p => p.ventes_mensuelles.reduce((a, b) => a + b, 0) * p.prix);
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: pieLabels,
            datasets: [{
                data: pieData,
                backgroundColor: pieLabels.map(() => randomColor())
            }]
        },
        options: {
            plugins: { title: { display: true, text: "Répartition du chiffre d'affaires annuel par produit" } }
        }
    });
}

function randomColor() {
    // Couleur aléatoire
    return `hsl(${Math.floor(Math.random()*360)},70%,60%)`;
}

window.onload = loadData; 