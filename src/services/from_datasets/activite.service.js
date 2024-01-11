const activites = [
    {
        nom: 'Tour en bus',
        description: 'Découvrez le circuit en bus.',
        providerId: '10', 
        horaires: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'], 
        },
        {
        nom: 'Vol en hélicoptère',
        description: 'Vue aérienne du circuit en hélicoptère. Expérience unique ',
        providerId: '11',
        horaires: ['11:00', '12:30', '13:30', '14:30', '15:30', '16:30'], 
        },
        {
        nom: 'Karting',
        description: 'Faites la course sur notre piste de karting.',
        providerId: '12',
        horaires: generateHalfHourlySlots(9, 17), 
        },
        {
        nom: 'Quad',
        description: 'Faite le plein de sensation avec nos Quads',
        providerId: '13',
        horaires: generateHalfHourlySlots(9, 17), 
        },
        {
        nom: 'Concert',
        description: 'Découvrez les artistes qui mettront une ambiance de folie au circuit.',
        providerId: '14', 
        horaires: ['12:00', '14:00', '16:00', '18:00'], 
        },
        {
        nom: "Feu d'artifice",
        description: "Cloturez votre journée en assistant à un magnifique feu d'artifice.",
        providerId: '15',
        horaires: ['22:00'], // Un seul horaire
        },
        {
        nom: 'Course des pilotes',
        description: 'Assistez à une course passionnante de voiture.',
        providerId: '16',
        horaires: ['13:00', '15:00', '17:00', '19:00', '20:00'], 
        },
];

function getAllActivites() {
    return activites;
  }
  
  function getActiviteByName(nom) {
    return activites.find(activite => activite.nom === nom);
  }
  
  function generateHalfHourlySlots(startHour, endHour) {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`, `${String(hour).padStart(2, '0')}:30`);
    }
    slots.push(`${String(endHour).padStart(2, '0')}:00`); // Ajoutez l'heure de fin sans les 30 minutes
    return slots;
  }  
  
  export default {
    getAllActivites,
    getActiviteByName,
  };


  //association activité / provider 