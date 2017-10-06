import React from 'react';
import IconButton from 'material-ui/IconButton';

const styles = {
    button: {
      backgroundColor: '#FFDFDF'
    },
    smallIcon: {
        width: 36,
        height: 36,
        backgroundColor: '#99C7FF',
    },
    mediumIcon: {
        width: 48,
        height: 48,
        backgroundColor: '#FFDFDF',
    },
    largeIcon: {
        width: 60,
        height: 60,
        backgroundColor: '#99C7FF',
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
        backgroundColor: '#FFDFDF',
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
        backgroundColor: '#99C7FF',
    },
    large: {
        width: 120,
        height: 120,
        padding: 30,
        backgroundColor: '#FFDFDF',
    },
};

const IconDemo = ({ children }) => (
    <div>
        <IconButton style={ styles.button }>
            { children }
        </IconButton>

        <IconButton
            iconStyle={styles.smallIcon}
            style={styles.small}
        >
            { children }
        </IconButton>

        <IconButton
            iconStyle={styles.mediumIcon}
            style={styles.medium}
        >
            { children }
        </IconButton>

        <IconButton
            iconStyle={styles.largeIcon}
            style={styles.large}
        >
            { children }
        </IconButton>
    </div>
);

export default IconDemo;