import {memo} from 'react';

import styles from './Modal.module.css';

const Modal: React.FC<{show: boolean; close: () => void; children: string;}> = props => {
	/*
	useEffect(() => {
		 // console.log(" Modal component update");
	}); */
        return (
                <div className={styles.modal}
                    style={{
                        transform: props.show ? 'TranslateY(0)' : 'TranslateY(-100%)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
        );
};


export default memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);