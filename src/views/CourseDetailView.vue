<template>
    <div class="course-detail" >
        <div class="course-detail_head" >
            <span class="course-detail_info" >
                    <Avatar :avatarText="'N'" /> 
                    <h5 class="mb-0 ms-2 fw-bold" >Name Surname</h5>
            </span>
            <span  class="course-detail_action" >
                <button type="button" class="btn btn-sm btn-primary" >{{$t('see_exercises')}}</button>
                <button type="button" class="btn btn-sm btn-danger text-white" >{{$t('see_favorites')}}</button>
                <button type="button" class="btn btn-sm btn-outline-primary" >{{$t('anamnesis')}}</button>
                <button type="button" class="btn btn-sm btn-link fw-bold" >{{$t('performance_history')}}</button>
            </span>
        </div>
        <hr />
        <div>
            <p class="text-transform-start">{{$t('from')}} <strong>dd/mm/yyyy</strong> {{$t('to')}} <strong>dd/mm/yyyy</strong>   </p>
        </div>


        <ul id="app-tabs" class="nav nav-tabs app-tabs" role="tablist">
        
            <li class="nav-item" v-for="(tab, index) in tabs" >
                <span class="nav-link" :class="{'active': index == 0}"  data-bs-toggle="tab" :data-bs-target="'#tab_'+index" role="tab" :aria-controls="'tab_'+index">
                    <span v-if="tab.isEdit" class="tab-box tab-input">
                        <input class="input" type="text" name="tab-name" id="tab-input" :placeholder="$t('enter_tab_name')" v-model="tab.name" />
                        <a class="tab-btn save-btn" :title="$t('change')" @click="cancelEditTabName(index)" ><i class="bi bi-check2"></i></a>
                        <a class="tab-btn delete-btn" :title="$t('do_not_change')" @click="cancelEditTabName(index)" ><i class="bi bi-x"></i></a>
                    </span>

                    <span v-else  class="tab-box" >
                        <span class="tab-name text-transform-start" >{{tab.name}}</span>
                        <span>
                            <a class="tab-btn edit-btn" :title="$t('change')" @click="editTabName(index)" ><i class="bi bi-pencil-fill"></i></a>
                            <a class="tab-btn delete-btn" :title="$t('do_not_change')" @click="deleteTab(index)" ><i class="bi bi-x-lg"></i></a>
                        </span>
                    </span>

                </span>
            
            </li>

            <span class="nav-action_btn">
                <a id="add_tab" class="btn-icon text-danger" @click="addTab()" ><i class="bi bi-plus-circle-fill"></i></a>

                <span v-if="tabs.length > 4" class="tab-nav-btn">
                    <a id="tab-nav-btn-left" class="btn-icon tab-nav-btn-left" @click="navTab('LEFT')" ><i class="bi bi-arrow-left-circle-fill"></i></a>
                    <a id="tab-nav-btn-right" class="btn-icon tab-nav-btn-left" @click="navTab('RIGHT')" ><i class="bi bi-arrow-right-circle-fill"></i></a>
                </span>
            </span>

        </ul>

        <div class="tab-content app-tabs-content" id="ptTabContent">
            <div class="tab-pane fade" :class="{'show active': index == 0}" v-for="(tab, index) in tabs" :id="'tab_'+index" role="tabpanel">
                
             
                <ul class="pt-item-list">
                    <li class="row p-0" :style="{'border-color': getRowColor(i)}" v-for="i in rowCount"  >
                        <span class="index" :style="{'color': getRowColor(i)}"   >{{i.toString().padStart(2, '0')}}</span>
                        <div class="col-12 p-0 pt-item-list-row  " v-for="j in 2" :style="{'border-color': getRowColor(i)}" >

                            <div class="card pt-item-card exercise-card" :style="{'border-color': getRowColor(i)}"  >
                                <div class="pt-item-card_header" >
                                    <span class="pt-item-card_header-title app-color" >Intensity</span>
                                    <span class="pt-item-card_header-action" >
                                        <a @click="videoPlayerOpen" ><i class="bi bi-play-circle"></i></a>
                                        <a><i class="bi bi-heart"></i></a>
                                    </span>
                                </div>
                                <div class="pt-item-card_body" >
                                    <p class="fs-small mb-1" >Area/Zone</p>
                                    <h4  class="fw-bold mb-1">Panca piana</h4>
                                    <p class="text-secondary text-truncate mb-1" >Exercise description</p>

                                   
                                </div>
                                <div class="pt-item-card_body-bottom-action" >
                                    <a @click="deleteExerciseModalOpen()"  ><i class="bi bi-trash"></i></a>
                                    <a @click="duplicateSeriesModalOpen()"><i class="bi bi-back"></i></a>
                                </div>
                            </div>

                            <div class="card pt-item-card repetition-card" :style="{'border-color': getRowColor(i)}" >
                                <div class="pt-item-card_header" >
                                    <span class="pt-item-card_header-title app-color" >Intensity</span>
                                   
                                </div>
                                <div class="pt-item-card_body" >
                                    <p class="fs-small mb-0" >Exercise name</p>
                                    <h5  class="">Ripetizioni</h5>

                                    <div class="value " >
                                        <span class="" >10</span>
                                        <span>
                                            <a><i class="bi bi-dash-circle"></i></a>
                                            <a><i class="bi bi-plus-circle"></i></a>
                                        </span>
                                    </div>

                                </div>
                               
                            </div>


                            <div class="card pt-item-card intensity-card" :style="{'border-color': getRowColor(i)}" >
                                <div class="pt-item-card_header" >
                                    <span class="pt-item-card_header-title app-color" >Intensity</span>
                                    
                                </div>
                                <div class="pt-item-card_body" >
                                    <p class="fs-small mb-0" >Exercise name</p>
                                    <h5  class="">Carico</h5>

                                    <div class="value mb-1" >
                                        <span class="" >90, <span class="value-small">00</span> </span>
                                    </div>

                                    <button class="btn btn-sm btn-primary px-3 fs-smaller" >Calcola</button>
                                </div>
                               
                            </div>
                            

                            <div class="card pt-item-card recovery-card" :style="{'border-color': getRowColor(i)}" >
                                <div class="pt-item-card_header bg-white" > </div>
                                <div class="pt-item-card_body" >
                                    
                                    <h5  class="mb-3 fw-bold">Recupero</h5>

                                    <div class="value " >
                                        <span class="" >10:00</span>
                                        <span>
                                            <a><i class="bi bi-dash-circle"></i></a>
                                            <a><i class="bi bi-plus-circle"></i></a>
                                        </span>
                                    </div>
                                </div>
                                <div class="pt-item-card_body-bottom-action mt-auto" >
                                    <a><i class="bi bi-trash"></i></a>
                                </div>
                               
                            </div>

                            <div class="card pt-item-card action-card">
                                <div class="pt-item-card_header" >
                                    Azioni
                                 
                                </div>
                                <div class="pt-item-card_body" >
                                    <ul class="action-card_buttons ">
                                        <li class="app-color " @click="exerciseModalOpen" >
                                            + <span class="text-capitalize" >{{$t('exercise')}}</span> 
                                        </li>
                                        <li class="text-primary text-transform-start">
                                            + <span class="text-capitalize" >{{$t('recovery')}}</span> 
                                        </li>
                                        <li class="purple-color text-transform-start">
                                           + <span class="text-capitalize" >{{$t('duplicate_series')}}</span> 
                                        </li>
                                        <li class="text-transform-start" >
                                          + <span class="text-capitalize" >{{$t('end_of_the_year')}}</span> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <a class="pt-item-list_row-add-button app-color" @click="addRow()" >
                        <i class="bi bi-plus-circle-fill"></i>
                    </a>

                </ul>
            
            </div>
        </div>
            

        <!-- Delete Exercise Confirmation Modal -->
        <ConfirmModal 
            :showModal="deleteExerciseModalVisibility" 
            @onConfirm="deleteExerciseModalClose" @onCancel="deleteExerciseModalClose" >
            <template v-slot:message>{{$t('do you want to eliminate the exercise?')}}</template>
            <template v-slot:confirmBtnText>{{$t('delete')}}</template>
        </ConfirmModal>

         <!-- Delete Exercise  Success / Fail Modal -->
        <MessageModal  :showModal="deleteExerciseModalMessageVisibility" @onClose="deleteExerciseMessageModalClose">
            <template v-slot:message>{{$t('the exercise has been eliminated')}}</template>
        </MessageModal>


         <!-- Duplicate series Confirmation Modal -->
         <ConfirmModal 
            :showModal="duplicateSeriesModalVisibility" 
            @onConfirm="duplicateSeriesModalClose" @onCancel="duplicateSeriesModalClose" >
            <template v-slot:message>{{$t('do you want to duplicate the series?')}}</template>
            <template v-slot:confirmBtnText>{{$t('delete')}}</template>
        </ConfirmModal>

         <!-- Duplicate series  Success / Fail Modal -->
        <MessageModal  :showModal="duplicateSeriesModalMessageVisibility" @onClose="duplicateSeriesMessageModalClose">
            <template v-slot:message>{{$t('the series was duplicated')}}</template>
        </MessageModal>

        <!-- Exerices Modal -->
        <Modal :showModal="exerciseModalVisibility" :modalDialogClass="'modal-xl'" @onClose="exerciseModalClose" >
            <template v-slot:content>
                <div style="height: 70vh" >
                    <ExerciseVue />
                </div>
            </template>
        </Modal>

        <!-- Video Player -->
        <ViemoPlayer :openPlayer="videoPlayerVisibilty"  @onClose="videoPlayerClose"  ></ViemoPlayer>
    </div>
</template>
<script>
import Avatar from '@/components/shared/Avatar.vue';
import ConfirmModal from '@/components/shared/ConfirmModal.vue';
import MessageModal from '@/components/shared/MessageModal.vue';
import Modal from '@/components/shared/Modal.vue';
import ExerciseVue from '@/views/ExercisesView.vue';
import ViemoPlayer from '@/components/shared/ViemoPlayer.vue';

import * as $ from 'jquery';

export default {
    name: 'CourseDetailView',
    components: {
        Avatar,
        ConfirmModal,
        MessageModal,
        Modal,
        ExerciseVue,
        ViemoPlayer
    },
    data() {
        return {
            tab_colors: ['#F72585', '#4361EE', '#7209B7'],
            rowCount: 3,
            tabs: [
                { 
                    id: 1,
                    name: 'monday',
                    isEdit: false
                },
                { 
                    id: 2,
                    name: 'tuesday',
                    isEdit: false
                },
                // { 
                //     id: 3,
                //     name: 'wednesday',
                //     isEdit: false
                // },
                // { 
                //     id: 4,
                //     name: 'thursday',
                //     isEdit: false
                // },
                // { 
                //     id: 5,
                //     name: 'friday',
                //     isEdit: false
                // },
                // { 
                //     id: 6,
                //     name: 'saturday',
                //     isEdit: false
                // },
                // { 
                //     id: 7,
                //     name: 'sunday',
                //     isEdit: false
                // }
            ],

            // Delete exercise 
            deleteExerciseModalVisibility: false,
            deleteExerciseModalMessageVisibility: false,

            // Duplicate series 
            duplicateSeriesModalVisibility: false,
            duplicateSeriesModalMessageVisibility: false,

            // Exercise Modal
            exerciseModalVisibility: false,

            // Video Player
            videoPlayerVisibilty: false,

        }
    },
    methods: {

        // Viddo player
        videoPlayerOpen() {
            this.videoPlayerVisibilty = true;
        },
        videoPlayerClose() {
            this.videoPlayerVisibilty = false;
        },

        // Tabs
        addTab() {
            this.tabs.push({ 
                id: this.tabs.length,
                name: 'Tab_' + this.tabs.length,
                isEdit: false
            })
            
            $('#app-tabs').animate( { scrollLeft: `+=${190 * this.tabs.length}` }, 1000);
        },
        deleteTab(index) {
            this.tabs.splice(index, 1)
        },
        editTabName(index) {
            this.tabs[index].isEdit = true;
            setTimeout(() => {
                $('#tab-input').focus();
            }, 100);

        },
        cancelEditTabName(index) {
            this.tabs[index].isEdit = false
        },
        navTab(dir) {
            if (dir == 'RIGHT') {
                $('#app-tabs').animate( { scrollLeft: '+=190' }, 1000);
            } else {
                $('#app-tabs').animate( { scrollLeft: '-=190' }, 1000);

            }
        },


        // Exercise delete
        deleteExerciseModalOpen() {
            this.deleteExerciseModalVisibility = true;
        },
        deleteExerciseModalClose() {
            this.deleteExerciseModalVisibility = false;
            this.deleteExerciseMessageModalOpen();
        },
        deleteExerciseMessageModalOpen() {
            this.deleteExerciseModalMessageVisibility = true;
        },
        deleteExerciseMessageModalClose() {
            this.deleteExerciseModalMessageVisibility = false;
        },

        // Duplicate series delete
        duplicateSeriesModalOpen() {
            this.duplicateSeriesModalVisibility = true;
        },
        duplicateSeriesModalClose() {
            this.duplicateSeriesModalVisibility = false;
            this.duplicateSeriesMessageModalOpen();
        },
        duplicateSeriesMessageModalOpen() {
            this.duplicateSeriesModalMessageVisibility = true;
        },
        duplicateSeriesMessageModalClose() {
            this.duplicateSeriesModalMessageVisibility = false;
        },

        // Exercise modal
        exerciseModalOpen() {
            this.exerciseModalVisibility = true;
        },
        exerciseModalClose() {
            this.exerciseModalVisibility = false;
        },

        // Workout row
        

        // Add row
        addRow() {
            this.rowCount++;
        },
        
        // Get Row color By Index
        getRowColor(index) {
            if (!index) return this.tab_colors[0];
            if (index % 2 == 0) {
                return this.tab_colors[1];
            } else {
                if (index % 3 == 0) {
                    return this.tab_colors[2];
                } else {
                    return this.tab_colors[0];
                }
            }
        }
    }
    
}
</script>
<style lang="scss">
    .course-detail {
        padding-top: 20px;
        height: 100%;
        & &_head, & &_info {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        & &_head {
            justify-content: space-between;
        }
        & &_action {
            & * {
                min-width: 150px;

                &:not(:last-child) {
                    margin-right: 20px;
                }
            }
           
        }
    }
    /* custom app tabs */
.app-tabs {
    flex-wrap: nowrap;
    overflow: hidden;
    border-bottom: none;
    max-width: calc(100% - 270px);
    align-items: center;
    
    position: relative;
    
    & .nav-item {
        // min-width: 190px;
        &:hover {
            .tab-btn.edit-btn {
                visibility: visible;
            }
        }
    }
    & .nav-link {
        box-shadow: 2px -3px 5px rgba(0, 0, 0, 0.04);
        border-radius: 0;
        min-width: 190px;

        & .tab-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        & .tab-name {
            color: var(--bs-gray);
            cursor: pointer;
        }
        &.active {
            box-shadow: 2px -3px 5px rgba(0, 0, 0, 0.06);
           
            & .tab-name {
                color: var(--bs-primary);
                font-weight: bold;
            }
            .tab-btn.edit-btn {
                visibility: visible;
            }
        }

        & .input {
            width: 100px;
            border: none;
            background-color: transparent;
        }
        & .tab-btn {
            font-size: 1em;
            margin-left: 10px;
            color: var(--bs-gray);
            cursor: pointer;
        }

        & .save-btn {
            &:hover {
                color: var(--bs-success);
            }
        }
        & .delete-btn {
            &:hover {
                color: var(--bs-danger);
            }
        }
        & .edit-btn {
            visibility: hidden;
            &:hover {
                color: var(--bs-primary);
            }
        }

    }

    & .nav-action_btn {
        position: sticky;
        right: 0;
        top: 0;
        width: 200px;
        padding: 2px 10px;
        background-color: var(--bs-gray-200);
        font-size: 1.4em;
        cursor: pointer;
        display: flex;
        margin-left: 5px;
        align-items: center;

        & .tab-nav-btn {
            display: flex;
            align-items: center;
            margin-left: 10px;
            &-left, &-right {
                color: var(--bs-gray-500);
                padding: 2px 5px;

                &:hover {
                    color: var(--bs-gray-600);
                }
            }
        }
    }
    &-content {
        background-color: var(--bs-white);
        width: calc(100% - 2px);
        height: calc(100% - 180px);
        margin: auto;
        padding: 20px;
        overflow-y: auto;

        & .pt-item-list {
            position: relative;

            &_row-add-button {
                font-size: 1.3em;
                position: absolute;
                bottom: 0;
                left: 10px;
            }

            & li {
                list-style: none;
                padding: 0;
                border-left: 4px solid black;
                position: relative;
                margin: 0;
                margin-bottom: 30px;

                & .index {
                    position: absolute;
                    top: -4px;
                    left: -40px;
                    font-weight: 700;
                    z-index: 10;
                    font-size: 1.2em;
                    width: max-content;
                    min-width: 30px;
                    padding: 0;
                    text-align: end;
                }

                & .pt-item-list-row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    &:not(:last-child) {
                        margin-bottom: 30px;
                    }
                   

                    & .pt-item-card {
                        height: 180px;
                        width: 170px;
                        border: none;
                        border-bottom: 4px solid black;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                        margin-left: 20px;
                    

                        &_header {
                            height: 40px;
                            padding: 10px;
                            background: var(--bs-gray-100);

                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;

                            &-title {
                                font-size: .8em;
                                font-weight: 700;
                            }
                            &-action {
                                & a {
                                    cursor: pointer;
                                    margin-left: 10px;
                                }
                            }
                        }
                        &_body {
                            padding: 10px;

                            &-bottom-action {
                                border-top: 2px solid #F9F9F9;
                                text-align: right;
                                padding: 10px;
                                & a {
                                    cursor: pointer;
                                    margin-left: 10px;
                                }
                            }

                            & .value {
                                font-size: 1.8em;
                                font-weight: 800;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                & .value-small {
                                    font-size: 0.8em;
                                    font-weight: 500;
                                }

                                & span:last-child {
                                    & a {
                                        cursor: pointer;
                                        margin-left: 10px;
                                    }
                                }
                            }
                        }
                    }


                    & .exercise-card {
                        width: 280px;
                    }

                    & .recovery-card {
                        & .pt-item-card_body {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between; 
                            padding-bottom: 0;
                        }
                    }

                    & .action-card {
                        transition: all 300ms ease-in;
                        -webkit-transition: all 300ms ease-in;
                        -moz-transition: all 300ms ease-in;
                        -o-transition: all 300ms ease-in;

                        visibility: hidden;
                        opacity: 0;

                        border-bottom: none;
                        & .pt-item-card_header {
                            height: 50px;
                            width: 100%;
                            font-size: 1.1em;
                            font-weight: 700;
                            align-self: center;
                            justify-content: center;
                        }
                        & .pt-item-card_body {
                            padding: 0;
                            & ul {
                                list-style: none;
                                padding: 0;

                                & li  {
                                    border: none;
                                    text-align: center;
                                    border-top: 2px solid #F9F9F9;
                                    padding: 7px 0;
                                    font-size: .8em;
                                    cursor: pointer;
                                    margin: 0;
                                }

                            }
                        }
                    }

                    &:hover .action-card {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }

        }
    }
   
}
</style>