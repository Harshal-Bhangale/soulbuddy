# SoulBuddy – AI-Powered Spiritual Guide

## 1. Introduction
SoulBuddy is an AI-driven platform designed to provide **personalized spiritual guidance** using astrology and numerology. In today’s fast-paced world, people often seek insights to improve mental well-being, relationships, career decisions, and personal growth. SoulBuddy fills this gap by offering interactive, actionable, and personalized guidance through AI-powered recommendations and chat support.

---

## 2. Problem Statement

### Objective
- Develop an AI-driven platform that generates **personalized spiritual guidance** through astrology and numerology.
- Capture **user birth details**: Name, Date of Birth, Time, Gender, State, City.
- Generate **Kundali (birth chart)** and horoscope insights.
- Provide personalized recommendations like **gemstones, rituals, meditation**.
- Deliver spiritual content aligned with user’s horoscope.
- Enable **natural language chatbot** for interactive spiritual advice.

---

## 3. What It Solves
- Provides **personalized spiritual guidance** for mental, emotional, and social well-being.
- Helps users understand **astrological influences** in their lives.
- Suggests **actionable recommendations** (gemstones, rituals, meditation, lifestyle tips).
- Offers **interactive guidance** through a chatbot for real-time queries.
- Serves as a **comprehensive spiritual wellness companion**.

---

## 4. Functionality

| Functionality         | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **User Input**        | Collect user details (Name, DOB, Time, Gender, State, City)                 |
| **Kundali & Horoscope** | Generate birth chart (12 houses) and daily/monthly horoscope                 |
| **AI Recommendations** | Personalized gemstones, rituals, dos & don’ts based on horoscope            |
| **Spiritual Content** | Meditation, workout, and sleep guidance aligned with user profile           |
| **Chatbot Interaction** | AI-powered Q&A for spiritual advice and recommendations                    |
| **Data Management**   | Store all user data, horoscope, recommendations, and chatbot history in MongoDB |

---

## 5. Approach

### Architecture
- **Modular Architecture:** Each functionality is implemented as a separate module (User, Horoscope, Recommendation, Content, Chatbot).
- **OOP Principles:** Services and Controllers are implemented as classes, encapsulating logic.
- **Separation of Concerns (SoC):**
  - **Routes:** Map API endpoints.
  - **Controllers:** Handle HTTP requests/responses.
  - **Services:** Business logic (Horoscope, Recommendations, Chatbot).
  - **Models:** MongoDB schema.
  - **Middleware:** Error handling, validation, authentication.

> This modular design ensures **maintainability** and **easy addition of new features**, following professional coding standards.

---

## 6. System Design Perspective

### 6.1 Backend Design
- **API Layer (Express Routes):** Receives requests from the React frontend.
- **Controller Layer:** Handles HTTP requests & responses.
- **Service Layer (OOP classes):** Encapsulates business logic such as:
  - Horoscope calculations
  - AI recommendations
  - Chatbot interactions
- **Database Layer (MongoDB):** Stores user data, horoscope, recommendations.

### 6.2 Frontend Design
- **React Components:** Forms, Dashboard, Horoscope Display, Chatbot.
- **State Management:** `useState` or Context API for user session and data.
- **API Calls:** Fetch data from backend modules.

### 6.3 Extensibility
- New modules can be added independently.
  - Example: `DietModule` or `AstroRemindersModule`.
- Minimal changes to existing code due to modular design.

### 6.4 Scalability
- Modules can later be split into microservices if user traffic grows.
- Each service can be scaled independently (e.g., Chatbot may require more resources than Horoscope service).

---

## 7. Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI/ML:** Generative AI for recommendations and chatbot
- **Others:** Context API, Axios/fetch for API calls

---

## 8. Future Enhancements
- Add **Dietary and Health Recommendations** based on astrology.
- Introduce **Daily Astro Reminders** via notifications.
- Improve **chatbot NLP** for multilingual support.
- Scale modules to **microservices architecture** for high traffic.

---

## 9. Installation & Setup

1. Clone the repository:
```bash
git clone git@github.com:Harshal-Bhangale/soulbuddy.git

2. Install backend dependencies:
cd backend
npm install

3. Install frontend dependencies:
cd ../frontend
npm install

4. Configure environment variables:
MONGO_URI=your_mongodb_connection_string
PORT=5000
OPENAI_API_KEY=your_openai_api_key

5. Run the backend server:
cd backend
npm start

6. Run the frontend:
cd frontend
npm start
