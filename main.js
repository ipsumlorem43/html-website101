
<script>
    var form = document.getElementById("my-form");
    var status = document.getElementById(status);

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks, We will get back to you shortly!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem."
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem."
      });
    }
    form.addEventListener("submit", handleSubmit)
</script>
