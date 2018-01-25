import axios from 'axios'

const ENDPOINT = 'https://api.github.com/users'

export default {
  getUserProfileByUsername: async ({commit}, username) => {
    try {
      const userProfile = (await axios.get(`${ENDPOINT}/${username}`)).data
      commit('SET_USER_PROFILE', userProfile)
      const repos = (await axios.get(userProfile.repos_url)).data
      commit('SET_USER_REPOS', repos)
    } catch (error) {
      console.log('Error user not found')
    }
  }
}
