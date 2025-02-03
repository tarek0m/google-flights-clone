# Flight Search App

## ✈️ Overview

The **Flight Search App** is a React.js web application that allows users to search for flights based on their departure city and destination. It fetches real-time flight data from the **Sky Scrapper API (RapidAPI)** and presents it in a user-friendly interface using **Material UI**.

## 🚀 Features

- **Search for Flights** by entering departure and destination cities
- **View Flight Details** including price, duration, and stopovers
- **Interactive Map** to visualize flight routes
- **Material UI Styling** for a modern and responsive design
- **Loading Indicators** for better UX
- **Dark Mode Support** (if needed)

## 🏗️ Folder Structure

```
flight-search-app/
│── public/               # Static files (HTML, icons, etc.)
│── src/                  # Source code
│   ├── api/              # API calls
│   │   ├── fetchFlights.js  # Fetch flight data from API
│   │   └── config.js        # API configuration
│   │
│   ├── components/       # Reusable UI components
│   │   ├── SearchBar.jsx    # Flight search bar
│   │   ├── FlightCard.jsx   # Flight details component
│   │   ├── Map.jsx          # Map visualization
│   │
│   ├── pages/            # Main app pages
│   │   ├── Home.jsx          # Homepage with search UI
│   │   ├── FlightResults.jsx # Page displaying flight results
│   │
│   ├── styles/           # Styling and themes
│   │   ├── theme.js          # Material UI theme
│   │   ├── global.css        # Global styles
│   │
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│   ├── routes.js         # App routes configuration
│
│── .env                  # API keys (DO NOT commit)
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

## 📦 Installation & Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/flight-search-app.git
   cd flight-search-app
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Set Up API Key**

   - Create a `.env` file in the root directory and add:
     ```env
     REACT_APP_RAPIDAPI_KEY=your_api_key_here
     ```
   - Replace `your_api_key_here` with your actual **Sky Scrapper API** key from RapidAPI.

4. **Run the App**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000/`.

## 🔧 Technologies Used

- **React.js** (v18)
- **Material UI** (for styling)
- **React Router** (for navigation)
- **Fetch API** (to get flight data from RapidAPI)
- **Context API** (for global state management)

## 🛠️ API Integration (Sky Scrapper API)

- API Docs: [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper)
- Example API Call (Using `fetchFlights.js`):
  ```js
  const fetchFlights = async (origin, destination) => {
    const response = await fetch(
      'https://sky-scrapper.p.rapidapi.com/flights',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
      }
    );
    return response.json();
  };
  ```

## 🛠️ Future Improvements

- Add **user authentication** (Sign in / Sign up)
- Implement **filter & sorting options** for flight results
- Optimize performance with **React Query** or **SWC**
- Deploy the app using **Vercel** or **Netlify**

## 👨‍💻 Author

Developed by **Tarek Alnaggar** 🚀

## 📜 License

This project is licensed under the **MIT License**.

---

Feel free to contribute and improve the project! 😊
