<template lang="">
    <div  class="avatar" :class="{'avatar-lg': avatarSize === 'large', 'avatar-sm': avatarSize === 'small' }"
        :style="{'height': sizeInPx, 'width': sizeInPx}"  >
        <img v-if="imageUrl"  :src="imageUrl" :alt="avatarText">
        <p v-else class="avatar-name ps-abs-center" >{{avatarText ? avatarText[0] : 'NA'}}</p>
    </div>
</template>
<script>
export default {
    name: 'Avatar',
    props: ['avatarSize', 'sizeInPx', 'imageUrl', 'avatarText'],
    created() {

    }
    
}
</script>
<style lang="scss">
    .avatar {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: var(--bs-gray-300);
        border: 2px solid var(--bs-white);
        position: relative;

        &-lg {
            height: 100px;
            width: 100px; 
        }

        &-sm {
            height: 30px;
            width: 30px; 
        }


        & img {
            height: inherit;
            width: inherit; 
            border-radius: 50%;
        }

        & &-name {
            margin: 0
        }
    }
</style>