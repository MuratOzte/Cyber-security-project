interface RegisterModel {
    email: string;
    password: string;
    comparePassword: string;
}

export const registerHandler = async ({
    email,
    password,
    comparePassword,
}: RegisterModel) => {
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                comparePassword,
            }),
        });

        if (!response.ok) {
            throw new Error('Register request failed');
        }

        console.log('Registration successful');
    } catch (error) {
        console.log(error);
    }
};

export const loginHandler = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error('Login request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
