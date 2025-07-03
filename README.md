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

### 3. Configure your project

```bash
npm run setup
```

### 4. Start developing

```bash
npm run dev
```

---

## 🛠️ Post-Setup Configuration

The `npm run setup` script automatically configures:

- In `package.json`: `name`, `description`, `repository.url`, `author`, `bugs.url`, `homepage`, `license`
- In `src/routes/routesConsts.js`: `initialDocumentTitle` for correct tab display
- Creates `.env` file with default development settings
- Generates a new `README.md` tailored to your project
- Removes setup script and cleans up after completion

**Additional manual steps:**
- Replace favicon in `/public/favicon.ico` with your own
- Modify `.env` file if you need different port or environment settings

---

## 📦 Available Scripts

From `package.json`:

- `npm run setup` – Interactive project configuration (run once after cloning)
- `npm run dev` – Runs both backend and frontend in watch mode using `concurrently`
- `npm run start-react` – Runs the React app using Webpack Dev Server
- `npm run start-server` – Starts the Express server using `nodemon`
- `npm run debug` – Runs both backend and frontend with source maps for debugging
- `npm run build` – Builds frontend into `/build`
- `npm run start` – Runs the compiled Express server
- `npm run test` – Runs unit tests (customize as needed)

---

## ⚙️ Environment Variables

The `.env` file is automatically created during setup with default values:

```
EXPRESS_PORT=8000
NODE_ENV=development
```

To modify environment variables, simply edit the `.env` file in your project root. Changes take effect after restarting the server.

---

## 📦 Netlify Deploy Commands

This project is **Netlify-ready**:

1. Push your repo to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Connect your GitHub repository
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Functions directory**: `netlify/functions`

[Read more →](https://docs.netlify.com/site-deploys/create-deploys/)

---

## 🧱 VSCode Tasks

Automated scaffolding tasks with smart import path resolution and auto-integration.

### **React Component** | `Create React Component Directory`
- `yourName.js` – Component with correct relative imports
- `yourNameStyledComponents.js` – Styled components
- `yourNameConsts.js` + `yourNameUtils.js` – Constants & utilities
- `index.js` – Re-export for clean imports

### **Express API** | `Create Express API Component Directory`
- `server/api/yourName/` – Route handler + utils
- Auto-registers route in `server/api/index.js`
- Converts camelCase → kebab-case URLs

### **React Hook** | `Create React Hook Directory`
- `src/hooks/useYourName/` – Hook + utils
- Auto-exports in `src/hooks/index.js`
- Updates API constants in `src/utils/consts.js`

📂 **Run:** `Cmd/Ctrl + Shift + P` → `Tasks: Run Task`

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

## 🔄 Replacing Favicon

Replace the default favicon:

1. Drop your `.ico` file in `/public/` as `favicon.ico`
2. The browser will use it automatically on next build/deploy

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
