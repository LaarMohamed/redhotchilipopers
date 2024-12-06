console.log("Hello world");

const organes = {
    "coeur" : "Le cœur et l'océan partagent plusieurs similitudes fascinantes. Tout comme l'océan qui fait circuler l'eau à travers ses courants, le cœur pompe le sang à travers le corps, maintenant ainsi la vie et l'équilibre. Les deux sont également soumis à des rythmes constants : le cœur bat à un tempo régulier, tout comme les vagues qui déferlent selon un cycle ininterrompu. De plus, ils sont essentiels à la santé de leur environnement, l'océan régulant le climat mondial, tandis que le cœur assure la distribution de l'oxygène et des nutriments aux organes vitaux. Enfin, tout comme les océans qui cachent des mystères sous leurs profondeurs, le cœur, souvent perçu comme un symbole d'émotion, dissimule en lui une complexité biologique encore peu comprise. avec coeur",
    "poumon" : "Les poumons et l'océan présentent des similitudes intéressantes. Tout comme l'océan régule l'équilibre climatique en échangeant des gaz avec l'atmosphère, les poumons échangent l'oxygène et le dioxyde de carbone avec l'air pour maintenir la vie. Les deux jouent un rôle crucial dans l'équilibre global : l'océan absorbe une grande partie du dioxyde de carbone, tandis que les poumons purifient le sang en éliminant les déchets gazeux. De plus, tout comme les vagues qui rythment l'océan, la respiration des poumons suit un cycle constant et vital. Enfin, les deux sont soumis à des pressions externes, comme les marées pour l'océan ou l'air que nous respirons pour les poumons, influençant leur fonctionnement et leur santé.",
    "bras" : "La peau et l'océan partagent plusieurs analogies intéressantes. Tout comme l'océan régule l'équilibre de la planète en absorbant et en libérant de l'eau, la peau maintient l'équilibre interne du corps en régulant la température et l'humidité. L'océan protège la Terre en agissant comme une barrière naturelle contre les éléments, tout comme la peau protège le corps contre les agressions extérieures telles que les infections, les rayons UV et la déshydratation. De plus, les deux sont des interfaces dynamiques entre l'intérieur et l'extérieur : l'océan échange des gaz et des éléments avec l'atmosphère, tandis que la peau permet l'échange de chaleur, d'humidité et de sensations avec notre environnement. Enfin, tout comme l'océan abrite une vie riche et variée, la peau contient également des millions de cellules et d'organismes microscopiques qui assurent sa fonction protectrice.",
    "oeil" : "L'œil et l'océan présentent des similitudes fascinantes, notamment dans leur rôle de perception et de connexion avec le monde extérieur. Tout comme l'océan reflète le ciel et les paysages autour de lui, l'œil capte la lumière et les images de notre environnement pour les transmettre au cerveau. L'océan, avec ses vagues en mouvement, peut être comparé aux pupilles qui s'ajustent pour capter la lumière, modifiant leur taille en fonction des conditions lumineuses. De plus, tout comme les océans peuvent être profonds et mystérieux, l'œil possède une complexité interne, avec la rétine et les nerfs optiques, qui permet de traiter une immense quantité d'informations visuelles. Enfin, l'œil, tout comme l'océan, peut être influencé par des éléments extérieurs comme la lumière, la météo ou les marées, montrant comment les deux réagissent aux forces du monde qui les entourent.",
    "foie" : "Le foie et l'océan présentent des similitudes notables dans leur rôle de filtration et de régulation. Tout comme l'océan filtre et régule les substances dissoutes dans l'eau, le foie purifie le sang en éliminant les toxines, les déchets et les substances indésirables. L'océan joue également un rôle crucial dans la gestion des cycles naturels, en régulant les gaz et les nutriments, tout comme le foie régule des fonctions essentielles comme le métabolisme des graisses, des protéines et des glucides. De plus, les deux sont des réservoirs vitaux : l'océan stocke une grande quantité d'eau, tandis que le foie stocke des nutriments et des vitamines nécessaires à l'organisme. Enfin, l'océan, malgré ses vastes étendues, peut subir des perturbations qui affectent son équilibre, tout comme le foie peut être endommagé par des toxines ou des maladies, compromettant ainsi son rôle essentiel.",
    "estomac" : "L'estomac et l'océan partagent des similitudes dans leur fonction de transformation et de gestion des ressources. Tout comme l'océan reçoit et transforme les eaux provenant de différents ruisseaux et rivières, l'estomac reçoit les aliments et les digère en les transformant en nutriments essentiels pour le corps. L'océan joue un rôle clé dans le cycle des éléments, tout comme l'estomac aide à l'absorption des nutriments et à l'élimination des déchets. De plus, les deux sont des environnements dynamiques : l'océan est en constant mouvement avec ses vagues et courants, tout comme l'estomac utilise des contractions pour mélanger et digérer les aliments. Enfin, l'estomac, comme l'océan, peut être perturbé par des éléments extérieurs, comme une alimentation déséquilibrée ou des polluants, affectant son équilibre et son fonctionnement.",
    "bouche" : "La bouche et l'océan ont des similitudes dans leur rôle d'entrée et de transformation. Tout comme l'océan accueille l'eau provenant des rivières, des pluies et des sources, la bouche est le point d'entrée des aliments et des liquides dans le corps. L'océan filtre et mélange les eaux, tout comme la bouche mastique et prépare les aliments pour la digestion. De plus, tout comme l'océan peut être un lieu de vie et d'échanges, la bouche abrite une flore bactérienne essentielle à la santé et à la digestion. Enfin, l'océan, influencé par le climat et les marées, et la bouche, influencée par les aliments et les soins bucco-dentaires, sont tous deux sensibles aux facteurs extérieurs qui affectent leur équilibre et leur fonctionnement."

}


function logClick(shape){
    console.log(shape);
}

function showPopup(text) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup-text').textContent = organes[text];
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
}