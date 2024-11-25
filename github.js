// HTTP library 
class Github{
    constructor(){
        this.client_id = 'Ov23liOAe2D4TvGYcpW0';
        this.client_secret = '141ed06e7bea00e3decf7a41876ed6ee93e75a38';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
            &${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
                &${this.client_secret}`)

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}