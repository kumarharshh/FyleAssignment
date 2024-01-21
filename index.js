    const userDetailsContainer = document.getElementById('userDetails');
    const repositoriesContainer = document.getElementById('repositories');
    const currentPageSpan = document.getElementById('currentPage');
    const searchInput = document.getElementById('searchInput');
    const token = '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'; // Replace with your actual personal access token
    let username = '';
    let currentPage = 1;
    let repositoriesData = [];
    let userData = null;

    async function fetchRepositories() {
      username = document.getElementById('usernameInput').value.trim();

      if (username === '') {
        alert('Please enter a GitHub username.');
        return;
      }

      showLoader();

      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=10`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        userData = await userResponse.json();
        repositoriesData = await reposResponse.json();

        if (repositoriesData.length === 0) {
          repositoriesContainer.innerHTML = '<p>No repositories found.</p>';
          return;
        }

        displayUserDetails();
        filterRepositories();
        updateCurrentPage();
      } catch (error) {
        console.error('Error fetching repositories:', error);
        repositoriesContainer.innerHTML = '<p>Error fetching repositories.</p>';
      } finally {
        hideLoader();
      }
    }

    function displayUserDetails() {
      const userImage = document.createElement('img');
      userImage.src = userData.avatar_url;
      userImage.alt = 'User Avatar';

      const userInfo = document.createElement('div');
      userInfo.className = 'user-info';
      const userName = document.createElement('h2');
      userName.textContent = userData.name || 'Name not available';
      const userBio = document.createElement('p');
      userBio.textContent = userData.bio || 'Bio not available';
      const userLink = document.createElement('a');
      userLink.href = userData.html_url;
      userLink.target = '_blank';
      userLink.textContent = 'View GitHub Profile';

      userDetailsContainer.innerHTML = '';
      userDetailsContainer.appendChild(userImage);
      userInfo.appendChild(userName);
      userInfo.appendChild(userBio);
      userInfo.appendChild(userLink);
      userDetailsContainer.appendChild(userInfo);
    }

    function showLoader() {
      repositoriesContainer.innerHTML = '<div class="loader">Loading...</div>';
    }

    function hideLoader() {
      // You can customize the loading completion message if needed
    }

    function nextPage() {
      currentPage++;
      fetchRepositories();
    }

    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        fetchRepositories();
      }
    }

    function updateCurrentPage() {
      currentPageSpan.innerText = currentPage;
      document.querySelector('.search-bar').style.display = 'block';
      document.getElementById('togglebtns').style.display = 'block';
      document.getElementsByClassName('search-bar-title-desc')[0].style.display = 'block';
    }

    function filterRepositories() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredRepositories = repositoriesData.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm) || (repo.description && repo.description.toLowerCase().includes(searchTerm))
      );

      const card = filteredRepositories.map(repo => `
        <div class="repo-box">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <p>${repo.description || 'No description'}</p>
          <button class="btns">JavaScript</button>
          <button class="btns">React</button>
        </div>
      `).join('');

      repositoriesContainer.innerHTML = card;
    }
