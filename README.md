# 🚀 Tracker

## 📌 Overview
The **Tracker** is a single-page application (SPA) built with **Angular 14+** and **TailwindCSS** that allows users to log their workouts, filter and search workout records, and visualize progress using charts. This project meets all the assignment requirements, including **pagination, filtering, unit testing with 100% coverage, and deployment**.

## 🌟 Features
- ✅ **Add Workout Data**: Users can enter their name, workout type, and duration.
- ✅ **Search & Filter**: Search workouts by name and filter by workout type.
- ✅ **Pagination**: Supports large data sets with paginated records.
- ✅ **Data Persistence**: Uses `localStorage` to store workout data.
- ✅ **Charts & Analytics**: Displays workout progress using **Chart.js**.
- ✅ **Unit Testing**: 100% test coverage for one **component** and one **service**.
- ✅ **Deployed Online**: Hosted for easy access.
|

## 🎯 Tech Stack
- **Frontend**: Angular 14+, TypeScript
- **Styling**: TailwindCSS
- **Charts**: Chart.js
- **State Management**: Local Storage
- **Testing**: Karma
- **Deployment**: Vercel

## 🚀 Live Demo
🔗 **[Live Demo](https://tracker-phi-rosy.vercel.app/)**

## 📂 Folder Structure
```
📦 health-challenge-tracker/
├── 📂 src/
│   ├── 📂 app/
│   │   │   ├── 📂 workout-form/
│   │   │   ├── 📂 workout-list/
│   │   │   ├── 📂 workout-chart/
│   │   │   ├── 📂 services/
│   │   │   ├── workout.service.ts
│   │   │   ├── workout.service.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── 📂 assets/
│   ├── index.html
│   ├── styles.css
├── 📂 coverage/ (Auto-generated test reports)
├── README.md
└── package.json
```

## 🛠️ Setup & Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhampawar4841/Tracker
   cd Tracker
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the app locally**
   ```bash
   ng serve
   ```
   - Open `http://localhost:4200/` in your browser.

## ✅ Running Tests
1. **Run unit tests**
   ```bash
   ng test
   ```
2. **Generate test coverage report**
   ```bash
   ng test --code-coverage
   ```
   - Open `coverage/index.html` in a browser to view the report.

## 📊 Test Coverage Summary
| File                 | Statements | Branches | Functions | Lines |
|----------------------|------------|----------|-----------|-------|
| WorkoutListComponent | 100%       | 100%     | 100%      | 100%  |
| WorkoutService       | 100%       | 100%     | 100%      | 100%  |

## 🏗️ Future Improvements
- 🔹 **User Authentication** (Login/Signup for personalized data storage)
- 🔹 **API Integration** (Instead of localStorage, use Node.js & MongoDB backend)
- 🔹 **Daily Workout Streaks & Goals**



## 📜 License
This project is licensed under the **MIT License**.

## ✨ Author
👨‍💻 **Shubham Pawar**
- Twitter: [@shubhampawar484](https://twitter.com/shubhampawar484)
- GitHub: [shubhampawar4841](https://github.com/shubhampawar4841)

---

Made with ❤️ for Fyle 🚀