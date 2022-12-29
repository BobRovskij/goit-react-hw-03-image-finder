import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

export class Modal extends Component {
    static propTypes = {
        largeImage: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    };

    handleKeydown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImage, alt } = this.props;
        const modal = document.querySelector('#modal');
        
        return createPortal(
            <div className={style.overlay} onClick={this.handleOverlayClick}>
                <div className={style.modal}>
                    <img src={largeImage} alt={alt} />
                </div>
            </div>,
            modal
        );
    };
}