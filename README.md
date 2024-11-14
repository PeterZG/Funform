# Funform

## Introduction

The Funform project is a simple HTML form that allows users to input address details, building type, and select various building features. JavaScript is used to validate inputs, handle events, and display a summary based on the entered information. This form demonstrates basic form handling and validation.

## Project Structure

- **funform/**: Main project directory.
  - **task1/**: Contains files for Task 1, which involves creating the form layout and implementing functionality.
    - **src/**: Directory containing source code files.
      - `index.html`: HTML structure of the form.
      - `script.js`: JavaScript functionality for form validation, feature selection, and summary generation.
    - `page.PNG`: Reference image of the expected form layout for Task 1.

## Task Details

### Task 1: Address Form with Features Selection

This task involves creating an interactive form that allows users to enter address information, select a building type, and choose building features.

- **HTML Structure** (`index.html`):
  - The form is structured using a table layout, with input fields for:
    - **Street Name**
    - **Suburb**
    - **Postcode**
    - **Date of Birth**
    - **Building Type** (dropdown menu with options for "Apartment" and "House")
    - **Features** (checkboxes for Heating, AirConditioning, Pool, and Sandpit)
  - Includes a "Select All" button for features and a "Reset" button to clear the form.

- **JavaScript Functionality** (`script.js`):
  - **Form Validation**:
    - Ensures that `Street Name` and `Suburb` have a valid length (between 3 and 50 characters).
    - Validates that `Postcode` is a 4-digit number.
    - Checks that `Date of Birth` follows the `DD/MM/YYYY` format and is a valid date.
  - **Feature Selection**:
    - Allows users to select all features at once using the "Select All" button, which toggles to "Deselect All" when all options are checked.
  - **Summary Display**:
    - Displays a summary in the textarea below the form, including the user's age (calculated from the Date of Birth), address details, building type, and selected features.
  - **Reset Function**:
    - Clears all form fields and unchecks all feature checkboxes when the "Reset" button is clicked.

## Running the Project

To view and test the form:

1. Open `index.html` in a web browser.
2. Enter the required information in each field.
3. Use the "Select All" button to toggle feature selections.
4. Click "Reset" to clear the form.

The summary of the form details will be displayed in the textarea after filling out the form.
