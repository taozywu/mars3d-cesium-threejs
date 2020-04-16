// 图层
import axios from 'axios'

export function getMenus(id) {
  // const url = 'config/config.json';
  const url = '/cesium/manager/api/menus/?project__id=' + id
  return axios
    .get(url, {
      // params: data,
      dataType: 'json',
    })
    .then((res) => {
      console.log('getMenus--', res)
      return Promise.resolve(res.data)
    })
}

export function getTool(id) {
  const url = '/cesium/manager/api/widgets/?project__id=' + id
  return axios.get(url, {}).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function putUserdata(data) {
  // const url = 'config/config.json';
  const url = '/cesium/manager/api/menus/3/'
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime(),
    }
  };
  return axios.put(url, data, config).then((res) => {
    return Promise.resolve(res.data)
  })
}
