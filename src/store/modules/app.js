const state = () => ({
    isCollapse: false,
    contentFullScreen: false,
    showLogo: true,
    fixedTop: false,
    showTabs: true,
    expandOneMenu: true,
    elementSize: 'mini',
    lang: '',
    theme: {
        state: {
            style: 'default',
            primaryColor: '#409eff',
            menuType: 'side'
        }
    }
});
// mutations
const mutations = {
    isCollapseChange(state, type) {
        state.isCollapse = type;
    },
    contentFullScreenChange(state, type) {
        state.contentFullScreen = type;
    },
    menuListChange(state, arr) {
        state.menuList = arr;
    },
    stateChange(state, option) {
        state[option.name] = option.value;
    }
};
// actions
const actions = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
//# sourceMappingURL=app.js.map