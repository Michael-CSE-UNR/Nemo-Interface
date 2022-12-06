console.log('Done testing')

const { createApp } = Vue

const NemoInterface = {
	data(){
		return {
			task: {
				'title': ''
			},
			tasks: []
		}
	},
	async created(){
		await this.getTasks()
	},
	methods: {
		async sendRequest(url, method, data){
			const myHeaders = new Headers ({
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			})

			const response = await fetch(url, {
				method: method,
				headers: myHeaders,
				body: data
			})

			return response

		},
		async getTasks(){
			const response = await this.sendRequest(window.location, 'get')

			this.tasks = await response.json()

		},

		async createTask(){
			await this.getTasks()

			await this.sendRequest(window.location + 'create', 'post', JSON.stringify(this.task))

			await this.getTasks()

			//Make the input black after submitting one
			this.task.title = ''

		},
		async deleteTask(task) {
			await this.sendRequest(window.location + 'delete', 'post', JSON.stringify(task))

			await this.getTasks()

		},
		async completeTask(task) {
			await this.sendRequest(window.location + 'complete', 'post', JSON.stringify(task))

			await this.getTasks()

		}
	},
	//This is saying that within the other files, html ones, {} will say it is for vue
	delimiters: ['{', '}']
	
}

createApp(NemoInterface).mount('#app')