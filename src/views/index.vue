<template>
    <div>
        {{ msg }}
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const msg = ref('Hello World')
</script>