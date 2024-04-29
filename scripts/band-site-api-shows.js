

class BandSiteApi {
    constructor(apiKey){
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = apiKey;
    }

    async getShows(){
        const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
        return response.data;
    }
}

const showApi = new BandSiteApi("2491824a-7c92-4e17-a0c9-5cef7929cf54");
console.log(showApi);

const showTableRowElement = document.querySelector("#shows-table tbody");

async function getShowsAndAppendToDom(){
const shows = await showApi.getShows();
console.log(shows);

showTableRowElement.innerText = '';

shows.forEach(function(show){
    console.log(show);

    const formattedDate = new Date(show.date).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        timeZone: 'GMT'
    });

    const showRow = document.createElement('tr');
    showRow.classList.add("show-row");

    const dateCell = document.createElement('td');
    dateCell.innerText = formattedDate;
    dateCell.classList.add('show-row__date');
    

    const venueCell = document.createElement('td');
    venueCell.innerText = show.place;
    venueCell.classList.add('show-row__venue');

    const locationCell = document.createElement('td');
    locationCell.innerText = show.location;
    locationCell.classList.add('show-row__location');

    const buyTicketsCell = document.createElement('td');
    buyTicketsCell.classList.add('show-row__button-cell');

    const buyTicketsButton = document.createElement('button');
    buyTicketsButton.classList.add('show-row__buy-tickets');
    buyTicketsButton.innerText = 'Buy Tickets';
    buyTicketsCell.appendChild(buyTicketsButton);


    showRow.appendChild(dateCell);
    showRow.appendChild(venueCell);
    showRow.appendChild(locationCell);
    showRow.appendChild(buyTicketsCell);

    showRow.addEventListener('mouseenter', function() {
        showRow.classList.add('hovered');
    });

    showRow.addEventListener('mouseleave', function() {
        showRow.classList.remove('hovered');
    });

    showRow.addEventListener('click', function() {

        document.querySelectorAll('.show-row').forEach(function(row) {
            row.classList.remove('selected');
        });

        showRow.classList.add('selected');
    });

    showTableRowElement.appendChild(showRow);

    });
}

getShowsAndAppendToDom();