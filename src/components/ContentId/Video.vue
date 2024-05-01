<template>
    <div class="video" :class="{active: openVideo}" v-if="randomVideo">
        <iframe :src="`https://www.youtube.com/embed/${randomVideo}`" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        <button class="video__close" @click="$emit('closeVideo')">
            X
        </button>
    </div>
</template>

<script setup>
const props = defineProps(['type', 'openVideo', 'randomVideo'])

</script>

<style lang="scss" scoped>

</style>