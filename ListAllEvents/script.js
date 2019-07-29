'use strict';

$(document).ready(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyATYu978iePLj1N1J2PtZpBhf960M_LR_A",
        authDomain: "eventviewer-3b058.firebaseapp.com",
        databaseURL: "https://eventviewer-3b058.firebaseio.com",
        projectId: "eventviewer-3b058",
        storageBucket: "",
        messagingSenderId: "169300432456",
        appId: "1:169300432456:web:b5e40c778b69209e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    /* const messageRef = firebase.database().ref("Events");
    const firestoreRef = firebase.firestore(); */

    const eventsData = [];
    const form = document.querySelector('#add-event-form');
    const tbody = document.querySelector('#dataTable > tbody');
    const addBtn = document.getElementById('addEvent');


    //Render Events

    function renderEvents(doc) {

        let tr = document.createElement('tr');
        tr.setAttribute('data-id', doc.id);
        tbody.appendChild(tr);

        let eventName = document.createElement('td');
        eventName.innerHTML = doc.data().EventName;
        tr.appendChild(eventName);

        let eventDate = document.createElement('td');
        eventDate.innerHTML = doc.data().EventDate;
        tr.appendChild(eventDate);

        let eventDescription = document.createElement('td');
        eventDescription.innerHTML = doc.data().EventDescription;
        tr.appendChild(eventDescription);

        let editEvent = document.createElement('td');
        editEvent.innerHTML = '✎';
        tr.appendChild(editEvent);

        let deleteEvent = document.createElement('td');
        deleteEvent.innerHTML = 'X';
        tr.appendChild(deleteEvent);

        //Delete event

        deleteEvent.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.parentElement.getAttribute('data-id');
            if (confirm("Are you sure if you like to DELETE!")) {
                db.collection('Events').doc(id).delete();
                tr.remove();
            }
        });

        //Edit Event 

        editEvent.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure if you like to EDIT!')) {
                let id = e.target.parentElement.getAttribute('data-id');
                console.log(id);
                let editName = document.getElementById('edtName');
                let editDate = document.getElementById('edtDate');
                let editDescription = document.getElementById('edtDescription');
                let editID = document.getElementById('edtId');

                editID.value = id;
                //console.log(editID.value);
                editName.value = doc.data().EventName;
                editDate.value = doc.data().EventDate;
                editDescription.value = doc.data().EventDescription;

                document.getElementById("editEvent").addEventListener('click', (e) => {
                    e.preventDefault();

                    let updateId = editID.value;
                    console.log(updateId);

                    db.collection('Events').doc("updateId").set({
                        // Id: document.getElementById('edtId').value,                        
                        EventDate: document.getElementById('edtDate').value,
                        EventDescription: document.getElementById('edtDescription').value,
                        EventName: document.getElementById('edtName').value,
                    });

                });

            }
        });
    }

    //Get event

    db.collection('Events').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderEvents(doc);
            eventsData.push(doc.data());
        })
        // console.log(eventsData);

    })


    //Save event

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        db.collection('Events').add({
            EventName: form.eventName.value,
            EventDate: form.eventDate.value,
            EventDescription: form.eventDescription.value
        });
        form.eventName.value = '';
        form.eventDate.value = '';
        form.eventDescription.value = '';


    })

});