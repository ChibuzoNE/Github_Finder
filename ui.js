class UI {
    constructor(){
        this.profile = document.getElementById('profile')
    }

    showProfile(user){
        this.profile.innerHTML = `
    <div class="main-container">
        <div class="profile-container">
            <div class="left-profile">
                <img class="profile-img" src="${user.avatar_url}">
                <a href="${user.html_url}" targets="_blank"
                class="view-profile">View Profile</a>
            </div>
            <div class="right-profile">
                <div class="profile-badge">
                    <span class="buttons btn1">Public Repos:
                    ${user.public_repos}</span>
                    <span class="buttons btn2">Public Gists:
                    ${user.public_gists}</span>
                    <span class="buttons btn3">Followers:
                    ${user.followers}</span>
                    <span class="buttons btn4">Following:
                    ${user.following}</span>
                </div>
                <br><br>
                <div class="profile-info"">
                    <ul>
                        <li class=""list-group-item>Company: ${user.company}</li>
                        <li class=""list-group-item>Website/Blog: ${user.blog}</li>
                        <li class=""list-group-item>Location: ${user.location}</li>
                        <li class=""list-group-item>Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div class="repos"></div>
        `
    }

    showRepos(repos){
        let output = '';

        repos.forEach(function (repo){
            output += `
            <div class="section-repo-container">
                <div class="Main-repo-container">
                    <div class="repos-container">
                        <a href="${repo.html_url}">${repo.name}</a>
                    </div>
                    <div class="repo-list">
                        <li>stars: ${repo.stargazers_count}</li>
                        <li>Watchers: ${repo.watchers_count}</li>
                        <li>form: ${repo.forms_count}</li>
                    </div>
                </div>
            </div>
            `
        });

        document.getElementById('repos').innerHTML = output;
    }
    // clear profile from UI when input field is null
    clearProfile(){
        this.profile.innerHTML = ''
    }


    showAlert(message, className){

        this.clearAlert();
        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search')

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 2000)
    }


    clearAlert(){
        const currentAlert = document.querySelector('.alert')

        if(currentAlert){
            currentAlert.remove();
        }
    }
}