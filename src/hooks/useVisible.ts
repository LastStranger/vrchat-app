import { useImperativeHandle, useState } from "react";

export const useVisible = ref => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        handleModalVisible,
    }));
    const handleModalVisible = (flag: boolean) => {
        setVisible(flag);
    };

    return [visible, handleModalVisible] as const;
};
