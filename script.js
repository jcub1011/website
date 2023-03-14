function open_resume() {
    // Creates an iframe that contains my resume.
    console.log("Opened resume.")
    
    var wrapper = $("<div id='resume'></div>")
    var close = $("<button onclick='close_resume()'>X</button>")
    var resume = $("<iframe src='My_Resume.pdf'></iframe>");
    wrapper.append(close);
    wrapper.append(resume);
    $("body").prepend(wrapper);
}

function close_resume() {
    // Deletes the resume iframe from the dom.
    $("#resume").remove();
}