/**
 * @author howel52
 * @since 2020-05-22
 */

import { toArray, isConstructable, getWrapperId } from '../utils';

test('utils: toArray', () => {
  expect(toArray([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(toArray(1)).toStrictEqual([1]);
});

test('utils: isConstructable', () => {
  function A() {}
  const a = () => {};

  expect(isConstructable(A)).toBe(true);
  expect(isConstructable(a)).toBe(false);
});

test('utils: getWrapperId', () => {
  expect(getWrapperId('mywrap')).toBe('__qiankun_microapp_wrapper_for_mywrap__');
  expect(getWrapperId('myWrap')).toBe('__qiankun_microapp_wrapper_for_my_wrap__');
  expect(getWrapperId('my-wrap')).toBe('__qiankun_microapp_wrapper_for_my_wrap__');
});
