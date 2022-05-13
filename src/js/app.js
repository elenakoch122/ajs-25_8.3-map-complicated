export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.userSettings = new Map();

    this.availableSettings = {
      theme: ['light', 'gray'],
      music: ['pop', 'rock', 'chillout', 'off'],
      difficulty: ['normal', 'hard', 'nightmare'],
    };
  }

  changeSettings(name, value) {
    if (name in this.availableSettings && this.availableSettings[name].includes(value)) {
      this.userSettings.delete(name);
      this.userSettings.set(name, value);
      return this.userSettings;
    }
    return 'Ошибка! Такие параметры настроек не предусмотрены.';
  }

  // get settings() {
  //   return new Map(); // не поняла что должен возвращать,что должно быть в Map?
  // }
}
