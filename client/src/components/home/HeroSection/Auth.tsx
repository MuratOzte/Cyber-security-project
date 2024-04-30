import { useState } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="select-none w-full flex justify-center h-[350px] items-center">
            {isLogin ? (
                <LoginContainer setIsLogin={setIsLogin} />
            ) : (
                <RegisterContainer setIsLogin={setIsLogin} />
            )}
        </div>
    );
};

export default Auth;
