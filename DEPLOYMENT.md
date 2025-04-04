# Deployment Instructions for 2DU Task Management Application

This document provides step-by-step instructions for deploying the 2DU task management application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Basic knowledge of command line operations

## Deployment Steps

### 1. Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "wd-2DU")
4. Choose whether to make it public or private
5. Do not initialize with a README, .gitignore, or license
6. Click "Create repository"

### 2. Initialize Local Repository and Push Code

1. Open your terminal/command prompt
2. Navigate to your project directory:
   ```
   cd path/to/your/project
   ```
3. Initialize a Git repository:
   ```
   git init
   ```
4. Add all files to the repository:
   ```
   git add .
   ```
5. Commit the files:
   ```
   git commit -m "Initial commit"
   ```
6. Add the remote repository:
   ```
   git remote add origin https://github.com/yourusername/wd-2DU.git
   ```
7. Push the code to GitHub:
   ```
   git push -u origin main
   ```
   (Note: If your default branch is named "master" instead of "main", use that instead)

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually "main")
5. Click "Save"
6. Wait a few minutes for GitHub to deploy your site
7. Your site will be available at: `https://yourusername.github.io/wd-2DU/`

### 4. Verify Deployment

1. Visit the URL provided by GitHub Pages
2. Test all functionality to ensure everything works correctly:
   - Navigation between pages
   - Adding and deleting tasks
   - Calendar view
   - Tags view
   - Search functionality

## Troubleshooting

### Common Issues

1. **Page not found (404) error**:

   - Ensure your repository is public
   - Check that GitHub Pages is enabled in repository settings
   - Verify that the branch name is correct

2. **Links not working**:

   - Make sure all file paths are relative and correct
   - Check that all HTML files are in the root directory

3. **JavaScript functionality not working**:
   - Check browser console for errors
   - Verify that all script files are properly linked
   - Ensure localStorage is available and working

### Getting Help

If you encounter issues not covered here:

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Search for similar issues on [GitHub Community](https://github.community/)
- Contact GitHub support if necessary

## Updating the Deployed Site

To update your deployed site:

1. Make changes to your local files
2. Commit the changes:
   ```
   git add .
   git commit -m "Description of changes"
   ```
3. Push to GitHub:
   ```
   git push origin main
   ```
4. GitHub Pages will automatically update your site (may take a few minutes)

## Alternative Deployment Options

While GitHub Pages is recommended for this project, you could also deploy to:

- **Netlify**: Offers free hosting with automatic deployments
- **Vercel**: Provides free hosting with good performance
- **Firebase Hosting**: Google's hosting solution with a generous free tier

Each of these platforms has its own deployment process, but they all support static websites like 2DU.
