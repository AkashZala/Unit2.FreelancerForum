const container = document.querySelector('.container');
const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism",
    "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const jobs = ["Gardener", "Writer", "Teacher", "Programmer", "Driver"];
let prices = 0;


function randomFreelancer() {
    const nameIdx = Math.floor(Math.random() * names.length);
    const jobIdx = Math.floor(Math.random() * jobs.length);
    let prices = Math.floor(Math.random() * 75 + 25);
    const freeLancer = {
        name: names[nameIdx],
        job: jobs[jobIdx],
        price: prices
    };
    return freeLancer;
}

const freeLancers = [
    randomFreelancer(),
    randomFreelancer(),
    randomFreelancer(),
];

function render() {
    const html = freeLancers.map((worker) => {
        return `<tr>
                <td>${worker.name}</td>
                <td>${worker.job}</td>
                <td>$${worker.price}</td></tr>
                `;
    });
    container.innerHTML = `<tr><th>Name</th><th>Occupation</th><th>Price</th></tr>` + html.join('');
}


const i = setInterval(() => {
    const addListing = randomFreelancer();
    freeLancers.push(addListing);
    render();
    if (freeLancers.length === 5) {
        clearInterval(i);
    }
}, 2000);




render();