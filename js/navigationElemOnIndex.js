// Для навигационного меню на Главной странице
/**
 * Создаем разметку для навигационных элементов с датами.
 *
 */
export function createDateElementHTML(date) {
    const day = date.getDate();
    const weekday = date.toLocaleString('ru-Ru', {
      weekday: 'short',
    });
  
    return `
      <span class="page-nav__day-week">${weekday}</span>
      <span class="page-nav__day-number">${day}</span>
    `;
  }
  
  /**
   * Добавляем дата-атрибуты для навигационных элементов с датами.
   *
   */
  export function createDateElementDataAttributes(elemnt, year, month, day) {
    elemnt.dataset.year = year;
    elemnt.dataset.month = month;
    elemnt.dataset.day = day;
  }