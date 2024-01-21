
GitHub Repositories Viewer

A simple web application to fetch and display GitHub repositories using the GitHub API wqith the pagination implemented on the repositories also by default the number of repos on the page is set to 10, but you can customise it according to your needs.

Table of Contents

1. Introduction
2. Features
3. Requirements
4. Installation
5. Usage
6. Configuration
7. Contributing
8. License

Introduction
GitHub Repositories Viewer is a web application that allows users to enter a GitHub username and fetch repositories associated with that user. It provides a clean and visually appealing display of repository information, including names, descriptions, and owner avatars.

Features
Fetch GitHub repositories by username.
Display repositories in a grid layout.
Pagination support for browsing multiple pages of repositories, by default the number of repo's per page is set to 10, but you can customise it upto 100 according to your needs. Here's how you can change it.

Assumptions
The topics are buttons which don't lead you anywhere and I thought it had to static so it's same for all the list elements.

Requirements
To run this project, you need the following:

A web browser (Google Chrome, Mozilla Firefox, etc.)
Installation
No installation is required. Simply open the index.html file in a web browser.

bash
Copy code
# Clone the repository (if needed)
git clone https://github.com/your-username/your-repo.git

# Open the index.html file in your preferred web browser
Usage
Open the index.html file in your web browser.
Enter a GitHub username in the search bar.
Click the "Fetch Repositories" button.
View the fetched repositories in a grid layout.
Use the pagination buttons to navigate through multiple pages of repositories.
Configuration
Before using the application, make sure to replace the placeholder access token in the script with your actual GitHub personal access token.

javascript
Copy code
// Replace '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' with your actual personal access token
const token = 'your-personal-access-token';
Contributing
If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Your contributions are welcome!

License
This project is licensed under the MIT License.