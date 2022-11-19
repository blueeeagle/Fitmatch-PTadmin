<template>
    <div class="modal fade message-modal" :id="modalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered"  :class="modalDialogClass ? modalDialogClass : ''" >
          <div class="modal-content">
              <div class="modal-body">
                 <div class="text-end" >
                      <button type="button" class="btn-close" aria-label="Close"  @click="onClose()" ></button>
                  </div>

                  <div class="content">
                    <slot name="content" ></slot>
                  </div>

              </div>
          </div>
      </div>
  </div>
</template>
<script>
import {Modal} from 'bootstrap';
import * as _ from 'lodash';

export default {
  name: 'Modal',
  emits: ["onClose"],
  props: {
      showModal: false,
      modalDialogClass: ''
  },
  data() {
      return {
          modal: null,
          modalId: 'modal_' + _.random(100),
          modalVisibility: false,
      }
  }, 
  methods: {
      openModal() {
          if (this.modal) this.modal.show();
      },
      closeModal() {
          if (this.modal) this.modal.hide();
      },
      toggleModal() {
          if (this.modalVisibility) {
              this.openModal();
          } else {
              this.closeModal();
          }
      },
      onClose() {
          this.$emit("onClose")
      }
  },
  mounted() {
      if (document.getElementById(this.modalId)) {
          this.modal = new Modal(document.getElementById(this.modalId))
      }
  },
  watch: {
     showModal: function (newValue, oldValue) {
          this.modalVisibility = newValue;
          this.toggleModal();
     }
  } 
}
</script>
<style lang="scss">
   .message-modal {

      & .modal-content {
          border-radius: 4px;

          & .content {
              text-align: center;
              padding: 30px 50px;

              & .message {
                  margin-bottom: 20px;
              }
          }
      }
  }   
</style>