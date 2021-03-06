import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    return (
        <header className='Header'>
            <h1>{title}</h1>
            <Button color="Green" text="Add" />
        </header>
    )

}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;