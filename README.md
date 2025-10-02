### FlyHigh Web App

Modern travel booking web application built with React and Vite. FlyHigh lets users search and book flights and hotels, manage favorites and bookings, and includes an admin dashboard for managing airlines, flights, and hotels.

#### Key Features

- **Flight and Hotel Search**: Filter and browse available options.
- **Booking Flow**: Guided steps for booking flights and hotels.
- **Payments**: Stripe integration via `@stripe/react-stripe-js`.
- **Authentication**: Firebase Auth with Google sign‑in.
- **Favorites & History**: Save favorites and view past bookings.
- **Dashboards**: Admin views to add/edit/list airlines, flights, and hotels.
- **Responsive UI**: Built with React, CSS Modules, and Bootstrap.
- **Notifications & Alerts**: Toasts and modals for feedback.

#### Tech Stack

- **Frontend**: React 19, Vite 6, React Router 7
- **UI**: CSS Modules, Bootstrap 5, Font Awesome, `react-icons`
- **State/Utils**: React Context, `axios`, `uuid`, `yup`, `formik`
- **Auth**: Firebase (`firebase` SDK)
- **Payments**: Stripe (`@stripe/react-stripe-js`, `@stripe/stripe-js`)
- **Charts**: Recharts, Chart.js

---

### Project Structure

```
FlyHigh-WebApp/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Dashboard/ ...
│  │  ├─ FlightCard/ ...
│  │  ├─ HotelDetails/ ...
│  │  ├─ Payment/ ...
│  │  ├─ Auth (Login, Register, Forgot/Reset Password)
│  │  ├─ Context/ (FlightContext, FavouriteContext)
│  │  └─ Shared UI (Button, Input, Card, StepsBar, Badge)
│  ├─ UI/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ vite.config.js
├─ package.json
└─ eslint.config.js
```

---

### Getting Started

#### Prerequisites

- Node.js (LTS recommended) and npm

#### Installation

```bash
npm install
```

#### Running the app (development)

```bash
npm run dev
# Vite dev server (default): http://localhost:5173
```

#### Build for production

```bash
npm run build
```

#### Preview production build

```bash
npm run preview
```

#### Lint

```bash
npm run lint
```

---

### Environment Variables

Configure a `.env` file at the project root. Vite exposes variables that are prefixed with `VITE_`.

Suggested variables (match your Firebase/Stripe projects):

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_STRIPE_PUBLISHABLE_KEY=
```

Then initialize Firebase using `import.meta.env` in `src/firebase.js` (or your config module), for example:

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```

Note: Do not commit real secrets. Use environment variables for configuration and rotate credentials if they were ever committed.

---

### Scripts (package.json)

- `dev`: Start Vite dev server
- `build`: Build production assets
- `preview`: Preview the production build locally
- `lint`: Run ESLint

---

### Features Overview (by module)

- `components/flightSearch`, `components/hotelSearch`: Search forms and results
- `components/Payment`, `components/HotelPayment`: Payment flows (Stripe integration ready)
- `components/Dashboard/*`: Admin panels for airlines, flights, hotels, users, and overviews
- `components/Context/*`: Shared app contexts (favorites, flights)
- `components/Favourite*`, `components/MyBookings`, `components/MyFlights`: User features
- `components/Auth`: Login, Register, Forgot/Reset password
- `UI/*`: Reusable UI components

---

### Contributing

1. Create a feature branch from `main`.
2. Install dependencies and run `npm run dev`.
3. Follow the existing code style (React with CSS Modules) and run `npm run lint`.
4. Open a pull request with a concise description and screenshots if applicable.

---

### Security

- Never commit secrets to the repository.
- Use environment variables for API keys and rotate them if leaked.

---

### License

This project is for educational purposes. Add a license file (e.g., MIT) before public distribution.

---

### Acknowledgements

- React, Vite, Firebase, Stripe, Bootstrap, Recharts/Chart.js, React Router, and the open‑source community.
