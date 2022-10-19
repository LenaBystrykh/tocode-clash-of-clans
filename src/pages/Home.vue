<template>
    <carousel :settings="settings" :breakpoints="breakpoints">
        <slide class="card__wrapper" v-for="item in items" :key="item.id">
            <Card :level="`${item.level} lvl`" :name="item.name" :imgUrl="item.img" :link="'/' + item.alias">
                <!-- вместо :link="'/' + item.alias" можно записывать :link="`/${item.alias}`" -->
                <!-- Если несколько слотов, то нужно указывать таким образом где какой использовать и что в нем будет -->
                <!-- <template v-slot:header>
                    <p>top</p>
                </template>
                <template v-slot:body>
                    {{ item.description }}
                </template> -->
                <template v-slot:body>
                    <p>{{ item.description }}</p>
                </template>
                <template v-slot:footer>
                    <!-- <div class="card-stats">
                        <div class="one-third" v-for="(parameter, index) in item.info" :key="index">
                            <div class="stat-value">{{ parameter.value }}</div>
                            <div class="stat">{{ parameter.title }}</div>
                        </div>
                    </div> -->
                    <ItemStats :info="item.info"/>
                </template>
            </Card>
        </slide>

        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>

<script>
import items from '../seeders/items'
import Card from '@/components/UI/Card'
import ItemStats from '@/components/UI/ItemStats'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
    components: {
        Card,
        ItemStats,
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
            items: items,
            settings: {
                itemsToShow: 2, // отобразится 2 карточки (0.5+1+0.5 из-за snapAlign)
                wrapAround: true, // можно листать бесконечно вне зависимости от общего количества карточек
                snapAlign: 'center' //центр карточки будет в середине (а можно было бы сделать так чтобы 2 полноценных карточки отображались)
            },
            breakpoints: {
                300: { //min-width
                    itemsToShow: 1
                },
                700: { //min-width
                    itemsToShow: 2
                },
                1700: { //min-width
                    itemsToShow: 4
                }
            }
        }
            // [
            //     {
            //         id: 1,
            //         name: 'Archer',
            //         description: 'archer archer',
            //         // все файлы хранятся в том числе в кэше, чтобы не подгружать их заново, если они не изменились
            //         // если название осталось прежним, будет считаться, что картинка та же
            //         // даже если это уже другая картинка под тем же названием
            //         // поэтому нужно использовать require - он будет использовать название картинки с хэш кодом в конце
            //         // изменение картинки приведет к изменению хэш кода, даже если само название прежнее
            //         img: require('@/assets/img/archer.png'),
            //         level: 4
            //     },
            //     {
            //         id: 2,
            //         name: 'Wizard',
            //         description: 'wizard wizard',
            //         img: require('@/assets/img/wizard.png'),
            //         level: 5
            //     }
            // ]
    }
}
</script>
