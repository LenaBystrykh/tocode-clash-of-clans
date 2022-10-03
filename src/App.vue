<template>
  <div class="wrapper">
    <!-- здесь :links - это название пропа, то, что укажется уже в MyHeader.vue в пропсах -->
    <!-- а ="links" - это название объекта из даты(ниже), который мы передаем хэдеру -->
    <!-- <MyHeader :title="title" :links="links"/> -->
    <MyHeader />
    <div class="wrapper-content">
      <div class="container">
        <!-- <p>hello</p> -->
        <router-view />
      </div>
    </div>
    <!-- <MyFooter :links="links" /> -->
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';
export default {
    components: {MyHeader, MyFooter},
    data() {
        return {
        };
    }
};
  // можно придумывать другие названия, например
  // import ThisIsHeader from '@/components/MyHeader.vue';
  // import ThisIsFooter from '@/components/MyFooter.vue';
  // export default {
  //   components: {MyHeader: ThisIsHeader, MyFooter: ThisIsFooter}
  // };
  // при этом в темплейте мы обращаемся именно по ключам ^ MyHeader, MyFooter
</script>

<style></style>
