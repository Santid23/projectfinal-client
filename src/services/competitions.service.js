
import AxiosConfig from "./axios"

class CompetitionService extends AxiosConfig {
  constructor() {
    super("competitions")
  }

  async getAllCompetitions() {
    const response = await this.axios.get("/list")
    return response.data
  }

  async getOneCompetition(id) {
    const response = await this.axios.get(`/getOne/${id}`)
    return response.data
  }

  async creatCompetition(data) {
    
    const response = await this.axios.post("/create", data)
    return response.data
  }

  async editCompetition(id, data) {
    const response = await this.axios.put(`/edit/${id}`, data)
    return response.data
  }
}

export default new CompetitionService()
