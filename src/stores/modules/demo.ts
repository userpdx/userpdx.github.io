import { defineStore } from 'pinia';

export const useCounterStore = defineStore('main', {
	state: () => {
		return { documentTitle: 'demo' };
	},
	actions: {
		increment(value: string) {
			this.documentTitle = value;
		},
	},
});
