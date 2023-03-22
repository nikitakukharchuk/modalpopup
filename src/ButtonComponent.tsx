import React, { useState } from 'react';
import SecondComponent from './ModalComponent';
import {Button} from "antd";

const FirstComponent = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button onClick={showModal}>Open Modal</Button>
            <SecondComponent visible={visible} onCancel={handleCancel} />
        </>
    );
};

export default FirstComponent;
