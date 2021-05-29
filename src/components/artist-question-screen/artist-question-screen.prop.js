// Types
import PropTypes from "prop-types";
import {gameTypes} from "../../consts";

export const ArtistQuestionTypes = PropTypes.shape({
  type: PropTypes.oneOf([gameTypes.ARTIST]).isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
}).isRequired;
