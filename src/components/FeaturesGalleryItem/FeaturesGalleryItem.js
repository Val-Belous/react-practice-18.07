import PropTypes from 'prop-types';

export const FeaturesGalleryItem = ({ title, content }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
};

FeaturesGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
