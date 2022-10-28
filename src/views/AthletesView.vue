<template >
    <div class="splitlayout-1-2 athletes" >
        <div class="splitlayout-1 athletes-list-container" >
            <h5 class="fw-bold text-capitalize" >{{$t('athletes_list')}}</h5>
            <hr/>
            <AthletesList ></AthletesList>
        </div>
        <div class="splitlayout-2 " >
            <div class="row athlete">
                <div class="col-sm-12 col-md-8 athlete-detail ">
                    <div class="athlete-name mb-3" > 
                        <Avatar :avatarText="'N'" /> 
                        <h5 class="mb-0 ms-2 fw-bold" >Name Surname</h5>
                    </div>
                    <div class="row g-3 athlete-cards" >
                        <div class="col-sm-12 col-md-4" >
                            <div class="card athlete-card ">
                                <p class="athlete-card-title border-bottom">{{$t('years')}}</p>
                                <p class="athlete-card-data  " >32</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('last_session')}}</p>
                                <p class="athlete-card-data  " >2 giorni fa</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('sessions_remained')}}</p>
                                <p class="athlete-card-data  " >8/30</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('sex')}}</p>
                                <p class="athlete-card-data  " >Maschio</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('level')}}</p>
                                <p class="athlete-card-data  " >Avanzato</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('start_date')}}</p>
                                <p class="athlete-card-data  " >gg/mm/aaaa</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('weight')}}</p>
                                <p class="athlete-card-data  " >82Kg</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-8">
                            <div class="card athlete-card">
                                <p class="athlete-card-title border-bottom">{{$t('objective')}}</p>
                                <p class="athlete-card-data  " >Perdita di peso</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-sm-12 col-md-4 athlete-courses">
                    <p class="fw-bold text-capitalize mb-0 my-3">{{$t('courses')}}</p>
                    <hr />
                    <div class="athlete-courses-list pe-2">
                        <CourseCard class=" mb-3"   v-for="i in 5" />
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AthletesList from '@/components/AthletesList';
import Avatar from '@/components/shared/Avatar.vue';
import CourseCard from '@/components/shared/CorseCard.vue';

export default {
    name: 'AthletesView',
    components: {
        AthletesList,
        Avatar,
        CourseCard
    }
}
</script>
<style lang="scss">
    .athletes {
        &-list-container {
            padding: 30px 30px 0px 30px;
            text-align: left;
        }
    }
    .athlete {
        margin: 20px 0 0 20px;
        height: calc(100% - 20px);

        & &-detail {

            height: 100%;
            // overflow-y: auto;

            & .athlete-name {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            & .athlete-cards {

                max-height: calc(100% - 80px);
                overflow-y: auto;

                & .athlete-card {
                    text-align: left;

                    &-title {
                        color: var(--bs-secondary);
                        font-weight: bold;
                        text-transform: capitalize;
                        padding: 10px;
                        margin-bottom: 0;

                    }

                    &-data {
                        color: var(--bs-black);
                        font-weight: bold;
                        text-transform: capitalize;
                        padding: 10px;
                        margin-bottom: 0;

                        font-size: 1.2em;

                    }
                }
                
            }
        }

        & &-courses {
            text-align: left;
            height: 100%;

            &-list {
                height: calc(100% - 80px);
                overflow-y: auto;
            }
        }
    }
    
</style>