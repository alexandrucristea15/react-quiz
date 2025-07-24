# React Quiz App

A dynamic, customizable quiz application built with **React**. This project demonstrates modern React patterns, state management with `useReducer`, component composition, and clean UI/UX—all ideal for showcasing your React skills to recruiters and collaborators.

---

## 🚀 Features

- **Customizable Quiz Length:**  
  Users select the number of questions before starting.

- **State Management with `useReducer`:**  
  All quiz logic and state transitions are handled with a reducer pattern, making the app scalable and maintainable.

- **Component-Based Architecture:**  
  The UI is split into reusable, focused components.

- **Live Timer:**  
  Each question has a countdown timer.

- **Progress & Scoring:**  
  Real-time progress bar, scoring, and highscore tracking.

- **Error Handling & Loading States:**  
  Graceful handling of loading and error states.

---

## 🛠️ Technologies Used

- **React** (functional components)
- **React Hooks** (`useReducer`, `useEffect`)
- **Fetch API** for data loading
- **CSS Modules / Custom Styling** (customize as needed)

---

## 📦 Project Structure

```
src/
  Components/
    Main-Components/
      App.js
    QuestionApp/
      StartScreen.js
      FinishScreen.js
    Questions/
      Question.js
    UI-Components/
      NextButton.js
      Progress.js
      Timer.js
      Footer.js
    Status-UI-Components/
      Loader.js
      Error.js
```

---

## 🧩 Key Implementation Details

### 1. State Management with `useReducer`

All quiz logic is centralized in a reducer, making state transitions explicit and easy to test:

```javascript
// src/Components/Main-Components/App.js
const initialState = {
  questions: [],
  index: 0,
  status: "loading", // loading, error, ready, active, finished
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  selectedNumQuestions: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "selectNumQuestions":
      return {
        ...state,
        selectedNumQuestions: action.payload,
        questions: state.questions.slice(0, action.payload),
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.selectedNumQuestions * SECS_PER_QUESTION,
      };
    // ...other cases...
    default:
      throw new Error("Action unknown");
  }
};
```

### 2. Data Fetching with `useEffect`

Questions are loaded from a local server using the Fetch API:

```javascript
useEffect(() => {
  const fetchQuestion = async () => {
    try {
      const res = await fetch("http://localhost:8000/questions");
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });
    } catch (err) {
      dispatch({ type: "dataFailed" });
    }
  };
  fetchQuestion();
}, [dispatch]);
```

### 3. Component Composition

The app is composed of focused, reusable components:

```javascript
return (
  <div className="App">
    <Header />
    <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen
          selectedNumQuestions={selectedNumQuestions}
          dispatch={dispatch}
        />
      )}
      {status === "active" && (
        <>
          <Progress ... />
          <Question ... />
          <Footer>
            <Timer ... />
            <NextButton ... />
          </Footer>
        </>
      )}
      {status === "finished" && (
        <FinishScreen ... />
      )}
    </Main>
  </div>
);
```

### 4. Controlled Inputs & UI Patterns

The number of questions input is controlled and styled, and only allows changes via the stepper arrows:

```javascript
<input
  type="number"
  min={1}
  max={15}
  value={selectedNumQuestions}
  onChange={(e) => {
    dispatch({ type: "selectNumQuestions", payload: Number(e.target.value) });
  }}
  onKeyDown={(e) => e.preventDefault()} // Prevent typing, allow arrows
/>
```

---

## 📝 How to Run

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the local server for questions (if required):**

   ```sh
   npm run server
   ```

3. **Start the React app:**

   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 Why This Project Stands Out

- **Modern React Patterns:** Uses hooks and reducer for robust state management.
- **Scalable Architecture:** Easy to extend with more features or question types.
- **User Experience:** Clean, interactive, and responsive UI.
- **Recruiter-Friendly:** Shows understanding of React fundamentals, async data, and component design.

---

**Feel free to fork, star, or use this as a template for your own quiz projects!**
