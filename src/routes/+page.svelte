<script lang="ts">
	import { goto } from '$app/navigation';
	import axios from 'axios';
	import { createForm } from 'felte';

	type FormData = { email: string; password: string };

	const { form } = createForm<FormData>({
		onSubmit: async ({ email, password }) => {
			const { data } = await axios.post('http://localhost:3000/user/login', {
				email,
				password
			});

			if (data.ok) {
				goto('/home');
			}
		}
	});
</script>

<div class="h-full flex justify-center items-center">
	<form use:form class="border border-gray-600 rounded-md p-10 w-1/3">
		<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="sm:col-span-full">
				<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
					>Email</label
				>
				<div class="mt-2">
					<input
						type="text"
						name="email"
						class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-full">
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label
				>
				<div class="mt-2">
					<input
						name="password"
						type="password"
						class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-full flex justify-center items-center">
				<input
					type="submit"
					value="Submit"
					class="border py-1 px-3 rounded-md cursor-pointer hover:bg-gray-600 hover:text-white"
				/>
			</div>
		</div>
	</form>
</div>
