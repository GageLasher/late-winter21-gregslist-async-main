import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
    let template = ""
    ProxyState.jobs.forEach(j => template += j.Template)
    document.getElementById("listings").innerHTML = template
}
export class JobsController {
    constructor(){
        ProxyState.on("jobs", _draw)
    }
    async viewJobs(){
        try {
            await jobsService.getAllJobs()
            document.getElementById("modal-body-slot").innerHTML = getJobForm()
            document.getElementById("create-button").classList.remove("visually-hidden")
        } catch (error) {
            Pop.error(error)
        }
    }

    async handleSubmit(id) {
        try {
          window.event.preventDefault()
          let form = window.event.target
          let rawData = {
            jobTitle: form.jobTitle.value,
            hours: form.hours.value,
            company: form.company.value,
            rate: form.rate.value,
            description: form.description.value,
          }
          if (!id) {
           jobsService.createJob(rawData)
          } else {
            jobsService.editJob(rawData, id)
          }
          let modal = document.getElementById('new-listing')
          form.reset()
          bootstrap.Modal.getOrCreateInstance(modal).hide() //NOTE closes bootstrap modal
          Pop.toast('Complete')
        }
        catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
}