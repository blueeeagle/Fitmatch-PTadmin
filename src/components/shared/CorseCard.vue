<template>
    <div class="card course-card mb-3">
        <p class="course-date">dd/mm/yyyy - dd/mm/yyyy</p>
        <h5 class="course-name">Card name</h5>
        <p class="course-athlete">Athlete name</p>

        <div class="training-sessions">00 training sessions</div>

        <div class="course-actions">
            <a class="course-actions-btn delete" @click="onDeleteClick()" ><i class="bi bi-trash"></i></a>
            <a class="course-actions-btn copy" @click="onDuplicateClick()"  ><i class="bi bi-back"></i> </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CourseCard',
    emits: ['delete', 'duplicate'],
    methods: {
        onDeleteClick() {
            this.$emit('delete')
        },
        onDuplicateClick() {
            this.$emit('duplicate')
        }
    }
}
</script>
<style lang="scss">
    .course-card  {
        text-align: left;


        padding: 20px 0 10px 0;

        & .course-date {
            padding: 0 20px;
            font-size: .8em;
            font-weight: light;
        }

        & .course-name {
            padding: 0 20px;
            font-weight: 700;
        }

        & .course-athlete {
            padding: 0 20px;
            color: var(--bs-secondary);
        }

        & .training-sessions {
            padding: 10px 20px;
            font-weight: 700;
            color: var(--bs-violet);
            background-color: rgba(var(--bs-violet-rgb), .1);
        }

        & .course-actions {
            padding: 10px 20px 0px 20px;
            font-size: 1.1em;
            text-align: right;

            &-btn {
                cursor: pointer;
                color: var(--bs-black);
                &:not(:last-child) {
                    margin-right: 20px;
                }

                &:hover {
                    &.delete {
                        color: var(--bs-danger);
                    }
                    &.copy {
                        color: var(--bs-primary);
                    }
                }
            }
        }
                
    }
</style>