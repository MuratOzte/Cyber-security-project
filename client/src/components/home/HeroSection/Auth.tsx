import { useState } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';



const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    

    return (
        <div className="select-none">
            {isLogin ? (
                <LoginContainer setIsLogin={setIsLogin} />
            ) : (
                <RegisterContainer setIsLogin={setIsLogin} />
            )}
        </div>
    );
};

export default Auth;
