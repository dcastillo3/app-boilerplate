#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => readlineInterface.question(query, resolve));

async function setupProject() {
    console.log('🚀 Setting up your new project...\n');

    try {
        // Collect basic project information
        const projectName = await question('Project name: ');
        const description = await question('Project description: ');
        const author = await question('Author name: ');
        const repositoryUrl = await question('Repository URL (e.g., https://github.com/username/repo-name): ');
        const appTitle = await question('App title (for browser tab): ');
        
        // Collect additional README information
        console.log('\n📝 Additional information for README...');
        const longDescription = await question('Detailed project description (optional): ') || description;
        const features = await question('Key features (comma-separated, optional): ');
        const license = await question('License (e.g., MIT, Apache-2.0) [MIT]: ') || 'MIT';

        // Extract repository info
        const repoMatch = repositoryUrl.match(/github\.com\/([^\/]+)\/([^\/\.]+)/);
        const username = repoMatch ? repoMatch[1] : '';
        const repoName = repoMatch ? repoMatch[2] : '';

        // Update package.json
        await updatePackageJson(projectName, description, author, repositoryUrl, username, repoName, license);

        // Update routes constants
        await updateRoutesConsts(appTitle);

        // Update header component
        await updateHeaderComponent(projectName);

        // Create .env file
        await createEnvFile();

        // Create new README.md
        await createReadme({
            projectName,
            description,
            longDescription,
            author,
            repositoryUrl,
            features,
            license,
            username,
            repoName
        });

        // Clean up setup script
        await cleanupSetupScript();

        console.log('\n✅ Project setup complete!');
        console.log('\nNext steps:');
        console.log('1. Run: npm install');
        console.log('2. Run: npm run dev');

    } catch (error) {
        console.error('❌ Setup failed:', error.message);
    } finally {
        readlineInterface.close();
    }
}

async function updatePackageJson(projectName, description, author, repositoryUrl, username, repoName, license) {
    const packagePath = path.join(__dirname, '../package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    packageJson.name = projectName;
    packageJson.description = description;
    packageJson.author = author;
    packageJson.license = license.toUpperCase();
    packageJson.repository.url = `git+${repositoryUrl}.git`;
    packageJson.bugs.url = `${repositoryUrl}/issues`;
    packageJson.homepage = `${repositoryUrl}#readme`;

    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✅ Updated package.json');
}

async function updateRoutesConsts(appTitle) {
    const routesPath = path.join(__dirname, '../src/routes/routesConsts.js');
    let content = fs.readFileSync(routesPath, 'utf8');

    // Update the initialDocumentTitle
    content = content.replace(
        /const initialDocumentTitle = `[^`]*`;/,
        `const initialDocumentTitle = \`${appTitle}\`;`
    );

    fs.writeFileSync(routesPath, content);
    console.log('✅ Updated routes constants');
}

async function updateHeaderComponent(projectName) {
    const headerPath = path.join(__dirname, '../src/components/header/header.js');
    let content = fs.readFileSync(headerPath, 'utf8');

    // Update the Name/Logo placeholder
    content = content.replace(
        /<SubTitle>Name\/Logo<\/SubTitle>/,
        `<SubTitle>${projectName}</SubTitle>`
    );

    fs.writeFileSync(headerPath, content);
    console.log('✅ Updated header component');
}

async function createEnvFile() {
    const envPath = path.join(__dirname, '../.env');
    
    // Check if .env already exists
    if (fs.existsSync(envPath)) {
        console.log('⚠️  .env file already exists, skipping creation');
        return;
    }

    const envContent = `# Environment
NODE_ENV=development

# Express
EXPRESS_PORT=8000
`;

    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file');
}

async function createReadme(projectInfo) {
    const readmePath = path.join(__dirname, '../README.md');
    
    const { 
        projectName, 
        description, 
        longDescription, 
        author, 
        repositoryUrl, 
        features, 
        license,
        username,
        repoName 
    } = projectInfo;

    // Parse features into a list
    const featuresList = features 
        ? features.split(',').map(f => f.trim()).filter(f => f.length > 0)
        : [];

    const readmeContent = `# ${projectName}

${longDescription}

---

## 🚀 Tech Stack

- **Server**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **Client**: [React](https://reactjs.org/)
- **Styling**: [styled-components](https://styled-components.com/)
- **Build**: [Babel](https://babeljs.io/), [Webpack](https://webpack.js.org/)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

${featuresList.length > 0 ? `## ✨ Features

${featuresList.map(feature => `- ${feature}`).join('\n')}

---

` : ''}## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone ${repositoryUrl}.git
   cd ${repoName}
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to \`http://localhost:9000\`

---

## 📦 Available Scripts

- \`npm run dev\` – Runs both backend and frontend in development mode
- \`npm run start-react\` – Runs the React app using Webpack Dev Server
- \`npm run start-server\` – Starts the Express server using nodemon
- \`npm run build\` – Builds the app for production
- \`npm run start\` – Runs the production server
- \`npm test\` – Runs the test suite

---

## 🎨 Project Structure

\`\`\`
${repoName}/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── routes/            # Application routes
│   ├── theme/             # Styling and themes
│   └── utils/             # Utility functions
├── server/                # Express server
│   ├── api/               # API routes
│   └── utils/             # Server utilities
└── netlify/               # Netlify functions
\`\`\`

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ${license} License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**${author}**

- GitHub: [@${username}](https://github.com/${username})
- Repository: [${repositoryUrl}](${repositoryUrl})

---

## 🙏 Acknowledgments

- Built with [App Boilerplate](https://github.com/dcastillo3/app-boilerplate)
- React and Express communities for excellent documentation
- All contributors who help improve this project
`;

    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ Created new README.md');
}

async function cleanupSetupScript() {
    try {
        // Remove setup script from package.json
        const packagePath = path.join(__dirname, '../package.json');
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        if (packageJson.scripts && packageJson.scripts.setup) {
            delete packageJson.scripts.setup;
            fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
            console.log('✅ Removed setup script from package.json');
        }

        // Remove setup script file
        const setupScriptPath = path.join(__dirname, 'setup.js');
        if (fs.existsSync(setupScriptPath)) {
            fs.unlinkSync(setupScriptPath);
            console.log('✅ Removed setup script file');
        }

        // Remove scripts directory if it's empty
        const scriptsDir = path.join(__dirname);
        const remainingFiles = fs.readdirSync(scriptsDir);
        if (remainingFiles.length === 0) {
            fs.rmdirSync(scriptsDir);
            console.log('✅ Removed empty scripts directory');
        }
    } catch (error) {
        console.log('⚠️  Could not fully clean up setup script:', error.message);
    }
}

if (require.main === module) {
    setupProject();
}

module.exports = { setupProject };
