import Modal from '../components/ui/Modal';
import {useState} from 'react';

const AboutPage: React.FC<{ show?: boolean; close?: () => void; }> = () => {
	const[modalIsVisible, setModalIsVisible] = useState(true);
	const closeModalHandler = () => {
		setModalIsVisible(false);
	};
	return (
		<div>
			Search Page!!!!!
			<Modal show = {modalIsVisible} close = {closeModalHandler}>
				Модальное окно
			</Modal>
		</div>
	);
};

export default AboutPage;