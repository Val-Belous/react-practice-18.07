import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section>
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
