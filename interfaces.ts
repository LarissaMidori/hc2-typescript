interface User {
    name: string;
    email: string;
    address?: string;
}

function getUser(): User {
    return {
        name: 'Susan',
        email: 'susan@susan.com'
    }
}

function setUser(user: User) {
    //...
}