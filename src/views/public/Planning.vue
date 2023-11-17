<template>
  <div class="content">
    <h1>Vous êtes sur la page : Planning</h1>
    <table>
      <thead>
        <tr>
          <th>Jour/Heure</th>
          <th v-for="timeSlot in timeSlots" :key="timeSlot">{{ timeSlot }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in days" :key="day">
          <td>{{ day }}</td>
          <td v-for="timeSlot in timeSlots" :key="timeSlot">
            <div class="time-slot-cell">
              <!-- Ajout de la case à cocher uniquement si les conditions sont remplies -->
              <input
                v-if="!((timeSlot.includes('Concert') || (timeSlot.includes('Feu d\'artifice')) && (day < '21:00' || day > '00:00')))"
                type="checkbox"
                :class="{ 'unchecked': !isChecked(day, timeSlot), 'checked': isChecked(day, timeSlot) }"
                @click="handleCheckboxClick(day, timeSlot)"
              />
              <!-- Contenu de la cellule du planning -->
              {{ timeSlot }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Planning',
  data() {
    return {
      days: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
      timeSlots: ['Tour en bus', 'Vol en hélicoptère', 'Karting', 'Quad', 'Concert', 'Feu d\'artifice', 'Course des pilotes'],
      checkedSlots: [],
    };
  },
  methods: {
    handleCheckboxClick(day, timeSlot) {
      const key = this.generateKey(day, timeSlot);
      if (this.checkedSlots.includes(key)) {
        this.checkedSlots = this.checkedSlots.filter(item => item !== key);
      } else {
        this.checkedSlots.push(key);
      }
      console.log(`Case à cocher cliquée : ${day} à ${timeSlot}`);
    },
    isChecked(day, timeSlot) {
      return this.checkedSlots.includes(this.generateKey(day, timeSlot));
    },
    generateKey(day, timeSlot) {
      return `${day}_${timeSlot}`;
    },
  },
};
</script>

<style scoped>
.content {
  /* styles pour le conteneur principal */
}

table {
  /* styles pour le tableau */
  width: 100%;
  border-collapse: collapse;
}

th, td {
  /* styles pour les cellules d'en-tête et de données */
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  /* styles spécifiques pour les cellules d'en-tête */
  background-color: #f2f2f2;
}

.time-slot-cell {
  /* styles pour les cellules du planning */
  cursor: pointer;
  /* Ajoutez d'autres styles selon vos besoins */
}

/* Styles spécifiques pour les cases à cocher */
input[type="checkbox"] {
  margin-right: 5px;
}

/* Styles conditionnels pour les cases à cocher */
input[type="checkbox"].unchecked {
  color: red;
}

input[type="checkbox"].checked {
  color: green;
}
</style>
