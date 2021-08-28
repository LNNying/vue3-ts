import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
import system from './zh-cn/system';
import common from './zh-cn/common';
import menu from './zh-cn/menu';
const lang = {
    el: zhLocale.el,
    message: {
        language: '中文',
        ...system,
        ...common,
        ...menu
    }
};
export default lang;
//# sourceMappingURL=zh-cn.js.map