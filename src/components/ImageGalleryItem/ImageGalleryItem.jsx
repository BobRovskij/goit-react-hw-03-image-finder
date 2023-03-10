import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import style from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        largeImage: PropTypes.string.isRequired,
    };

    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(prevState => {
            return {
                showModal: !prevState.showModal,
            }
        })
    };

    render() {
        const { url, alt, largeImage } = this.props;

        return (
            <>
                <li className={style.imageGalleryItem} >
                    <img
                        src={url}
                        alt={alt}
                        className={style.imgGalleryItem}
                        onClick={this.toggleModal}
                    />
                </li>
                
                {this.state.showModal &&
                    <Modal
                        largeImage={largeImage}
                        alt={alt}
                        onClose={this.toggleModal}
                    />
                }
            </>
        );
    };  
};