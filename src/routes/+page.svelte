<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import LoginForm from './components/LoginForm.svelte';
	import RegisterForm from './components/RegisterForm.svelte';
	import type { LoginFormData, RegisterFormData } from '$lib/types';

	let selectedMethod = 'login';

	let loginHandler = async ({ email, password }: LoginFormData) => {
		const { data } = await axios.post<{ ok: boolean }>('http://localhost:3000/user/login', {
			email,
			password
		});

		if (data.ok) {
			goto('/home');
		}
	};

	let registerHandler = async ({ name, lastname, email, password }: RegisterFormData) => {
		const { status } = await axios.post<{
			id: number;
			name: string;
			lastname: string;
			email: string;
			role_id: number;
		}>('http://localhost:3000/user/', {
			name,
			lastname,
			email,
			password
		});

		if (status == 200) {
			goto('/home');
		}
	};

	let toggleMethod = () => (selectedMethod = selectedMethod === 'login' ? 'register' : 'login');
</script>

<div class="h-full flex justify-center items-center flex-col gap-8">
	{#if selectedMethod === 'login'}
		<LoginForm onSubmit={loginHandler} />
		<button class="btn-primary" on:click={toggleMethod}>Want to create an account?</button>
	{/if}

	{#if selectedMethod === 'register'}
		<RegisterForm onSubmit={registerHandler} />
		<button class="btn-primary" on:click={toggleMethod}>Already have an account?</button>
	{/if}
</div>
