interface RegisterModel {
    email: string;
    password: string;
    comparePassword: string;
}

export const registerHandler = ({
    email,
    password,
    comparePassword,
}: RegisterModel) => {
    try {
        fetch('http://localhost:3000/auth/register', {
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
    } catch (error) {
        console.log(error);
    }
};

export const loginHandler = ({ email, password }: RegisterModel) => {
    try {
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
    } catch (error) {
        console.log(error);
    }
};
