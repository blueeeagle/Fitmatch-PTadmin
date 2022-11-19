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
            <div  class="athlete-info-head">
                <div class="athlete-info" >
                    <span v-if="selectAthlete" class="athlete-info_detail" >
                            <Avatar :avatarText="'N'" /> 
                            <h5 class="mb-0 ms-2 fw-bold" >Name Surname</h5>
                    </span>
                    <span v-else ></span>
                    <span  class="athlete-info_action  text-transform-start" >
                        <a v-if="selectAthlete" class="athlete-clear-btn me-3 "  @click="clearSelectedAthlete()" >{{$t('see_them_all')}}</a>
                        <button type="button" class="btn btn-sm btn-primary" @click="createCardModalOpen()" >{{$t('create_card')}}</button>
                    </span>
                </div>
                <hr v-if="selectAthlete" />
            </div>

            <div class="row courses-list adjust-height"  :class="{'mt-4': !selectAthlete}" >
                
                <div class="col-12 col-md-4" v-for="i in 50" >
                    <CourseCard @delete="deleteCourseModalOpen" @duplicate="duplicateCourseModalOpen" @click="navigateToCourseDetail" />
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
    <Modal  :showModal="duplicateCourseModalAssignVisibility"  @onClose="duplicateCourseAssignModalClose">
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
                    <button type="button" class="btn btn-sm btn-primary px-5" @click="duplicateCourseAssignModalClose()" >{{$t('assign')}}</button>
                </div>

           </div>
            
        </template>
    </Modal>

    <!-- Duplicate Success / Fail Modal -->
    <MessageModal  :showModal="duplicateCourseModalMessageVisibility"  @onClose="duplicateCourseMessageModalClose">
      
        <template v-slot:message>{{$t('the card has been duplicated')}}</template>

    </MessageModal>

    <!-- Create PT Card -->
    <Modal :showModal="createCardModalVisibility" :modalDialogClass="'modal-lg'" @onClose="createCardModalClose" >
        <template v-slot:content>
            <div class="text-start row g-4">
                <div class="col-12" >
                    <input id="card_name" type="text" class="form-control form-control-lg  borderless fw-bold" :placeholder="$t('enter_title')" >
                </div>
                <div class="col-12 ">
                    <h6 class="text-transform-start required">{{$t('card_type')}}</h6>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="create_card_assigned" value="false">
                        <label class="form-check-label text-transform-start ms-1" for="create_card_assigned">{{$t('assigned')}}</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="create_card_not_assigned" value="false">
                        <label class="form-check-label text-transform-start ms-1" for="create_card_not_assigned">{{$t('not_assigned')}}</label>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <label for="create_card_duration" class="form-label required  text-transform-start">{{$t('duration') + ' (' + $t('in_weeks')  + ')' }}</label>
                    <select id="create_card_duration" class="form-select" aria-label="Default select">
                        <option selected>{{$t('select')}}</option>
                    </select>
                </div>

                <div class="col-12 col-md-6">
                    <label for="create_card_athlete_name" class="form-label required  text-transform-start">{{$t('athlete_name')}}</label>
                    <select id="create_card_athlete_name" class="form-select" aria-label="Default select">
                        <option selected>{{$t('select')}}</option>
                    </select>
                </div>


                <div class="col-12 col-md-6">
                    
                    <v-date-picker v-model="date">
                        <template v-slot="{ inputValue, inputEvents }">
                            <label for="create_card_date" class="form-label required  text-transform-start">{{$t('date') }}</label>
                            <div class="input-group suffix">
                                <input class="form-control" :placeholder="$t('select_date')" aria-label="select_date" aria-describedby="select_date" :value="inputValue" v-on="inputEvents" />
                                <span class="input-group-text addon-suffix" id="select_date"><i class="bi bi-calendar-check"></i></span>
                            </div>
                        </template>
                    </v-date-picker>
                </div>

                <div class="col-12 col-md-6">
                    <label for="create_card_objective" class="form-label required  text-transform-start">{{$t('objective')}}</label>
                    <select id="create_card_objective" class="form-select" aria-label="Default select">
                        <option selected>{{$t('select')}}</option>
                    </select>
                </div>
                
                <div class="col-12 text-end mb-3" >
                    <button type="button" class="btn btn-sm btn-primary px-5" @click="createCardModalClose()" >{{$t('save')}}</button>
                </div>
            </div>
           
        </template>
    </Modal>

</template>
<script>
import AthletesList from '@/components/AthletesList.vue';
import CourseCard from '@/components/shared/CourseCard.vue';
import ConfirmModal from '@/components/shared/ConfirmModal.vue';
import MessageModal from '@/components/shared/MessageModal.vue';
import Modal from '@/components/shared/Modal.vue';
import Avatar from '@/components/shared/Avatar.vue';
import router from '@/router';

export default {
    name: 'AthletesView',
    data() {
        return {
            date: null,
            // Delete course 
            deleteCourseModalVisibility: false,
            deleteCourseModalMessageVisibility: false,

            // Duplicate course
            duplicateCourseModalVisibility: false,
            duplicateCourseModalAssignVisibility: false,
            duplicateCourseModalMessageVisibility: false,

            // Athlete List
            selectAthlete: null,

            // Create PT 
            createCardModalVisibility: false,
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
        },

        // Create Card
        createCardModalOpen() {
            this.createCardModalVisibility = true;
        },
        createCardModalClose() {
            this.createCardModalVisibility = false;
        },

        // Navigate to course detail
        navigateToCourseDetail() {
            router.push({path: 'courses/1'})
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

            &_action {
                .athlete-clear-btn {
                    font-weight: 700;
                    cursor: pointer;

                }
            }
            
        }
    }

</style>