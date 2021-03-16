import React from 'react';
import LoaderStyles from './LoaderStyles';
import LoadingIcon from '../../assets/loading.svg';

const Loader = () => {
    return (
        <LoaderStyles>
            <div>
                <img 
                    src={LoadingIcon} 
                    alt='loading icon'
                    width="100"
                    height="100"
                />
            </div>
        </LoaderStyles>
    );
}

export default Loader;