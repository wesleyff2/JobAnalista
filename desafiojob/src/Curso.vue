import Crud from './Crud.vue'
<template>
  <div class="flex-container">
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
    <b-button-group>  
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
      </b-button-group>
    <div>
          <button class="button"  v-b-modal.modal-1>Informações sobre o curso</button>
            <b-modal id="modal-1" title="Detalhes sobre o curso " ok-only>
                <template v-if="selected === 'Administração'"><p>Investimento inicial: R$ 5000,00 </p><p>Parcelas a partir de: R$ 700,00</p> </template>
                <template v-else-if="selected === 'Direito'"><p>Investimento inicial: R$ 3400,00</p> <p>Parcelas a partir de: R$ 200,00</p></template>
                <template v-else-if="selected === 'Enfermagem'"><p>Investimento inicial: R$ 8000,00</p> <p>Parcelas a partir de: R$ 100,00</p></template>
                <template v-else-if="selected === 'Biomedicina'"><p>Investimento inicial: R$ 5300,00</p> <p>Parcelas a partir de: R$ 600,00</p></template>
                <template v-else-if="selected === 'Farmácia'"><p>Investimento inicial: R$ 2000,00</p> <p>Parcelas a partir de: R$ 600,00</p></template>
                <template v-else-if="selected === 'Agronomia'"><p>Investimento inicial: R$ 2500,00</p> <p>Parcelas a partir de: R$ 700,00</p></template>
                <template v-else-if="selected === 'Bioquimica'"><p>Investimento inicial: R$ 5500,00</p> <p>Parcelas a partir de: R$ 700,00</p></template>
                <template v-else-if="selected === 'Educação'"><p>Investimento inicial: R$ 8000,00  Parcelas a partir de: R$ 300,00</p> </template>
          </b-modal>
    </div>
    <button class="button" v-b-modal.modal-2> Matricule-se </button>
              <b-modal id="modal-2" ref="modal" title="Matricule-se" 
                  @show="resetModal"
                  @hidden="resetModal"
                  @ok="handleOk">
                  <p>Curso selecionado: {{ selected }} </p>
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                        <b-form-group label="Nome" label-for="name-input" invalid-feedback="Nome é requerido." :state="nameState">
                          <b-form-input id="name-input" v-model="nome" :state="nameState" required>
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Endereço" label-for="endereco-input" invalid-feedback="Endereço é requerido." :state="endeState">
                          <b-form-input id="endereco-input" v-model="endereco" :state="endeState" required>
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Cep" label-for="cep-input" invalid-feedback="Cep é requerido." :state="cepState">
                          <b-form-input id="cep-input" v-model="cep" :state="cepState" required>
                          </b-form-input>
                        </b-form-group>
                        <b-form-group label="Cpf" label-for="cpf-input" invalid-feedback="Cpf é requerido." :state="cepState">
                          <b-form-input id="cep-input" v-model="cep" :state="cepState" required>
                          </b-form-input>
                        </b-form-group>
                          <p>Envie seus documentos</p>
                          <input type="file" @change="onFileSelected">
                          <button class="button2">Enviar arquivo</button>
                  </form>
              </b-modal>
</div>
</template>

<script>
import Crud from './Crud.vue'

  export default {
    data() {
      return {
        components: {'crud': Crud},
        picked: 'Presencial',
        selected: '',
        contador: 0,
        name: '',
        endereco: '',
        cep: '',
        nameState: null,
        endeState: null,
        cepState: null,
        cpf: null,
        selectedFile: null,
      }
    },
    validations: {
      cep: {
         
      cpf: {
    }
    },
    methods: {
      onFileSelected(event){
        this.selectedFile = event.target.files[0]
      },
      handleSubmit() {
         
          return
        }
    }
  }
}
</script>

<style>
    div{
      justify-content: center;
      margin: 5px;      
    }
    .flex-container {
      font-size:15px;
      justify-items: flex-end;
      position: center;
      width: 30%;
      align-self: center;
    }
    .button {
      border: 0.5px;
      color: rgb(0, 0, 0);
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 20px;
    }
    .button2 {
      margin: 4px 2px;
    }
    
</style>