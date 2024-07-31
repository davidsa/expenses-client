<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';

	import { loginSchema } from '$lib/schemas';
	import type { LoginFormData } from '$lib/types';

	export let onSubmit;

	const { form } = createForm<LoginFormData>({
		extend: [validator({ schema: loginSchema }), reporter],
		onSubmit
	});
</script>

<form use:form class="border border-gray-600 rounded-md p-10 w-1/3">
	<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
		<div class="sm:col-span-full">
			<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Email</label
			>
			<div class="mt-2">
				<input
					type="text"
					name="email"
					class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
				<ValidationMessage for="email" let:messages>
					<p class="text-red-500 mt-2">
						{messages || ''}
					</p>
				</ValidationMessage>
			</div>
		</div>

		<div class="sm:col-span-full">
			<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
			<div class="mt-2">
				<input
					name="password"
					type="password"
					class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
				<ValidationMessage for="password" let:messages>
					<p class="text-red-500 mt-2">
						{messages || ''}
					</p>
				</ValidationMessage>
			</div>
		</div>

		<div class="sm:col-span-full flex justify-center items-center">
			<input type="submit" value="Submit" class="btn-primary" />
		</div>
	</div>
</form>
