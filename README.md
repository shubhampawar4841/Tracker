# 🚀 Health Challenge Tracker

## 📌 Overview
The **Health Challenge Tracker** is a single-page application (SPA) built with **Angular 14+** and **TailwindCSS** that allows users to log their workouts, filter and search workout records, and visualize progress using charts. This project meets all the assignment requirements, including **pagination, filtering, unit testing with 100% coverage, and deployment**.

## 🌟 Features
- ✅ **Add Workout Data**: Users can enter their name, workout type, and duration.
- ✅ **Search & Filter**: Search workouts by name and filter by workout type.
- ✅ **Pagination**: Supports large data sets with paginated records.
- ✅ **Data Persistence**: Uses `localStorage` to store workout data.
- ✅ **Charts & Analytics**: Displays workout progress using **Chart.js**.
- ✅ **Unit Testing**: 100% test coverage for one **component** and one **service**.
- ✅ **Responsive UI**: Styled with **TailwindCSS**.
- ✅ **Deployed Online**: Hosted for easy access.

## 📷 Screenshots
| Add Workout | Workout List & Filters | Workout Chart |
|------------|----------------------|--------------|
| ![Add Workout](./screenshots/add-workout.png) | ![Workout List](./screenshots/workout-list.png) | ![Workout Chart](./screenshots/workout-chart.png) |

## 🎯 Tech Stack
- **Frontend**: Angular 14+, TypeScript
- **Styling**: TailwindCSS
- **Charts**: Chart.js
- **State Management**: Local Storage
- **Testing**: Jasmine & Karma
- **Deployment**: Vercel/Netlify

## 🚀 Live Demo
🔗 **[Live Demo](https://your-deployed-app-link.com/)**

## 📂 Folder Structure
```
📦 health-challenge-tracker/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 components/
│   │   │   ├── 📂 workout-form/
│   │   │   ├── 📂 workout-list/
│   │   │   ├── 📂 workout-chart/
│   │   ├── 📂 services/
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
   git clone https://github.com/your-username/health-challenge-tracker.git
   cd health-challenge-tracker
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
- 🔹 **Google Fit / Apple Health Integration**

## 🎥 Video Submission
📌 **[Video Link](https://drive.google.com/your-video-link)** (Introduction, Challenges, & Improvements)

## 📜 License
This project is licensed under the **MIT License**.

## ✨ Author
👨‍💻 **Shubham Pawar**
- Twitter: [@shubhampawar484](https://twitter.com/shubhampawar484)
- GitHub: [shubhampawar4036](https://github.com/shubhampawar4036)

---

Made with ❤️ for Fyle 🚀