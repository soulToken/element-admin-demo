import axios from 'axios';

// 这边是所有的请求接口的配置文件，不同环境修改 这个 base 就好了， 包括正式环境 也是修改 这里面（在这里测试一下 登录接口， 我随便用了之前项目的一个接口）  下面的都是 promise 语法，在其他组件里面调用就行了
// let base='http://192.168.1.55:8080/apis'
let base="http://13.250.177.118/ManagerServer"

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.post(`${base}/moxIntlBlackGround/customer/getList`, params); };

//用户列表
export const getUserListPage = params => { return axios.post(`${base}/moxIntlBlackGround/customer/getList`, params); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

//登陆接口
export const gettest = params => { return axios.post(`${base}/moxIntlBlackGround/manager/checkLogin`, params); };

//穴位列表
export const getAcupointList = params => { return axios.post(`${base}/moxIntlBlackGround/acupoint/getList`, params); };

//穴位编辑

export const acupointEditor = params => { return axios.post(`${base}/moxIntlBlackGround/acupoint/edit`, params); };

//穴位新增

export const acupointAdd = params => { return axios.post(`${base}/moxIntlBlackGround/acupoint/add`, params); };

//删除穴位

export const acupointDelete = params => { return axios.post(`${base}/moxIntlBlackGround/acupoint/delete`, params); };

//症状列表

export const symptomList = params => { return axios.post(`${base}/moxIntlBlackGround/symptom/getList`, params); };

//症状编辑

export const symptomEditor = params => { return axios.post(`${base}/moxIntlBlackGround/symptom/edit`, params); };

//症状新增

export const symptomAdd = params => { return axios.post(`${base}/moxIntlBlackGround/symptom/add`, params); };

//症状删除

export const symptomDelet = params => { return axios.post(`${base}/moxIntlBlackGround/symptom/delete`, params); };

//上传图片地址

export const upLoadUrl = `${base}/common/uploadPic`;