import { FeaturesGalleryItem } from '../FeaturesGalleryItem/FeaturesGalleryItem';
import PropTypes from 'prop-types';

export const FeaturesGallery = ({ features }) => {
  return (
    <ul>
      {features.map(({ title, text, id }) => (
        <FeaturesGalleryItem title={title} content={text} key={id} />
      ))}
    </ul>
  );
};

FeaturesGallery.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
