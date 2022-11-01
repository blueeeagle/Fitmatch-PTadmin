<template>
      <div class="modal fade message-modal" :id="modalId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                   <div class="text-end" >
                        <button type="button" class="btn-close" aria-label="Close"  @click="onClose()" ></button>
                    </div>

                    <div class="content">
                        <h5   class="message text-transform-start">
                            <slot name="message" ></slot>
                        </h5>

                        <div class="buttons">
                            <button class="btn btn-sm btn-primary me-3"  @click="onClose()" >{{$t('close')}}</button>
                        </div>
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
    name: 'MessageModal',
    emits: ["onClose"],
    props: {
        showModal: false,
    },
    data() {
        return {
            modal: null,
            modalId: 'messageModal_' + _.random(100),
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