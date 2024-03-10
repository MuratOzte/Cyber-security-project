interface Data {
    email: string;
    password: string;
    retypePassword: string;
}

const validation = (data: Data) => {
    if (data.password !== data.retypePassword) {
        return 'Passwords do not match';
    }
    if (
        data.email === '' ||
        data.password === '' ||
        data.retypePassword === ''
    ) {
        return 'All fields are required';
    }
    if (data.password.length < 6) {
        return 'Password must be at least 6 characters long';
    }
};

export default validation;
