const shows = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location:"San Francisco, CA",
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location:"San Francisco, CA",
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location:"San Francisco, CA",
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location:"San Francisco, CA",
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location:"San Francisco, CA",
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location:"San Francisco, CA",
    },
];

console.table(shows);

function createShowRow(show) {
    const showRow = document.createElement('tr');
    showRow.classList.add('show-row');


    const dateCell = document.createElement('td');
    dateCell.classList.add('show-row__date');
    dateCell.textContent = show.date;
    const venueCell = document.createElement('td');
    venueCell.classList.add('show-row__venue');
    venueCell.textContent = show.venue;
    const locationCell = document.createElement('td');
    locationCell.classList.add('show-row__location');
    locationCell.textContent = show.location;


    const buyTicketsCell = document.createElement('td');
    buyTicketsCell.classList.add('show-row__button-cell');
    const buyTicketsButton = document.createElement('button');
    buyTicketsButton.classList.add('show-row__buy-tickets');
    buyTicketsButton.textContent = 'Buy Tickets';
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

    return showRow;
}


function renderShowsTable() {
    const showsTable = document.getElementById('shows-table');


    showsTable.innerHTML = '';

    shows.forEach(function(show) {
        const showRow = createShowRow(show);
        showsTable.appendChild(showRow);
    });
}

document.addEventListener('DOMContentLoaded', renderShowsTable);