# App Boilerplate

A starter **Node.js + Express + React** application scaffold with styled-components, hooks, Netlify deployment, and customizable architecture for full-stack apps.

---

## 🚀 Tech Stack

- **Server**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **Client**: [React](https://reactjs.org/)
- **Styling**: [styled-components](https://styled-components.com/)
- **Build**: [Babel](https://babeljs.io/), [Webpack](https://webpack.js.org/)
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Editor**: [Visual Studio Code](https://code.visualstudio.com/)

---

## 🧱 VSCode Task

This boilerplate includes a task that scaffolds a new component directory with boilerplate files.

**Task: `Create Component Directory`**

Creates the following structure:

- `/yourPath/yourName/`
  - `yourName.js` – component from template
  - `yourNameConsts.js`
  - `yourNameUtils.js`
  - `index.js` – re-exports component for simpler imports

📂 Run via:

- `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows/Linux)
- Select `Tasks: Run Task` → `Create Component Directory`

---

## 📦 Netlify Deploy Commands

This project is **Netlify-ready**:

1. Push your repo to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Connect your GitHub repository
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `public/`

[Read more →](https://docs.netlify.com/site-deploys/create-deploys/)

---

## 🎨 Design System & Theming

Located in `src/components/styled/components/`, the design system includes:

- **Anchor** – Styled link element
- **Arrow** – CSS-based arrow for directional UI elements
- **Box** – Basic layout wrapper
- **Button** – Versatile button with visual variants
- **FlexBox** – Flex container with `$itemsPerRow`, `$wrap`, and `$center` props
- **Form** – Styled form layout wrapper
- **Grid** – Grid layout with `$gap`, `$center`, and `$itemSize` props
- **Image** – Styled image with fluid/responsive layout options
- **Text** – Semantic text component
- **Title** – Styled semantic header (e.g. `h1`, `h2`) component

The application is wrapped in a global `<ThemeProvider theme={customTheme}>` from styled-components.  
The theme is created using MUI's `createTheme`, supporting:

- **Palette**: `primary`, `secondary`, `success`, `warning`, `error`, `info`, `background`, `backgroundLight`, `action`, `text`
- **Typography**: `fontFamily`, `body1`, `body2`, `caption`, `label`, `button`, `subtitle`, `h1`, `h2`, `h3`

All styled components can access this theme via the `theme` prop.

---

## 🧩 Custom Hooks

Located in `src/hooks/`:

- **useData** – Returns `{ data, fetchData }`. `fetchData` is used to fetch API data.
- **useMediaQuery** – Returns true if a given media query matches the current viewport
- **useEffectAfterFirstRender** – Like `useEffect` but skips the first render

---

## 🔁 API Flow: `useData`

This example uses the existing `/api/data` route:

1. Express serves `/api/data` in `server/api/data.js`
2. React calls `fetchData('/api/data')` (from the `useData` hook) in `App.js`
3. The app is wrapped in a React Context Provider (`<DataContext.Provider value={data}>`)
4. Components read data via `useContext(DataContext)`

This structure enables shared access to API responses across the app.

---

## 📁 Routes & Navigation

- Client routes are defined in `src/routes/routeConsts.js`
- Navigation adapts automatically into a hamburger menu on non-desktop viewports

Each route object follows this structure:

```js
{
  id: 'uniqueId',              // Set once and do not change
  name: 'Page Name',           // Display name in menu
  path: '/your-path',          // URL path
  icon: <IconComponent />,     // Menu icon
  element: <PageComponent />   // Page rendered for route
}
```

To update the browser tab title, modify `initialDocument.title` in `routeConsts.js`.

---

## ⚙️ Environment Variables

Create a `.env` file at the root of your project:

```
EXPRESS_PORT=3001
NODE_ENV=development
```

---

## 🔄 Replacing Favicon

Replace the default favicon:

1. Drop your `.ico` file in `/public/` as `favicon.ico`
2. The browser will use it automatically on next build/deploy

---

## 📦 Available Scripts

From `package.json`:

- `npm run dev` – Runs both backend and frontend in watch mode using `concurrently`
- `npm run start-react` – Runs the React app using Webpack Dev Server
- `npm run start-server` – Starts the Express server using `nodemon`
- `npm run debug` – Starts both servers with source maps for debugging
- `npm run build` – Builds frontend and backend into `/public` and `/dist`
- `npm run start` – Runs the compiled Express server
- `npm run test` – Runs unit tests (customize as needed)

---

## 🚀 Getting Started with This Boilerplate

> This is a boilerplate project. You should start a **new repository** based on it.

### 1. Create a new repository from this template

Using GitHub CLI:

```bash
gh repo create my-app --public --source=https://github.com/dcastillo3/app-boilerplate --remote=origin --push
```

Or:

- Click the green **"Use this template"** button on the GitHub repo page
- Create your new repo and clone it

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file

As shown in the **Environment Variables** section above.

---

## 🛠️ Post-Setup Configuration

After creating your own project, update:

- In `package.json`:
  - `name`
  - `description`
  - `repository.url`
  - `author`
  - `bugs.url`
  - `homepage`

- In `src/routes/routeConsts.js`:
  - Update `initialDocument.title` for correct tab display

---

## 🧩 Server API Services (Planned)

This section is reserved for future integrations such as:

- Stripe (payments)
- Contentful (CMS)
- Additional APIs via modular handlers in `server/api/`

---

## 🔧 Babel Configuration

Found in `babel.config.js`:

- Uses `@babel/preset-env` and `@babel/preset-react`
- Enables modern JavaScript syntax across client and server
- Easily extendable with plugins and additional presets
