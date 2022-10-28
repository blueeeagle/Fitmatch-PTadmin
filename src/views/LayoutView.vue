<template>
    <div class="layout">
        <div class="layout-header">
            <NavHeaderVue></NavHeaderVue>
        </div>
        <div class="layout-body container px-0" >
            <router-view/>
        </div>
        
    </div>
</template>
<script>
import NavHeaderVue from '@/components/NavHeader.vue';

export default {
    name: "LayoutView",
    components: {
       NavHeaderVue
    }
}
</script>
<style lang="scss">
    .layout {
        height: 100%;
        width: 100%;
        background-color: var(--bs-gray-200);

        & &-header {
            z-index: 10;
            height: 80px;
            width: 100%;
            position: fixed;
        }

        & &-body {
            padding-top: 80px;
            height: 100%;
            width: 100%;
            overflow-y: auto;
        }
    }
</style>