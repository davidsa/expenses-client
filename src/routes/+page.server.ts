import axios from 'axios';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  login: async ({ request }) => {
    const data = await request.formData();

    const email = data.get('email');
    const password = data.get('password');

    console.log({ email, password });

    const response = await axios.post('http://localhost:3000/user/login', {
      email,
      password
    });

    console.log({ response });
  }
};
