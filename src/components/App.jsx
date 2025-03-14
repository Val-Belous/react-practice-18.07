import { Section } from './Section/Section';
import { FeaturesGallery } from './FeaturesGallery/FeaturesGallery';
import featuresData from '../data/features.json';

export const App = () => {
  return (
    <Section>
      <FeaturesGallery features={featuresData} />
    </Section>
  );
};
