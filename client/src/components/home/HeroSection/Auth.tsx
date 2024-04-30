import { useState } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div
            className="select-none w-full flex justify-evenly items-center"
            style={
                isLogin
                    ? { alignItems: 'center', transform: 'translateY(-70px)' }
                    : { alignItems: 'center', transform: 'translateY(-70px)' }
            }
        >
            {isLogin ? (
                <LoginContainer setIsLogin={setIsLogin} />
            ) : (
                <RegisterContainer setIsLogin={setIsLogin} />
            )}
        </div>
    );
};

export default Auth;
