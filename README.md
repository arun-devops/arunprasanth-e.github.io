# Arunprasanth E - Professional Portfolio

A modern, responsive portfolio website showcasing Arunprasanth E's professional experience, skills, and certifications as an Associate Architect.

## Features

- Modern, responsive design with animations
- Sections for About, Areas of Expertise, Skills, Certifications, and Contact
- Mobile-friendly navigation
- Contact form (note: requires backend implementation for actual functionality)
- Smooth scrolling and interactive elements
- Optimized for GitHub Pages hosting

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS variables, flexbox, grid)
- JavaScript (vanilla JS, no frameworks)
- Font Awesome for icons
- Google Fonts

## How to Host on GitHub Pages

Follow these steps to host your portfolio on GitHub Pages:

1. **Create a GitHub Repository**
   - Sign in to your GitHub account
   - Click on the "+" icon in the top right corner and select "New repository"
   - Name your repository: `yourusername.github.io` (replace 'yourusername' with your actual GitHub username)
   - Make the repository public
   - Click "Create repository"

2. **Upload Your Portfolio Files**
   - Clone the repository to your local machine:
     ```
     git clone https://github.com/yourusername/yourusername.github.io.git
     ```
   - Copy all the portfolio files into the cloned repository folder
   - Add the files to git, commit, and push:
     ```
     cd yourusername.github.io
     git add .
     git commit -m "Initial portfolio upload"
     git push origin main
     ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes for your site to be published

4. **Access Your Portfolio**
   - Your portfolio will be available at `https://yourusername.github.io`
   - GitHub will show you the URL in the GitHub Pages section of the repository settings

## Customization

### Profile Image
- Replace the placeholder profile image by adding your own image to the `images` folder
- Update the image path in `index.html`

### Personal Information
- Edit the `index.html` file to update your personal information, skills, and certifications
- Customize colors and styles in the `css/styles.css` file

### Contact Form
- The contact form currently shows a success message but doesn't actually send data
- To make it functional, you'll need to implement a backend service or use a form submission service like Formspree

## Browser Compatibility

This portfolio is designed to work on modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for personal use and modification. Please provide attribution if you use this template.

---

Created with ❤️ for Arunprasanth E
