<template>



  <div>
    <p>Escolha a modalidade</p>
    <input type="radio" id="one" value="Presencial" v-model="picked">
          <label for="one">Presencial</label>
      <br>
          <input type="radio" id="two" value="EAD" v-model="picked">
          <label for="two">EAD</label>
      <br>
        <input type="radio" id="two" value="Hibrido" v-model="picked">
        <label for="two">Hibrido</label>
      <br>
      
    <template v-if="picked === 'Presencial'">
        <select v-model="selected">
            <option disabled value="">Escolha um Curso</option>
            <option>Administração</option>
            <option>Direito</option>
            <option>Enfermagem</option>
        </select>
    </template>

    <template v-else-if="picked === 'EAD'">
       <select v-model="selected">
            <option disabled value="">Escolha um Curso</option>
            <option>Contabilidade</option>
            <option>Biomedicina</option>
            <option>Farmácia</option>
       </select>
    </template>

    <template v-else-if="picked === 'Hibrido'">
      <select v-model="selected">
            <option disabled value="">Escolha um Curso</option>
            <option>Agronomia</option>
            <option>Bioquimica</option>
            <option>Educação</option>
      </select>
    </template>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        picked: 'Presencial',
        selected: '',
        contador: 0
      }
    }
  }
</script>

<style>

</style>