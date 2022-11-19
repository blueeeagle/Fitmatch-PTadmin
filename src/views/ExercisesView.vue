<template >
     <div class="splitlayout-1-2 exercises" >
        <div class="splitlayout-1 exercises-filters" >

            <div class="filter-scrollable">
                <div class="filter filter-training-type">
                    <h6 class="filter-label">{{$t('training_type')}}</h6>
                    <div class="filter-item form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="bodybuilding" value="false">
                        <label class="form-check-label ms-1" for="bodybuilding">{{$t('bodybuilding')}}</label>
                    </div>
                    <div class="filter-item form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="functional" value="false">
                        <label class="form-check-label ms-1" for="functional">{{$t('functional')}}</label>
                    </div>
                </div>

                <div class="filter label-filter ">
                    <h6 class="filter-label">{{$t('intensity_technique')}}</h6>
                    <div class="filter-items"> 
                        <span class="filter-item  filter-badge"  v-for="i in 10" >Item</span>
                    </div>
                </div>



                <div class="filter label-filter ">
                    <h6 class="filter-label">{{$t('area')}}</h6>
                    <div class="filter-items"> 
                        <span class="filter-item  filter-badge"  v-for="i in 10" >Item</span>
                    </div>
                </div>

            </div>

            <div class="filter-bottom-fixed d-grid gap-2">
                <button type="button" class="btn btn-primary text-nowrap ">{{$t('see_favorites')}}</button>
                <button type="button" class="btn btn-outline-primary text-nowrap ">{{$t('see_anamnesis')}}</button>
            </div>

        </div>
        <div class="splitlayout-2 exercises-list" >
            <div class="exercises-list-item border-bottom "  v-for="i in 10"   :class="{'selected': i == 1}" >
               <div class="exercises-list-item_detail">
                    <h6 class="item-name">Exercise name</h6>
                    <p class="item-description" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim voluptate numquam earum odio facilis quibusdam itaque quaerat rerum id provident nulla laudantium sequi eveniet culpa distinctio, eius corporis error.
                    </p>
               </div>
               <div class="exercises-list-item_video">
                    <img class="thumbnail" src="images/sample-exercise.png" alt="Thumbnail">
                    <a class="play-btn ps-abs-center" ><i class="bi bi-play-fill ps-abs-center"></i></a>
               </div>
               <div class="exercises-list-item_actions">
                    <div class="top-actions">
                        <div class="">
                            <p class="mb-0 fw-bold text-capitalize">{{$t('series')}}</p>
                            <span class="spinner" >
                                <a class="spinner-min text-black" ><i class="bi bi-dash-circle"></i></a>
                                <label class="spinner-value" >00</label>
                                <a class="spinner-inc  text-black" ><i class="bi bi-plus-circle"></i></a>
                            </span>
                        </div>
                        <a>
                            <i v-if="i == 1" class="bi bi-heart-fill app-color"></i>
                            <i v-else class="bi bi-heart"></i>

                        </a>
                    </div>
                    <button  type="button" class="btn add-btn" :class="i == 1 ? 'btn-danger text-white' : 'btn-outline-primary '" ><i v-if="i != 1" class="bi bi-plus"></i> {{i == 1  ? $t('added') : $t('add')}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ExercisesView",

}
</script>
<style lang="scss">
    .exercises {

        & &-filters {
            text-align: left;
            padding: 30px 10px;  
            
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

            & .filter-scrollable {
                height: calc(100% - 115px);
                overflow-y: auto;
                padding: 0 20px;
                margin-bottom: 30px;
            }

            & .filter-bottom-fixed  {
                padding: 0 20px;
                & .btn {
                    text-transform: capitalize;
                    min-width: 50%;
                    max-width: 80%;
                    width: auto;
                }
            }
        }

        & &-list {
            background-color: var(--bs-white);
            padding: 30px;
            &-item {
                display: flex;
                flex-direction: row;

                &.selected {
                    & .item-name {
                        color: var(--app-color-primary);
                        &::before {
                            content: '\F272';
                            font-family: 'bootstrap-icons';
                            vertical-align: -16%;
                            margin-right: 10px;
                        }
                    }
                }

                &_detail, &_video, &_actions {
                    width: 33%;
                    padding: 20px;
                }

                &_detail {
                   
                    & .item-name {
                        font-weight: bold;
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                    & .item-description {
                        text-align: justify;
                        display: -webkit-box;
                        max-width: fit-content;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;

                        color: var(--bs-gray);

                    }
                }

                &_video {
                    position: relative;

                    & .play-btn {
                        color: var(--bs-gray);
                        font-size: 3em;

                        border-radius: 50%;
                        background: var(--bs-gray-100);
                        height: 50px;
                        width: 50px;

                        cursor: pointer;
                        

                    }

                    & .thumbnail {
                        width: 100%;
                        height: auto;
                    }
                }

                &_actions {
                    display: flex;
                    flex-direction: column;

                    & .top-actions {
                        flex-grow: 1;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    & .add-btn {
                        width: 100%;
                        margin: auto;
                        text-transform: capitalize;
                    }
                }

               
            }
        }
    }
</style>