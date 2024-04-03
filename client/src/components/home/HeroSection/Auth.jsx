import useState from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            {isLogin ? (
                <LoginContainer setIsLogin={setIsLogin} />
            ) : (
                <RegisterContainer setIsLogin={setIsLogin} />
            )}
        </>
    );
};

export default Auth;
