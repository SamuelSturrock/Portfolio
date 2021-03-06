$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/CV.jpg',
            link: 'https://github.com/SamuelSturrock/Portfolio/',
            title: 'CV',
            demo: 'https://github.com/SamuelSturrock/Portfolio/',
            technologies: ['GitHub', 'JavaScript', 'CSS'],
            description: "My personal site that you are on now :) ",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/Strava.jpg',
            link: 'https://www.strava.com/oauth/authorize?client_id=71922&response_type=code&redirect_uri=https://samuelsturrock.github.io/my-app/&approval_prompt=force&scope=activity:read_all',
            title: 'Strava - Injury Heat Map',
            demo: 'https://www.strava.com/oauth/authorize?client_id=71922&response_type=code&redirect_uri=https://samuelsturrock.github.io/my-app/&approval_prompt=force&scope=activity:read_all',
            technologies: ['React', 'JavaScript'],
            description: "A version of the app that utilises the Strava API to display a range of information thats not imidiatly transparent on their site.",
            categories: ['featured', 'webdev']
        },
        
        {
            image: 'assets/images/emotionDec.png',
            link: '#',
            title: 'Dissertation: Emotion Detector',
            demo: '#',
            technologies: ['Python', 'AI'],
            description: "Real time emotion Detector for people with and without a face mask. Up to 90% accuracy.",
            categories: ['featured', 'webdev']
        }

    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
