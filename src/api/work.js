import request from '@/utils/system/request';
// 获取数据api
export function getData(data) {
    return request({
        url: '/work/list',
        method: 'post',
        baseURL: '/mock',
        data
    });
}
//# sourceMappingURL=work.js.map