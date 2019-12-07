function newLink(name, url){
    document.getElementById("home").innerHTML += "<form method='GET' action='"+url+"'>  <button>"+name+"</button>    </form>";
  }
  newLink("Docs", "https://www.docs.google.com/");
  newLink("Slides", "https://docs.google.com/presentation/u/0/?tgif=c")
  newLink("Forms", "https://docs.google.com/forms/u/0/?tgif=d");
  newLink("Drive", "https://www.drive.google.com")