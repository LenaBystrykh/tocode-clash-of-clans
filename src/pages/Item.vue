<template>
    <div class="wrapper-person">
        <div v-if="item">
            <img :src="item.img" alt="item.name">
            <h1 class="card-name" style="color: white;">{{ item.name }}</h1>
            <p>{{ item.level }} level</p>
            <p>{{ item.description }}</p>
            
            <!-- <div class="card-stats">
                <div class="one-third" v-for="(parameter, index) in item.info" :key="index">
                    <div class="stat-value">{{ parameter.value }}</div>
                    <div class="stat">{{ parameter.title }}</div>
                </div>
            </div> -->
            <ItemStats :info="item.info"/>
            <router-link to="/" class="btn btnPrimary">Back to home</router-link>
        </div>
    </div>
</template>

<script>
import items from '@/seeders/items'
import ItemStats from '@/components/UI/ItemStats'
export default {
    components: {
        ItemStats
    },
    data() {
        return {
            item: null
        }
    },
    created() {
        const alias = this.$route.params.itemAlias
        const item = items.find(el => el.alias == alias)
        this.item = item
    }
}
</script>

<style lang="scss">
.wrapper-person {
    text-align: center;
    .card-stats {
        border-radius: 14px;
        margin: 30px 0;
    }
}
</style>