import PropTypes from 'prop-types';
import { Text, Item, Par } from './FeaturesGalleryItem.styled';

export const FeaturesGalleryItem = ({ title, content, status }) => {
  return (
    <Item>
      <Text>{title}</Text>
      <Par status={status}>{content}</Par>
    </Item>
  );
};

FeaturesGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
