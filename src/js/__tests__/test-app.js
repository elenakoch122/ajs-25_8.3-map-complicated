import Settings from '../app';

test('create an instance of Settings', () => {
  expect(new Settings()).toBeInstanceOf(Settings);
});

test('changeSettings method if arguments is in the list of the available settings', () => {
  const result = new Settings();
  result.changeSettings('music', 'off');
  expect(result.userSettings.get('music')).toBe('off');
});

test('changeSettings method if error', () => {
  const result = new Settings();
  expect(result.changeSettings('music', 'jazz')).toBe('Ошибка! Такие параметры настроек не предусмотрены.');
});

test('get settings method', () => {
  const result = new Settings();
  result.changeSettings('music', 'off');
  expect(result.settings.get('music')).toBe('off');
});
