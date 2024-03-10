import { useImperativeHandle, useState } from "react";

interface Props {
    handleModalVisible: (visible: boolean) => void;
    ref: any;
}
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
