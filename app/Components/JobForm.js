import { Job } from "../Models/Jobs.js"

// NOTE just a place to keep the ugly form html out of site
export function getJobForm(job = {}) {
  // @ts-ignore
  const jobData = new Job(job)
  return `
  <form class="row  p-2" onsubmit="app.jobsController.handleSubmit('${jobData.id}')">
                  <h3 class="col-12">Create Job Listing</h3>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Job Title</label>
                    <input required type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="helpId"
                      placeholder="" value="${jobData.jobTitle}">
                  </div>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Company</label>
                    <input required type="text" class="form-control" name="company" id="company" aria-describedby="helpId"
                      placeholder="" value="${jobData.company}">
                  </div>
                  <div class="mb-3 col-2">
                    <label for="" class="form-label">Hours</label>
                    <input required type="number" class="form-control" name="hours" id="hours" aria-describedby="helpId"
                      placeholder=""  value="${jobData.hours}">
                  </div>
                  <div class="mb-3 col-12">
                    <label for="" class="form-label">Description</label>
                    <input maxlength="50" required type="text" class="form-control" name="description" id="description"
                      aria-describedby="helpId" placeholder="" value="${jobData.description}">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Rate</label>
                    <input required type="number" class="form-control" name="rate" id="rate" aria-describedby="helpId"
                      placeholder="" value="${jobData.rate}">
                  </div>
                    <button class="col-4 offset-8 btn btn-success"> ${job.id ? 'Edit' : 'Create'}</button>
                </form>`
}