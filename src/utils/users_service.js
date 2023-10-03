export function getUser() {
    const token = getToken();
    
    if(token) {
        const payload = getPayload(token);
        return payload ? payload : null;
    } else {
        return null
    };
};  

export function getToken() {
    const token = localStorage.getItem('token');

    if(token === null) return null;

    const payload = getPayload(token);

    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    };
    return token;
};

function getPayload(token) {
    try {
        const payload = JSON.parse(
            window.atob(
                token.split('.')[1]
            )
        );
        return payload;
    } catch (error) {
        return null;
    }
}

