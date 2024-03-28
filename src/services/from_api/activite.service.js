export const activités = [
  { title: 'Piste de karting',
    image: 'https://www.circuitpaulricard.com/assets/evenements/938/fiche/2020_PaulRicard_KARTPACA-7820.jpg',
    summary: 'Découvrez la vitesse et l’adrénaline sur notre piste de karting.',
    price: 25,
    horaires: ['10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'], 
  },
  { title: 'Vol en hélicoptère',
    image: 'https://www.helipass.com/uploads/media/default/0001/02/5cf525a20a54b-mob9016-jpg.jpeg',
    summary: 'Survolez le circuit et vivez une expérience inoubliable.',
    price: 90,
    horaires: ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00', '18:30'], 
  },
  { title: 'Tour en bus',
    image: 'https://static.apidae-tourisme.com/filestore/objets-touristiques/images/26/161/9543962-diaporama.jpg',
    summary: 'Explore la piste avec confort dans notre bus.',
    price: 15,
    horaires: ['08:00', '12:00'], 
  },
  { title: 'Terrain de quad',
    image: 'https://c3.ywcdn.com/www.airvertical.fr/files/2022/01/800x600_QUAD.jpeg',
    summary: 'Découvrez de nouvelles sensations sur notre terrain de quad.',
    price: 25,
    horaires: ['10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'], 
  },
  // { title: 'Restauration',
  //   image: 'https://media.abcsalles.com/images/1/salles/900h/14361/circuit-paul-ricard-6.jpg',
  //   summary: 'Venez vous restaurer dans les différents snacs.',
  //   price: 50,
  //   horaires: ['11h30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45', '22:00'],
  // },
  { title: 'Concert',
    image: 'https://weezevent.com/wp-content/uploads/2018/08/27184142/organiser-un-concert-en-7-etapes.png',
    summary: 'Entre amis écoutez de musique lors des différents concerts.',
    price: 30,
    horaires: ['17:00', '20:00', '23:00'],
  },
  { title: "Feu d'artifice",
    image: 'https://cdn.visitjapan.ru/storage/app/media/Spot/6545/image/td2pki7buofscgn3essk.jpeg',
    summary: 'Fêtons le 14 juillet cette année au circuit paul ricard.',
    price: 5,
    horaires: ['00:00'],
  },
  // { title: 'Course des pilotes',
  //   image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/motorsport/circuits/EUROPE/valencia/2023/paul_d.jpg',
  //   summary: 'Regardez le grand prix entre les différents pilotes de course.',
  //   price: 50,
  //   horaires: ['09:00', '13:00', '15:00', '17:00', '19:00', '21:00'],
  // },
  { title: 'Bâptème de pilotage',
    image: 'https://media.cylex-locale.fr/companies/1426/5920/images/1707112535-img40_145988_large.jpg',
    summary: 'Même jeune tu peux venir conduire au circuit paul ricard.',
    price: 35,
    horaires: ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
  },
  { title: 'Simulation de conduite',
    image: 'https://xtrem-park.com/wp-content/uploads/2022/04/CPR-BOUTIQUE-SIMU-1.jpg',
    summary: "Conduire sans risque, c'est possible avec la simulation.",
    price: 4,
    horaires: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'],
  },
];

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
  horaires: ['22:00'],
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
  slots.push(`${String(endHour).padStart(2, '0')}:00`);
  return slots;
}  

export default {
  getAllActivites,
  getActiviteByName,
};