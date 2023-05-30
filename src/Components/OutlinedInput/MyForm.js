import React, { useState } from 'react';
import Input from './input';

const MyForm = () => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <form>
            <Input
                label="Name"
                value={name}
                onChange={handleNameChange}
            />
            {/* Other form inputs */}
        </form>
    );
};

export default MyForm;
