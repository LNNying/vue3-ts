const directive = {
    mounted(el, binding) {
        if (typeof binding.value !== 'function') {
            throw 'callback must be a function';
        }
        let timer = null;
        el.__handleClick__ = function (e) {
            if (timer) {
                clearInterval(timer);
            }
            timer = setTimeout(() => {
                binding.value();
            }, 200);
        };
        el.addEventListener('click', el.__handleClick__);
    },
    beforeUnmount(el) {
        el.removeEventListener('click', el.__handleClick__);
    }
};
export default directive;
//# sourceMappingURL=index.js.map