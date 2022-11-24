
const App = {
    data() {
        return {
            errors: [],
            name: '',
            phoneNumber: '',
            email: ''
        }
    },
    methods: {
        async dataFormUser(e) {
            const url = '/form-sending';
            e.preventDefault();
            this.errors = [];
                let dataForm = {
                name: this.name,
                phoneNumber: this.phoneNumber,
                email: this.email
            }
            if(this.name && this.phoneNumber && this.email) {
                this.errors = [];
                    const response = await fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(dataForm),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if(!response.ok) {
                        alert(`Could not fetch ${url}` +
                            `, received ${response.status}`)
                    }
            }
            if(!this.name) {
                this.errors.push('Name field is required!')
            }
            if(!this.phoneNumber) {
                this.errors.push('Phone number field is required!')
            }
            if(!this.email) {
                this.errors.push('Email field is required!')
            }
            this.phoneNumber = '',
            this.name = '',
            this.email = ''
        },
    }
}

const app = Vue.createApp(App);

app.mount('#form')