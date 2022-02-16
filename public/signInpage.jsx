import React from 'react';

const LoginPage = ({ authService }) => {
    const onLogin = (event) => {
        authService.login(event.currentTarget.value)
    };

    return (
        <>
        <section>
            <p>sign in with provider</p>
        </section>

        <section>
            <div className='login'>
                <button className='google' onClick={onLogin} value="Google">
                    use your google account
                </button>

                <button className='email' onClick={onLogin} value="Email">
                    use your Email account
                </button>
            </div>
        </section>
        </>
    );
};

export default LoginPage;