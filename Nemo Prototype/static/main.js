

const { createApp } = Vue

const NemoInterfaceHome = {
	data(){
		return { msg: 'Test Vue'}
	},
	delimiters: ['{', '}']
}

createApp(NemoInterfaceHome).mount('#NemoHome')