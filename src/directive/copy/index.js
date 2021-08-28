import { ElMessage } from 'element-plus';
const directive = {
    mounted(el, binding) {
        el.copyData = binding.value;
        el.addEventListener('click', handleClick);
    },
    updated(el, binding) {
        el.copyData = binding.value;
    },
    beforeUnmount(el) {
        el.removeEventListener('click', el.__handleClick__);
    }
};
function handleClick(ev) {
    let input = document.createElement('input');
    input.value = this.copyData.toLocaleString();
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
    ElMessage({
        type: 'success',
        message: '复制成功'
    });
}
export default directive;
//# sourceMappingURL=index.js.map