import fetch from 'dva/fetch';
import { message } from 'antd';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function isContains(str, substr) {
  return str.indexOf(substr) >= 0;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default async function request(url, options) {
  const response = await fetch(url, options);
  const deleteOperator = isContains(url, 'delete');
  checkStatus(response);
  const data = await response.json();
  let ret = {};
  if (!data) {
    return [];
  } else {
    if (data.success === false) {
      let error = null;
      if (data.error) {
        error = new Error(data.error);
      } else if (data.msg) {
        error = data.msg;
      }
      throw error;
    } else {
      ret = {
        data,
      };
      if (deleteOperator) {
        if (data.msg) {
          message.success(data.msg);
        }
      }
    }
    return ret;
  }
}
