import { FeaturesGalleryItem } from '../FeaturesGalleryItem/FeaturesGalleryItem';
import PropTypes from 'prop-types';
import { List } from './FeaturesGallery.styled';

export const FeaturesGallery = ({ features }) => {
  return (
    <List>
      {features.map(({ title, text, id, isRed }) => (
        <FeaturesGalleryItem
          status={isRed}
          title={title}
          content={text}
          key={id}
        />
      ))}
    </List>
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
