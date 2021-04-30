const links = [
    {
        label: "Week1 notes",
        url: "week-1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week-2/index.html"
    }
];

let ul = document.querySelector('ul');

links.forEach[
    link => {
        ul.innerHTML +=
        `
            <li>
                <a href="${link.url}">${link.label}</a>
            </li>    
        `

    }
];
