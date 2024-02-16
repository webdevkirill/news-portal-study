import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('testClass')).toBe('testClass');
  });

  test('with first param and mods', () => {
    expect(classNames('testClass', { hovered: true, scrollable: false, any: undefined })).toBe('testClass hovered');
  });

  test('with first param and additional', () => {
    expect(classNames('testClass', {}, ['added', 'another'])).toBe('testClass added another');
  });

  test('with all params', () => {
    expect(classNames('testClass', { hovered: true, scrollable: false }, ['added', 'another'])).toBe(
      'testClass hovered added another',
    );
  });
});
