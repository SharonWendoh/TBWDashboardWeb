export async function registerUser(username: string, password: string ){
    try {
        const response = await fetch(`/api/auth/register`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        console.log({ response })
    } catch (error) {
        console.error('Error Registering User', error)
    }
}