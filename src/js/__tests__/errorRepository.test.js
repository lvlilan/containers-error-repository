import ErrorRepository from '../errorRepository';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('хранит Map', () => {
    expect(repo.errors).toBeInstanceOf(Map);
  });

  test('translate возвращает описание по коду', () => {
    expect(repo.translate(1)).toBe('Ошибка валидации');
    expect(repo.translate(2)).toBe('Ошибка сети');
    expect(repo.translate(3)).toBe('Ошибка авторизации');
  });

  test('translate возвращает Unknown error для неизвестного кода', () => {
    expect(repo.translate(999)).toBe('Unknown error');
  });
});
