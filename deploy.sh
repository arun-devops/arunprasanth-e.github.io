#!/bin/bash

# GitHub Pages Deployment Script for Arunprasanth E's Portfolio

echo "Starting GitHub Pages deployment process..."

# Check if git is installed
if ! [ -x "$(command -v git)" ]; then
  echo 'Error: git is not installed.' >&2
  exit 1
fi

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
  
  # Create .gitignore if it doesn't exist
  if [ ! -f .gitignore ]; then
    echo "Creating .gitignore file..."
    cp .gitignore.example .gitignore 2>/dev/null || :
  fi
  
  echo "Git repository initialized."
else
  echo "Git repository already exists."
fi

# Ask for GitHub username
read -p "Enter your GitHub username: " username

# Configure remote repository
remote_exists=$(git remote -v | grep -c "origin")
if [ "$remote_exists" -eq 0 ]; then
  echo "Setting up remote repository..."
  git remote add origin "https://github.com/$username/$username.github.io.git"
  echo "Remote repository configured."
else
  echo "Remote repository already configured."
  echo "Current remote:"
  git remote -v
  
  read -p "Do you want to update the remote URL? (y/n): " update_remote
  if [ "$update_remote" = "y" ]; then
    git remote set-url origin "https://github.com/$username/$username.github.io.git"
    echo "Remote URL updated."
  fi
fi

# Add all files
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
read -p "Enter commit message (default: 'Update portfolio'): " commit_message
commit_message=${commit_message:-"Update portfolio"}
git commit -m "$commit_message"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main || git push -u origin master

echo "Deployment process completed!"
echo "Your portfolio should be available at: https://$username.github.io/"
echo "Note: It might take a few minutes for the changes to be visible."
