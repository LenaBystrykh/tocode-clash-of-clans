<template>
    <div class="card-stats">
        <div class="one-third" v-for="(parameter, index) in info" :key="index">
            <div class="stat-value">{{ parameter.value }}</div>
            <div class="stat">{{ parameter.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Array,
            required: true
        }
    }
}
</script>