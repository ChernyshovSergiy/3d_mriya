import axios from 'axios'

export const state = () => ({
    apiUrl: 'http://127.0.0.1:9090/api/v1/page/contents',
    home_screen_massage: {
        headline: {
            $lang: ''
        },
        sub_headline: {},
        text: {}
    }
})

export const mutations = {
    setContent(state, payload) {
        if (payload) {
            state.home_screen_massage.headline = payload.headline
            state.home_screen_massage.sub_headline = payload.sub_headline
            state.home_screen_massage.text = payload.text
        } else {
            state.home_screen_massage = {}
        }
    }
}

export const actions = {
    async getContent({ commit }) {
        try {
            const response = await axios.get(`${state.apiUrl}`, {})
            commit('setContent', response.data.home_screen_massage.content)
        } catch (error) {
            commit('setContent', [])
        }
    }
}

export const getters = {
    screen_massage(state) {
        return state.home_screen_massage.headline
    }
}
