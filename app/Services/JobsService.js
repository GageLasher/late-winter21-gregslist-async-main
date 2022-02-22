import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Jobs.js"
import { api } from "./AxiosService.js"
class JobsService {
    async getAllJobs(){
    const res = await api.get("jobs")
    ProxyState.jobs = res.data.map(rd => new Job(rd))
    }
    async createJob(newJob) {
        // post request takes 2 arguments, the endpoint/collection & the data to create (payload)
        const res = await api.post('jobs', newJob)
        let realJob = new Job(res.data)
        ProxyState.jobs = [realJob, ...ProxyState.jobs]
      }
     
      async deleteJob(jobId) {
        const res = await api.delete('jobs/' + jobId)

        ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
      }
      async editJob(updatedJob, id) {
    
        const res = await api.put('jobs/' + id, updatedJob)
     
        const jobIndex = ProxyState.jobs.findIndex(j => j.id == id)
        ProxyState.jobs.splice(jobIndex, 1, new Job(res.data))
        ProxyState.jobs = ProxyState.jobs
    
      }
}


export const jobsService = new JobsService()