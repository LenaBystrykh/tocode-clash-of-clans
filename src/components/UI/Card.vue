<template>
    <div class="card">
        <!-- Если несколько слотов, то нужно указать им имена -->
        <!-- <div class="card-header">
            <slot name="header"></slot>
        </div> -->
        <div v-if="imgUrl" class="card-img__wrapper">
                <img class="card-img" :src="imgUrl" :alt="name">
        </div>
        <span class="card-level">{{ level }}</span>
        <span class="card-name">{{ name }}</span>
        <div class="card-body">
            <!-- если слот один то можно не задавать ему имя -->
            <slot name="body"></slot>
            <!-- Можно также задать значение по умолчанию, если ничего не передалось: -->
            <!-- <slot>Здесь дефолтное значение</slot> -->
            <router-link v-if="link" class="link" style="display: block; margin-top: 16px;" :to="link">See more</router-link>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    props: {
        level: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String
        },
        link: {
            type: String
        }
    }
}
</script>