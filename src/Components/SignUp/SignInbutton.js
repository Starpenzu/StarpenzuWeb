import React from 'react';

const SignInButton =(props) => {

    return(
        <>
            <button className={props.className}>
                {props.buttonName}
            </button>
        </>
    )

}

export default SignInButton ;