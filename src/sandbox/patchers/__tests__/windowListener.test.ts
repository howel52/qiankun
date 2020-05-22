/**
 * @author howel52
 * @since 2020-05-22
 */

import { sleep } from '../../../utils';
import patch from '../windowListener';

test('patcher: windowListener', async () => {
  const func = jest.fn();
  const free = patch();
  const callback = () =>
    setTimeout(() => {
      func();
    }, 100);

  window.addEventListener('click', callback);
  window.dispatchEvent(new Event('click'));
  await sleep(101);
  expect(func).toBeCalledTimes(1);

  free();

  await sleep(101);
  window.dispatchEvent(new Event('click'));
  expect(func).toBeCalledTimes(1);

  window.addEventListener('click', callback);
  window.dispatchEvent(new Event('click'));
  await sleep(101);
  expect(func).toBeCalledTimes(2);

  window.removeEventListener('click', callback);
  window.dispatchEvent(new Event('click'));
  await sleep(101);
  expect(func).toBeCalledTimes(2);
});
