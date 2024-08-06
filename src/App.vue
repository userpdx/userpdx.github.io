<script setup lang="ts">
import { onMounted } from 'vue';

import { useCounterStore } from '@/stores';


const counter = useCounterStore();

onMounted(() => {
	document.title = counter.documentTitle;
});
</script>

<template>
	<div class="home">
		这是我是首页
	</div>
</template>

<style lang="less">
#app {
	background: #000000;
	width: 100%;
	height: 100%;
}

.home{
	background: #000000;
	width: 100%;
	height: 100vh;
	color: red;
}
</style>
