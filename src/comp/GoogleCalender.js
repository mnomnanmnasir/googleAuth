import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { gapi } from 'gapi-script';

const CalendarComponent = () => {

    // const clientId = "928209376096-euig13evhrr352f9m3cov0t8aq4o4dj7.apps.googleusercontent.com";
    const clientId = "928209376096-giumfldna5ggmfpim0iek1btcj895ssb.apps.googleusercontent.com";
    const apiKey = "AIzaSyBcyi-E1WIfj3gvWVUk6jc4erXAAgw2PFM";
    const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
    const [events, setEvents] = useState([]);

    const initClient = () => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: apiKey,
                clientId: clientId,
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                scope: SCOPES,
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        });
    };

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            listUpcomingEvents();
        }
        else {
            gapi.auth2.getAuthInstance().signIn();
        }
    };

    useEffect(() => {
        initClient();
    }, []);

    const listUpcomingEvents = () => {
        gapi.client.calendar.events.list({
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: 'startTime',
        }).then(response => {
            const events = response.result.items.map(event => ({
                id: event.id,
                title: event.summary,
                start: event.start.date || event.start.dateTime,
                end: event.end.date || event.end.dateTime,
            }));
            setEvents(events);
        });
    };

    return (
        <div style={{ padding: "100px 40px 100px 100px" }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
            />
        </div>
    );
};

export default CalendarComponent;
