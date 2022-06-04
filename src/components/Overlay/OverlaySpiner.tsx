import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Spinner from "../../ui/spinner/Spinner";
import {ReactComponent as Exit} from "../../assets/icons/exit.svg";
import Modal from "react-modal";

const OverlayWithSpinner = () => {
    const isLoading = useTypedSelector((state) => state.characters.isLoading)
    return (
        <>
            { isLoading &&
              <Modal
                isOpen={isLoading}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        zIndex: 10,
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        background: 'transparent',

                    },
                }}
              >
                <Spinner />
              </Modal>
           }
        </>
    );
};

export default OverlayWithSpinner;