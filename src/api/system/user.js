import request from '@/utils/system/request';
// 获取数据api
export function getData(data) {
    return request({
        url: '/system/user/list',
        method: 'post',
        baseURL: '/mock',
        data
    });
}
// 新增
export function add(data) {
    return request({
        url: '/system/user/add',
        method: 'post',
        baseURL: '/mock',
        data
    });
}
// 编辑
export function update(data) {
    return request({
        url: '/system/user/update',
        method: 'post',
        baseURL: '/mock',
        data
    });
}
// 状态变更
export function updateStatus(data) {
    return request({
        url: '/system/user/updateStatus',
        method: 'post',
        baseURL: '/mock',
        data
    });
}
// 删除
export function del(data) {
    return request({
        url: '/system/user/del',
        method: 'post',
        baseURL: '/mock',
        data
    });
}
//# sourceMappingURL=user.js.map