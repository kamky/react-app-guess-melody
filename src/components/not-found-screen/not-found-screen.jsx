// React
import React from "react";

// Components NotFoundScreen
export const NotFoundScreen = () => {
  return (
    <section className="modal">
      <h2 className="modal__title">Произошла ошибка!</h2>
      <p className="modal__text">
        Статус: 404. Запрашиваемая страница не существует.
      </p>
    </section>
  );
};
