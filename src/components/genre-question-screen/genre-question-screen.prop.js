// Types
import PropTypes from "prop-types";
import {gameTypes} from "../../consts";

export const GenreQuestionTypes = PropTypes.shape({
  type: PropTypes.oneOf([gameTypes.GENRE]).isRequired,
  genre: PropTypes.oneOf([
    `rock`,
    `pop`,
    `jazz`,
    `country`,
    `electronic`,
    `reggae`,
    `alternative`,
  ]).isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.oneOf([
          `rock`,
          `pop`,
          `jazz`,
          `country`,
          `electronic`,
          `reggae`,
          `alternative`,
        ]).isRequired,
      }).isRequired
  ).isRequired,
}).isRequired;
