import axios from 'axios'

export const state = () => ({
    apiUrl: 'http://127.0.0.1:9090/api/v1/page/menus',
    menu: [],
    menu1: [],
    title1: '',
    points1: [],
    title2: '',
    points2: [],
    title3: '',
    points3: [],
    title4: '',
    points4: [],
    massage: ''
})

export const mutations = {
    setMenu(state, payload) {
        if (payload) {
            state.menu = payload
        } else {
            state.menu = []
        }
    },
    setTitle1(state, payload) {
        // console.log(payload)
        if (payload) {
            state.title1 = payload
        } else {
            state.title1 = ''
        }
    },
    setPoints1(state, payload) {
        // console.log(payload)
        if (payload) {
            state.points1 = payload
        } else {
            state.points1 = []
        }
    },
    setTitle2(state, payload) {
        // console.log(payload)
        if (payload) {
            state.title2 = payload
        } else {
            state.title2 = ''
        }
    },
    setPoints2(state, payload) {
        // console.log(payload)
        if (payload) {
            state.points1 = payload
        } else {
            state.points1 = []
        }
    },
    setTitle3(state, payload) {
        // console.log(payload)
        if (payload) {
            state.title3 = payload
        } else {
            state.title3 = ''
        }
    },
    setPoints3(state, payload) {
        // console.log(payload)
        if (payload) {
            state.points3 = payload
        } else {
            state.points3 = []
        }
    },
    setTitle4(state, payload) {
        // console.log(payload)
        if (payload) {
            state.title4 = payload
        } else {
            state.title4 = ''
        }
    },
    setPoints4(state, payload) {
        // console.log(payload)
        if (payload) {
            state.points4 = payload
        } else {
            state.points4 = []
        }
    },
    setMassage(state, payload) {
        if (payload) {
            state.massage = payload
        } else {
            state.massage = ''
        }
    }
}

export const actions = {
    async getMenu({ state, commit }, $lang) {
        console.log('Current: ' + $lang)
        try {
            const response = await axios.post(`${state.apiUrl}`, {
                language: $lang
            })
            // response => response.json()
            console.log('Came: ' + response.data.data.section1.points)
            // console.log('Massage: ' + response.data.massage)
            commit('setMenu', response.data.data)
            commit('setTitle1', response.data.data.section1.title)
            commit('setPoints1', response.data.data.section1.points)
            commit('setTitle2', response.data.data.section2.title)
            commit('setPoints2', response.data.data.section2.points)
            commit('setTitle3', response.data.data.section3.title)
            commit('setPoints3', response.data.data.section3.points)
            commit('setTitle4', response.data.data.section4.title)
            commit('setPoints4', response.data.data.section4.points)
            commit('setMassage', response.data.massage)
        } catch (error) {
            commit('setMenu', [])
            commit('setMassage', '')
        }
    }
}

export const getters = {
    menu(state) {
        return state.menu
    },
    menu1(state) {
        return state.menu1
    },

    title1(state) {
        return state.title1
    },

    points1(state) {
        return state.points1
    },
    title2(state) {
        return state.title2
    },

    points2(state) {
        return state.points2
    },

    title3(state) {
        return state.title3
    },

    points3(state) {
        return state.points3
    },

    title4(state) {
        return state.title4
    },

    points4(state) {
        return state.points4
    },

    massage(state) {
        return state.massage
    }
}
