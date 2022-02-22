export class Job {
    constructor(data) {
        this.id = data.id || ""
        this.company = data.company || ""
        this.jobTitle = data.jobTitle || ""
        this.hours = data.hours || ""
        this.rate = data.rate || ""
        this.description = data.description || ""
    }
    get Template() {
        return `
          <div class="col-md-4">
            <div class="bg-white rounded shadow">
              <div class="p-3">
                <p>${this.company} | ${this.jobTitle} | Hours: ${this.hours}</p>
                <p></p>
                <p>${this.description}</p>
                <p>$${this.rate} Hour</p>
                <div class="text-end">
                <button class="btn btn-outline-warning" onclick="app.housesController.editHouse('${this.id}')"> Edit </button>
                <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
                </div>
              </div>
            </div>
          </div>
        `
      }
}