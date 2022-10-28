<template>
    <div class="page-not-found">
       <div class="ps-abs-center">
        <p class="number404">404</p>
        <p class="message">OOPS!, Page Not Found</p>
        <router-link to="/" class="btn btn-primary"  tag="button" >Return To Homepage</router-link>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .page-not-found {
        height: 100%;
        width: 100%;
        position: relative;

        & .number404 {
            margin: 0;
            font-size: 10em;
            color: var(--app-color-primary);
            line-height: 0.8;
            font-weight: lighter;
        }

        & .message {
            color: var(--bs-gray);
            font-size: 1em;
            margin-bottom: 30px;
        }
    }
</style>