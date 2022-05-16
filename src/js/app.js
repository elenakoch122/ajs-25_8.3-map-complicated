export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.userSettings = new Map();

    this.availableSettings = new Map([
      ['theme', new Set(['light', 'gray'])],
      ['music', new Set(['pop', 'rock', 'chillout', 'off'])],
      ['difficulty', new Set(['normal', 'hard', 'nightmare'])],
    ]);
  }

  changeSettings(name, value) {
    if (this.availableSettings.has(name) && this.availableSettings.get(name).has(value)) {
      this.userSettings.delete(name);
      this.userSettings.set(name, value);
      return this.userSettings;
    }
    return 'Ошибка! Такие параметры настроек не предусмотрены.';
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
