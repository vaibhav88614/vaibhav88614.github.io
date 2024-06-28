//This is the scripts file containinmg all the scripts
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your feedback!');
            this.reset();
        } else {
            alert('There was a problem with your submission.');
        }
    });
});
