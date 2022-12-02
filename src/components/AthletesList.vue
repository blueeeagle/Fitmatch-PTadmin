<template >
    <div class="athletes-list">
        <ul>
            <li v-for="athlete in athletesList" :key="athlete.userId"  @click="onSelectList(athlete)"  :class="{'selected': selectedAthlete && selectedAthlete.id == athlete.userId}" >
                <Avatar :avatarSize="'small'" :imageUrl="athlete.image" :avatarText="athlete.firstName" /> <span class="ms-2" >{{athlete.firstName}} &nbsp; {{athlete.lastName}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Avatar from '@/components/shared/Avatar.vue';

export default {
    name: 'AthletesList',
    props: {
        athletes: [],
        selectedAthlete: null
    },
    emits: ["onAthleteSelect"],
    components: {
        Avatar
    },
    data() {
        return {
            athletesList: []
        }
    },
    methods: {
       
        onSelectList(athlete) {
            this.$emit("onAthleteSelect", athlete)
        }
    },  
    watch: {
        athletes: function (newValue, oldValue) {
            this.athletesList = newValue;
       }
    }
}   
</script>
<style lang="scss">
    .athletes-list {
        height: calc(100% - 80px);
        overflow-y: auto;
        & ul {
            list-style: none;
            padding: 0;

            & li {
                display: flex;
                align-items: center;

                &:not(:last-child) {
                    margin-bottom: 20px;
                }

                &:hover, &.selected {
                    color: var(--app-color-primary);
                    cursor: pointer;
                }
            }
        }
    }
</style>