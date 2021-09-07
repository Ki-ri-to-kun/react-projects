import React, {createContext, useState} from 'react';

const SidebarContext = createContext({
    enteredDestination: '',
    changeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {}
});

export const SidebarContextProvider: React.FC = props => {
    const[enteredDestination, setEnteredDestination] = useState('');

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredDestination(e.target.value);	
	};

    const context = {
        enteredDestination,
        changeInputHandler
    };

    return (
        <SidebarContext.Provider value = {context}>
            {props.children}
        </SidebarContext.Provider>
        );
};


export default SidebarContext;