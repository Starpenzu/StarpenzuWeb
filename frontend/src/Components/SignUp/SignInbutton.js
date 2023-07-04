import React from 'react';

const SignInButton =({className, buttonName, onclick}) => {

    return(
        <>
            <button className={className} onClick={onclick} id={'dddh'}>
                {buttonName}
            </button>
        </>
    )

}

export default SignInButton ;