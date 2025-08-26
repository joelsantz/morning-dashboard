# ☀️ Morning Dashboard
🚀 **Live Demo**: [https://morning-dashboard-seven.vercel.app/](https://morning-dashboard-seven.vercel.app/)
<img width="1717" height="885" alt="image" src="https://github.com/user-attachments/assets/7126f31d-e3fb-46e7-b220-f26f18073553" />

A minimalist and elegant morning dashboard built with **Next.js 15**, **React**, and **Tailwind CSS**, featuring:

- Dynamic weather based on user location
- Inspirational quote of the day
- Beautiful dark theme with animated gradients
- Fully responsive UI with clean glassmorphism design

## 🚀 Technologies Used

- **Next.js App Router**
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **SWR** for data fetching and caching
- **Open Meteo API**
- **DummyJSON Quotes** API
- Custom hooks for geolocation, weather, and quotes

## 🧩 Custom Hooks

### `useGeoLocation()`
Gets the user's latitude, longitude, and city name using a custom `/api/geo` proxy route.

### `useWeather(lat, lon)`
Fetches weather information using a custom `/api/weather` proxy route.

### `useQuote()`
Fetches a daily quote using a custom `/api/quote` proxy route.

## ✅ Unit Testing

The project includes **unit tests** using:

- **Jest**
- **React Testing Library**

To run the tests:

```bash
npm run test
```
## ⚙️ Getting Started
### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/morning-dashboard.git
cd morning-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open your browser at http://localhost:3000
 to see the app in action.

