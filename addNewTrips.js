const newTripButton = document.getElementById('newTripButton')
const addNewTripContainer = document.getElementById('addNewTripContainer')
const TripsContainer = document.getElementById('TripsContainer')
const contentContainerTitle = document.getElementById('contentContainerTitle')
const newTripContainer = document.getElementById('newTripContainer')

const sideBarTrips = document.getElementById('sideBarTrips')
const sideBarHome = document.getElementById('sideBarHome')
const sideBarNewTrip = document.getElementById('sideBarNewTrip')
const sideBarAccount = document.getElementById('sideBarAccount')

const viewTripContainer = document.getElementById('viewTripContainer')

newTripButton.addEventListener('click', function(){
    TripsContainer.style.display = 'none'
    contentContainerTitle.textContent = 'New Trip'
    newTripContainer.style.display = 'block'
    sideBarTrips.classList.remove('currentTab')
    sideBarNewTrip.classList.add('currentTab')
})

sideBarTrips.addEventListener('click', function(){
    resetSideBar()
    sideBarTrips.classList.add('currentTab')
    TripsContainer.style.display = 'flex'
    contentContainerTitle.textContent = 'Trips'
})
sideBarHome.addEventListener('click', function(){
  resetSideBar()
  sideBarHome.classList.add('currentTab')
  contentContainerTitle.textContent = 'Home'
})
sideBarNewTrip.addEventListener('click', function(){
  resetSideBar()
  sideBarNewTrip.classList.add('currentTab')
  newTripContainer.style.display = 'block'
  contentContainerTitle.textContent = 'New Trip'
})
sideBarAccount.addEventListener('click', function(){
  resetSideBar()
  sideBarAccount.classList.add('currentTab')
  contentContainerTitle.textContent = 'Account'
})

function resetSideBar(){
    sideBarHome.classList.remove('currentTab')
    sideBarTrips.classList.remove('currentTab')
    sideBarNewTrip.classList.remove('currentTab')
    sideBarAccount.classList.remove('currentTab')

    TripsContainer.style.display = 'none'
    newTripContainer.style.display = 'none'
    viewTripContainer.style.display = 'none'
}

document.getElementById('addTripbutton').addEventListener('click', function () {
    // Get input values
    const tripName = document.getElementById('tripName').value;
    const locationInput = document.getElementById('locationInput').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const notesInput = document.getElementById('notesInput').value;

    // Validate input values
    if (tripName && locationInput && startDate && endDate) {
      createTrip()
      alert('Trip added successfully!');
      clearInputFields()
      backToTrips()
      sideBarNewTrip.classList.remove('currentTab')
      sideBarTrips.classList.add('currentTab')
      contentContainerTitle.textContent = 'Trips'
    } else {
      alert('Please fill in all required fields.');
    }
});

function clearInputFields(){
    tripName.value = ''
    locationInput.value = ''
    startDate.value = ''
    endDate.value = ''
    notesInput.value = ''
}

function backToTrips(){
    newTripContainer.style.display = 'none'
    TripsContainer.style.display = 'flex'
}



function createTrip() {
  const tripName = document.getElementById('tripName').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const locationInput = document.getElementById('locationInput').value;
  const notesInput = document.getElementById('notesInput').value;

  const center1 = document.createElement('div')
  center1.className = 'center1';
  const center2 = document.createElement('div')
  center2.className = 'center1';
  const center3 = document.createElement('div')
  center3.className = 'center1';
  const center4 = document.createElement('div')
  center4.className = 'center1';

  const trip = document.createElement('div');
  trip.className = 'trip dp';

  const tripNameDiv = document.createElement('div');
  tripNameDiv.className = 'tripName fs4 f3 grey mt3';
  tripNameDiv.textContent = tripName;

  const startDateDiv = document.createElement('div')
  startDateDiv.className = 'mt2 startDate'
  const startDateText = new Date(startDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  startDateDiv.textContent = 'Start: ' + startDateText;

  const endDateDiv = document.createElement('div')
  endDateDiv.className = 'endDate'
  const endDateText = new Date(endDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  endDateDiv.textContent = 'End: ' + endDateText;

  const clickToViewDiv = document.createElement('div')
  clickToViewDiv.className = 'grey fs2 f1 mt3'
  clickToViewDiv.textContent = '(Click to view location and notes)'

  const locationInputDiv = document.createElement('div')
  locationInputDiv.style.opacity = '0'
  locationInputDiv.className = 'location'
  locationInputDiv.textContent = locationInput;

  const notesInputDiv = document.createElement('div')
  notesInputDiv.style.opacity = '0'
  notesInputDiv.className = 'notes'
  notesInputDiv.textContent = notesInput;
  
  // Append the tripNameDiv to the trip, not the other way around
  center1.appendChild(tripNameDiv)
  trip.appendChild(center1);

  center2.appendChild(startDateDiv)
  trip.appendChild(center2)

  center3.appendChild(endDateDiv)
  trip.appendChild(center3)

  center4.appendChild(clickToViewDiv)
  trip.appendChild(center4)

  trip.appendChild(locationInputDiv)

  trip.appendChild(notesInputDiv)

  // Assuming that TripsContainer is a valid variable in your scope
  TripsContainer.insertBefore(trip, addNewTripContainer);

  trip.addEventListener('click', function(){
    const viewTripContainer = document.getElementById('viewTripContainer');
    const viewStartDate = document.getElementById('viewStartDate');
    const viewEndDate = document.getElementById('viewEndDate')
    const viewLocation = document.getElementById('viewLocation')
    const viewNotes = document.getElementById('viewNotes')

    const clickedTripBox = trip.closest('.trip');
    sideBarTrips.classList.remove('currentTab');
    TripsContainer.style.display = 'none';
    viewTripContainer.style.display = 'block';
    
    const tripNameText = clickedTripBox.querySelector('.tripName').textContent;
    contentContainerTitle.textContent = tripNameText;

    const startDateText = clickedTripBox.querySelector('.startDate').textContent;
    viewStartDate.textContent = startDateText;

    const endDateText = clickedTripBox.querySelector('.endDate').textContent;
    viewEndDate.textContent = endDateText;

    const viewLocationText = clickedTripBox.querySelector('.location').textContent;
    viewLocation.textContent = viewLocationText;

    const viewNotesText = clickedTripBox.querySelector('.notes').textContent;
    viewNotes.textContent = viewNotesText;
  })
}
