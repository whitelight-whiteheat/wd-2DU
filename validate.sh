#!/bin/bash

# Create validation directory if it doesn't exist
mkdir -p validation

# List of HTML files to validate
HTML_FILES=("project.html" "calendar.html" "tags.html" "taskDisplay.html" "searchModal.html" "taskModal.html")

echo "HTML Validation Helper"
echo "====================="
echo "This script will help you validate your HTML files using the W3C Validator."
echo ""
echo "For each file, you will need to:"
echo "1. Go to https://validator.w3.org/"
echo "2. Click on 'Validate by File Upload'"
echo "3. Upload the file"
echo "4. Take a screenshot of the results"
echo "5. Save it as '[filename]-validation.png' in the validation folder"
echo ""
echo "Press Enter to continue..."
read

for file in "${HTML_FILES[@]}"; do
  echo ""
  echo "Validating $file..."
  echo "1. Opening $file in browser..."
  open "$file"
  echo "2. Please validate the file at https://validator.w3.org/"
  echo "3. Take a screenshot of the results"
  echo "4. Save it as 'validation/${file%.html}-validation.png'"
  echo ""
  echo "Press Enter when you're ready to continue to the next file..."
  read
done

echo ""
echo "Validation process completed!"
echo "Please check the validation folder for your screenshots."
echo "If any files failed validation, fix the issues and run this script again." 