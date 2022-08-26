export default class Character {
    constructor({name, image, species, gender, origin, status}){
        this.name=name
        this.image=image
        this.species=species
        this.gender=gender
        this.origin=origin.name
        this.status=status
        this.characterContainer = document.querySelector('#characterContainer')
        this.render()
    }
    build(){
        return `
        <article class="container d-flex flex-column gap-5">
            <div class="row mt-2">
                <img src="${this.image}" alt="" class="px-0 rounded-circle border border-primary border-3">
            </div>
            <div class="row mt-1 d-flex flex-column gap-3 align-items-center">
                <h2 class="bg-light col-12 h-auto w-75 fw-bold h1 text-center rounded-pill border-primary border-bottom border-end border-5">${this.name}</h2>
                <h3 class="bg-light col-12 h-auto w-75 text-center fs-1 rounded-pill border-primary border-bottom border-end border-5">${this.species}</h3>
                <h3 class="bg-light col-12 h-auto w-75 text-center fs-1 rounded-pill border-primary border-bottom border-end border-5">${this.gender}</h3>
                <h3 class="bg-light col-12 h-auto w-75 text-center fs-2 rounded-pill border-primary border-bottom border-end border-5">${this.origin}</h3>
                <h3 class="bg-light col-12 h-auto w-75 text-center fs-1 rounded-pill border-primary border-bottom border-end border-5">${this.status}</h3>
            </div>
        </article>
        `;
    }
    render(){
        characterContainer.innerHTML = this.build();
    }
};