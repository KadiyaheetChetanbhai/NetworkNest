import React, { useState, useEffect } from 'react';
import axios from './AxiosInstance';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Snackbar,
  Grid,
  CardActions,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    organizer_name: '',
    contact_email: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('network/Events/');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    await axios.post('network/Events/', formData);
    setSnackbarMessage('Event organized successfully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setFormData({
      organizer_name: '',
      contact_email: '',
      notes: '',
    });
    setSubmitting(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleViewDetails = (event) => {
    alert(`Event Details:\n\nName: ${event.name}\nDate: ${event.date}\nLocation: ${event.location}\nDescription: ${event.description}`);
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(true)}
        style={{ margin: '20px 0' }}
      >
        Organize Event
      </Button>

      <Typography variant="h4" gutterBottom>
        Events
      </Typography>

      <Grid container spacing={2}>
        {events.length === 0 ? (
          <Typography>No events available.</Typography>
        ) : (
          events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.Event_id}>
              <Card elevation={3} style={{ marginBottom: '20px' }}>
                <CardContent>
                  <Typography variant="h5">{event.name}</Typography>
                  <Typography color="textSecondary">Date: {event.date}</Typography>
                  <Typography color="textSecondary">Location: {event.location}</Typography>
                  <Typography variant="body2">{event.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleViewDetails(event)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {showForm && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6">Organize Event</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Organizer Name"
              name="organizer_name"
              value={formData.organizer_name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Contact Email"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </Button>
            <Button
              type="button"
              onClick={() => setShowForm(false)}
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default EventList;
