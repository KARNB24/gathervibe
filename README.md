# GatherVibe

GatherVibe is a Meetup or Eventbrite-like event organization web app created using Next.js 14. It is a full-stack application built to streamline event management and attendance tracking.

## Images
![image](https://github.com/KARNB24/gathervibe/assets/59581104/ba3fb898-a874-48ea-b92d-a349753654e0)
![image](https://github.com/KARNB24/gathervibe/assets/59581104/a0afb115-8db4-4677-9d96-3b1260eb57f6)
![image](https://github.com/KARNB24/gathervibe/assets/59581104/c7fe266a-561c-49f4-bfbc-664f7460e693)



## Features

🔐 **Authentication (CRUD) with Clerk:** Efficient user management facilitated by Clerk, ensuring secure authentication processes. 
    (Note: For this project I have only utilized Google and Github Auth for creating events, updating events, buying specific events, etc. So by signing up using email and password won't work)
    *** Only use Google or Github Auth

📅 **Events (CRUD):** Full-fledged event management capabilities allowing users to create, read, update, and delete events effortlessly.

- **Create Events:** Streamlined event creation process with options to specify title, date, location, and additional details.
- **Read Events:** Seamless access to comprehensive event information, including descriptions, schedules, and related details.
- **Update Events:** Dynamic modification of event details to keep information accurate and up-to-date.
- **Delete Events:** Straightforward event removal for effective platform management.

🔗 **Related Events:** Intelligent event linking for enhanced engagement, displaying related events on event details pages.

📋 **Organized Events:** Efficient organization of events for a structured and user-friendly display, including user-created events on user profiles.

🔍 **Search & Filter:** Robust search and filter functionality empowering users to find events matching their preferences seamlessly.

➕ **New Category:** Dynamic addition of event categories for enhanced platform adaptability.

💳 **Checkout and Pay with Stripe:** Smooth and secure payment transactions through Stripe for enhanced user experience during checkout.

📦 **Event Orders:** Comprehensive order management system providing a clear overview of all event-related transactions.

🔎 **Search Orders:** Quick and efficient order search functionality facilitating easy tracking and management.

🔧 **Code Architecture and Reusability:** Well-structured codebase promoting modularity and reusability for easier maintenance and scalability.

And many more features to explore, ensuring a robust and user-friendly event organization experience.

## Tech Stack

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js
- **Authentication:** Clerk
- **Payment:** Stripe
- **Validation:** Zod
- **Form Handling:** React Hook Form
- **Image Upload:** Uploadthing

## Test Live App
https://gathervibe.vercel.app/

## Stripe Demo Card Details
```bash
Card Number: 4242 4242 4242 4242
EXP: 01/26
CVV: 301
```

## Installation

### Cloning the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

### Install the project dependencies using npm:
```bash
npm install
```

### Set Up Environment Variables
Create a new file named .env in the root of your project and add the following content:
```bash
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```
Replace the placeholder values with your actual credentials.

### Running the Project
```bash
npm run dev
```
## License

This project is licensed under the [MIT License](LICENSE).
