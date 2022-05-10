//PRODUKTLISTE
let produktListe =
    [
        {
            "pid": "produkt1",
            "bildid": "pi1",
            "produktnummer": 101,
            "produktname": "Donut Pin",
            "sorte": "Schokolade",
            "preis": "CHF 15.-",
            "path": "../images/Donut_Pin_Schoko.jpg"
        },
        {
            "pid": "produkt2",
            "bildid": "pi2",
            "produktnummer": 102,
            "produktname": "Donut Pin",
            "sorte": "Erdbeere",
            "preis": "CHF 15.-",
            "path": "../images/Donut_Pin_Erdbeere.jpg"
        },
        {
            "pid": "produkt3",
            "bildid": "pi3",
            "produktnummer": 103,
            "produktname": "Donut Pin",
            "sorte": "Vanille",
            "preis": "CHF 15.-",
            "path": "../images/Donut_Pin_Vanille.jpg"
        },
        {
            "pid": "produkt4",
            "bildid": "pi4",
            "produktnummer": 104,
            "produktname": "Donut Tote Bag",
            "sorte": "Schokolade",
            "preis": "CHF 20.-",
            "path": "../images/Tote_Bag_Schoko.jpg"
        },
        {
            "pid": "produkt5",
            "bildid": "pi5",
            "produktnummer": 105,
            "produktname": "Donut Tote Bag",
            "sorte": "Erdbeere",
            "preis": "CHF 20.-",
            "path": "../images/Tote_Bag_Erdbeere.jpg"
        },
        {
            "pid": "produkt6",
            "bildid": "pi6",
            "produktnummer": 106,
            "produktname": "Donut Tote Bag",
            "sorte": "Vanille",
            "preis": "CHF 20.-",
            "path": "../images/Tote_Bag_Vanille.jpg"
        },
        {
            "pid": "produkt7",
            "bildid": "pi7",
            "produktnummer": 107,
            "produktname": "4er Donut-Box",
            "sorte": "Schokolade, Erbeere, Vanille, Caramel",
            "preis": "CHF 12.-",
            "path": "../images/Donut_Box_4.jpg"
        },
        {
            "pid": "produkt8",
            "bildid": "pi8",
            "produktnummer": 108,
            "produktname": "6er Donut-Box",
            "sorte": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
            "preis": "CHF 16.-",
            "path": "../images/Donut_Box_6.jpg"
        },
        {
            "pid": "produkt9",
            "bildid": "pi9",
            "produktnummer": 109,
            "produktname": "8er Donut-Box",
            "sorte": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
            "preis": "CHF 20.-",
            "path": "../images/Donut_Box_8.jpg"
        }
    ];
//PRODUKTE AUF DER KATALOGSEITE
//ZWEITE VERSION:
   produktListe.forEach(item => {
        let htmlObj = document.getElementById(item.pid);
        htmlObj.innerHTML =
            `<b>Produktname:</b> ${item.produktname} <br>`+
            `<b>Sorte:</b> ${item.sorte} <br>`+
            `<b>Preis:</b> ${item.preis} <br>`+
            `<b>Produktnummer:</b> ${item.produktnummer} <br>`;
        htmlObj = document.getElementById(item.bildid);
        htmlObj.src = item.path;
    })
//ERSTE VERSION:
/* for(let index=0;index < produktListe.length;index++){
     let htmlObj = document.getElementById(produktListe[index].pid);
     htmlObj.innerHTML =
         `<b>Produktname:</b> ${produktListe[index].produktname} <br>`+
         `<b>Farbe:</b> ${produktListe[index].farbe} <br>`+
         `<b>Preis:</b> ${produktListe[index].preis} <br>`+
         `<b>Produktnummer:</b> ${produktListe[index].produktnummer} <br>`;
     htmlObj = document.getElementById(produktListe[index].bildid);
     htmlObj.src = produktListe[index].path;
 }*/







