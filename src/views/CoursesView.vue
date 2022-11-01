<template lang="">
    <div class="splitlayout-1-2 courses" >
        <div class="splitlayout-1 filters" >

            <div class="filter courses-filter-types">
                <h6 class="filter-label">{{$t('card_type')}}</h6>
                <div class="filter-item form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="assigned" value="false">
                    <label class="form-check-label ms-1" for="assigned">{{$t('assigned')}}</label>
                </div>
                <div class="filter-item form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="not_assigned" value="false">
                    <label class="form-check-label ms-1" for="not_assigned">{{$t('not_assigned')}}</label>
                </div>
            </div>

            <div class="courses-athletes-list" >
                <h5 class="fw-bold text-capitalize" >{{$t('athletes_list')}}</h5>
                <hr/>
                <AthletesList class="athletes-list" @onAthleteSelect="onAthleteSelectHandler"  ></AthletesList>
            </div>
        </div>
        <div class="splitlayout-2 " >
            <div v-if="selectAthlete" class="athlete-info-head">
                <div class="athlete-info" >
                    <span class="athlete-info_detail" >
                            <Avatar :avatarText="'N'" /> 
                            <h5 class="mb-0 ms-2 fw-bold" >Name Surname</h5>
                    </span>
                    <a class="athlete-clear-btn text-transform-start "  @click="clearSelectedAthlete()" >{{$t('see_them_all')}}</a>
                </div>
                <hr />
            </div>

            <div class="row courses-list"  :class="{'adjust-height': selectAthlete}" >
                <div class="col-12 col-md-4" v-for="i in 50" >
                    <CourseCard @delete="deleteCourseModalOpen" @duplicate="duplicateCourseModalOpen" />
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <ConfirmModal 
        :showModal="deleteCourseModalVisibility" 
        @onConfirm="deleteCourseModalClose" @onCancel="deleteCourseModalClose" >
        <template v-slot:message>{{$t('do you want to delete the card?')}}</template>
        <template v-slot:confirmBtnText>{{$t('delete')}}</template>
    </ConfirmModal>

    <!-- Delete Success / Fail Modal -->
    <MessageModal  :showModal="deleteCourseModalMessageVisibility" @onClose="deleteCourseMessageModalClose">
        <template v-slot:message>{{$t('the card has been removed')}}</template>
    </MessageModal>

    <!-- Duplicate Confirmation Modal -->
    <ConfirmModal 
        :showModal="duplicateCourseModalVisibility" 
        @onConfirm="duplicateCourseModalClose" @onCancel="duplicateCourseModalClose" >
        <template v-slot:message>{{$t('do you want to duplicate the card?')}}</template>
        <template v-slot:confirmBtnText>{{$t('duplicate')}}</template>

    </ConfirmModal>

    <!-- Duplicate Assign Modal -->
    <Modal  :showModal="duplicateCourseModalAssignVisibility" @onClose="duplicateCourseAssignModalClose">
        <template v-slot:content>
           <div class="text-start">
                <h5 class="message text-transform-start fw-bold">{{$t('card_assignment')}}</h5>
                <div class="filter-item form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="non_assigned_form" value="false">
                    <label class="form-check-label ms-1 text-transform-start" for="non_assigned_form">{{$t('not_assigned')}}</label>
                </div>

                <div class="mt-3 mb-3">
                    <label for="athlete_select_input" class="form-label required  text-transform-start">{{$t('athlete_name')}}</label>
                    <select id="athlete_select_input" class="form-select" aria-label="Default select example">
                        <option selected>{{$t('select')}}</option>
                    </select>
                </div>

                <div class="text-end mb-3" >
                    <button class="btn btn-sm btn-primary px-5" @click="duplicateCourseAssignModalClose()" >{{$t('assign')}}</button>
                </div>

           </div>
            
        </template>
    </Modal>

    <!-- Duplicate Success / Fail Modal -->
    <MessageModal  :showModal="duplicateCourseModalMessageVisibility" @onClose="duplicateCourseMessageModalClose">
      
        <template v-slot:message>{{$t('the card has been duplicated')}}</template>

    </MessageModal>

</template>
<script>
import AthletesList from '@/components/AthletesList.vue';
import CourseCard from '@/components/shared/CorseCard.vue';
import ConfirmModal from '@/components/shared/ConfirmModal.vue';
import MessageModal from '@/components/shared/MessageModal.vue';
import Modal from '@/components/shared/Modal.vue';
import Avatar from '@/components/shared/Avatar.vue';

export default {
    name: 'AthletesView',
    data() {
        return {
            // Delete course 
            deleteCourseModalVisibility: false,
            deleteCourseModalMessageVisibility: false,

            // Duplicate course
            duplicateCourseModalVisibility: false,
            duplicateCourseModalAssignVisibility: false,
            duplicateCourseModalMessageVisibility: false,

            // Athlete List
            selectAthlete: null
        }
    },   
    components: {
        AthletesList,
        Avatar,
        CourseCard,
        ConfirmModal,
        MessageModal,
        Modal
    },
    methods: {
        // Delete Modals
        deleteCourseModalOpen() {
            this.deleteCourseModalVisibility = true;
        },
        deleteCourseModalClose() {
            this.deleteCourseModalVisibility = false;
            this.deleteCourseMessageModalOpen();
        },
        deleteCourseMessageModalOpen() {
            this.deleteCourseModalMessageVisibility = true;
        },
        deleteCourseMessageModalClose() {
            this.deleteCourseModalMessageVisibility = false;
        },

        // Duplicate Modals
        duplicateCourseModalOpen() {
            this.duplicateCourseModalVisibility = true;
        },
        duplicateCourseModalClose() {
            this.duplicateCourseModalVisibility = false;
            this.duplicateCourseAssignModalOpen();
        },
        duplicateCourseAssignModalOpen() {
            this.duplicateCourseModalAssignVisibility = true;
        },
        duplicateCourseAssignModalClose() {
            this.duplicateCourseModalAssignVisibility = false;
            this.duplicateCourseMessageModalOpen();
        },
        duplicateCourseMessageModalOpen() {
            this.duplicateCourseModalMessageVisibility = true;
        },
        duplicateCourseMessageModalClose() {
            this.duplicateCourseModalMessageVisibility = false;
        },

        // On Athlete Select
        onAthleteSelectHandler(athlete) {
            this.selectAthlete = athlete;
        },
        clearSelectedAthlete() {
            this.selectAthlete = null
        }
    },
}
</script>
<style lang="scss">
    @import 'bootstrap/scss/_functions';
    @import 'bootstrap/scss/_variables';
    @import 'bootstrap/scss/mixins';

    .courses {
        & .filters {
                padding: 30px 30px 0px 30px;

            & .filter {
                &:not(:last-child) {
                    margin-bottom: 20px;
                }

                &-label  {
                    font-weight: bold;
                    text-transform: capitalize;
                    margin-bottom: 15px;
                }

                &-items {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px 20px;
                }

                &-item {
                    text-transform: capitalize;
                }

                &-badge {
                    border: 1px solid var(--bs-primary);
                    color: var(--bs-primary);
                    border-radius: 20px;
                    padding: 0px 25px;
                    cursor: pointer;

                    &:hover, &.active {
                        background-color: var(--bs-primary);
                        color: var(--bs-white);
                        
                    }
                }
            }
        }


        & .courses-athletes-list {
            height: calc(100% - 80px);

            & .athletes-list {
                overflow-y: auto;
            }

            @include media-breakpoint-down(xl) {
                & {
                    height: calc(100% - 120px);
                }
            }


        }

        & .courses-list {
            padding: 30px;
            margin: auto;
            overflow-y: auto;
            height: 100%;

            &.adjust-height {
                padding-top: 0px;
                height: calc(100% - 120px);
            }
        }


        & .athlete-info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            &_detail {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            &-head {
                padding: 30px 30px 0px 30px;
            }

            & .athlete-clear-btn {
                font-weight: 700;
                cursor: pointer;
            }
        }
    }

</style>