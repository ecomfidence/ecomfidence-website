// /functions/_middleware.js

import { staticFormsPlugin } from '@cloudflare/pages-plugin-static-forms';

export const onRequest = [
  staticFormsPlugin({
    formId: 'contact-form', // The ID of your form
    emailAddress: 'your-email@example.com', // Your email to receive form submissions
    redirectUrl: '/thank-you', // The page to redirect to after form submission
  }),
];