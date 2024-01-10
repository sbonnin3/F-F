const activites = [
    {
        nom: 'Tour en bus',
        description: 'Découvrez le circuit en bus.',
        },
        {
        nom: 'Vol en hélicoptère',
        description: 'Vue aérienne du circuit en hélicoptère. Expérience unique ',
        },
        {
        nom: 'Karting',
        description: 'Faites la course sur notre piste de karting.',
        },
        {
        nom: 'Quad',
        description: 'Faite le plein de sensation avec nos Quads',
        },
        {
        nom: 'Concert',
        description: 'Découvrez les artistes qui mettront une ambiance de folie au circuit.',
        },
        {
        nom: "Feu d'artifice",
        description: "Cloturez votre journée en assistant à un magnifique feu d'artifice.",
        },
        {
        nom: 'Course des pilotes',
        description: 'Assistez à une course passionnante de voiture.',
        },
];

function getAllActivites() {
    return activites;
  }
  
  function getActiviteByName(nom) {
    return activites.find(activite => activite.nom === nom);
  }
  
  export default {
    getAllActivites,
    getActiviteByName,
  };


  //association activité / provider 