export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка валидации'],
      [2, 'Ошибка сети'],
      [3, 'Ошибка авторизации'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
