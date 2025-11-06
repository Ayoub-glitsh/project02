# 📊 Analyse des Ventes du Magasin

Une application web interactive pour visualiser et analyser les données de ventes d'un magasin d'électronique et d'informatique.

---

## 🚀 Fonctionnalités

- **Affichage des produits** : Visualisation des produits avec images, prix et catégories  
- **Filtrage par catégorie** : Filtrage dynamique des produits par catégorie  
- **Statistiques détaillées** : Calcul du chiffre d'affaires annuel par produit  
- **Graphiques interactifs** :
  - Graphique linéaire : Évolution du chiffre d'affaires mensuel  
  - Graphique circulaire : Répartition du chiffre d'affaires annuel  
- **Identification du produit le plus vendu**

---

## 📁 Structure du Projet

```bash
projet-ventes/
│
├── index.html          # Page principale
├── style.css           # Feuille de style
├── app.js              # Logique JavaScript
├── ventes.json         # Données des produits et ventes
└── images/             # Dossier des images produits
    ├── laptop.jfif
    ├── smartphone.jpg
    ├── tv.webp
    ├── tablet.png
    └── speaker.jfif

```
---

## 🛠️ Technologies Utilisées

- **HTML5** : Structure de la page  
- **CSS3** : Styles et mise en page responsive  
- **JavaScript (ES6)** : Logique interactive  
- **Chart.js** : Bibliothèque de graphiques  
- **JSON** : Format de données  

---

## ⚙️ Installation et Utilisation

### 1. Télécharger les fichiers :
```bash
git clone https://github.com/Ayoub-glitsh/project02.git
```

### 2. Ouvrir le projet :
- Placez tous les fichiers dans le même dossier  
- Assurez-vous que le dossier `images/` contient les images des produits  

### 3. Lancer l'application :
- Ouvrez `index.html` dans un navigateur web  
- Aucune installation supplémentaire requise  

---

## 📊 Données des Produits

Le fichier `ventes.json` contient les données suivantes pour chaque produit :

- `reference` : Code référence du produit  
- `nom` : Nom du produit  
- `prix` : Prix en Dirhams Marocains (DH)  
- `image` : Nom du fichier image  
- `categorie` : Catégorie du produit  
- `ventes_mensuelles` : Tableau des ventes mensuelles (12 mois)  

---

## 🎯 Catégories Disponibles

- **Informatique** : Ordinateurs portables, smartphones, tablettes  
- **Électronique** : Téléviseurs  
- **Accessoires** : Casques audio, enceintes Bluetooth  

---

## 📈 Fonctionnalités des Graphiques

### 📉 Graphique Linéaire
- Affiche l'évolution du chiffre d'affaires mensuel  
- Une courbe par produit  
- **Axe X** : Mois de l'année (Janvier à Décembre)  
- **Axe Y** : Chiffre d'affaires en Dirhams (DH)  

### 🥧 Graphique Circulaire
- Montre la répartition du chiffre d'affaires annuel  
- Segment par produit  
- Indique le pourcentage de contribution de chaque produit  

---

## 🌐 Compatibilité

- Compatible avec tous les navigateurs modernes  
- Design responsive pour ordinateurs, tablettes et mobiles  
- Nécessite une connexion Internet pour charger Chart.js (via CDN)  

---

## 📝 Personnalisation

Pour modifier les données :
1. Éditez le fichier `ventes.json`  
2. Ajoutez de nouvelles catégories dans le sélecteur  
3. Modifiez les images dans le dossier `images/`  

---

## 👨‍💻 Développement

Pour étendre les fonctionnalités :
- Ajouter de nouveaux types de graphiques (ex : barres, radar)  
- Implémenter l’export des données (CSV ou PDF)  
- Ajouter des filtres supplémentaires (prix, période, popularité)  

---

## 📄 Licence

📘 **Projet éducatif - Libre d'utilisation**  
Tu peux modifier, utiliser et partager le projet à des fins d’apprentissage.

