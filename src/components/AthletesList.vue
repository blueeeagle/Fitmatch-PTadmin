<template >
    <div class="athletes-list">
        <ul>
            <li v-for="athlete in athletes"  @click="onSelectList(athlete)"  >
                <Avatar :avatarSize="'small'" :imageUrl="athlete.profilepic" :avatarText="athlete.name" /> <span class="ms-2" >{{athlete.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { getAthletes } from '@/services/AthletesService.js';
import Avatar from '@/components/shared/Avatar.vue';

export default {
    name: 'AthletesList',
    emits: ["onAthleteSelect"],
    components: {
        Avatar
    },
    data() {
        return {
            athletes: []
        }
    },
    methods: {
        async fetchAthletes() {
            let result = await getAthletes();
            for (let i = 0; i < 5; i++) {
                result.data[i]['profilepic'] = `https://i.pravatar.cc/250?u=${result.data[i].email}`
            }
            if (result.success) this.athletes = result.data;
            console.log(this.athletes )
        },
        onSelectList(athlete) {
            this.$emit("onAthleteSelect", athlete)
        }
    },  
    mounted() {
        this.fetchAthletes();
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