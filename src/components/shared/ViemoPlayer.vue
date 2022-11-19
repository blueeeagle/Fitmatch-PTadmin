<template >
    <div class="modal fade video-modal" :id="modalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <button type="button" class="btn-close" aria-label="Close"  @click="onClose()" ></button>

      <div class="modal-dialog modal-dialog-centered modal-lg"  >
          <div class="modal-content">
            <div :id="'vimeo_'+modalId" class="vimeo-player " ></div>

          </div>
      </div>
  </div>
</template>
<script>
import Player from '@vimeo/player';
import {Modal} from 'bootstrap';
import * as _ from 'lodash';

export default {
    nme: 'ViemoPlayer',
    emits: ["onClose"],
    props: {
        openPlayer: false,
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
            this.playerInit();
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
        },
        playerInit() {
            const player = new Player('vimeo_'+this.modalId, {
                id: 765630395,
                // width: 640
                responsive: true
            });
        }
    },
    mounted() {
        if (document.getElementById(this.modalId)) {
            this.modal = new Modal(document.getElementById(this.modalId))
        }
    },
    watch: {
        openPlayer: function (newValue, oldValue) {
            this.modalVisibility = newValue;
            this.toggleModal();
        }
    } 
}
</script>
<style lang="scss">
   .video-modal {
        & .btn-close {
            position: absolute;
            top: 10px;
            right: 10px;
        }
      & .modal-content {
          border-radius: 4px;

          & .content {
            
          }
      }
  }   
</style>