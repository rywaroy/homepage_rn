import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile';
const Axios = axios.create({
	baseURL: "http://localhost:3001/api/",
	// baseURL:'http://www.3zsd.cn:3000/api/',
	timeout: 10000,
	responseType: "json",
	//   withCredentials: true, // 是否允许带cookie这些
	headers: {
		"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
	}
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
	config => {
		// 在发送请求之前做某件事
		if (
			config.method === "post" ||
			config.method === "put"
		) {
			// 序列化
			config.data = qs.stringify(config.data);
		}
		return config;
	},
	error => {
		Toast.fail(error.message);
		return Promise.reject(error.message);
	}
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
	res => {
		if (res.data.status !== '0000') {
			Toast.fail(res.data.msg);
			return Promise.reject(res.data.Msg);
		}
		return res;
	},
	error => {
		if(error.message.indexOf('timeout') > -1){
			Toast.fail('请求超时,请检查网络', 1);
		}
		if(error.message.indexOf('Network Error') > -1){
			Toast.fail('当前无网络,请检查网络', 1);
		}
		return Promise.reject(error.message);
	}

);

export default {axios:Axios}
