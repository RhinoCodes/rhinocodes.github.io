function newLink(name, url){
    document.getElementById("home").innerHTML += "<form method='GET' action='"+url+"'>  <button>"+name+"</button>    </form>";
  }
  function search(){
    document.getElementById("last").innerHTML += "<input type='text' id='link_id'><input type='button' id='link' value='Search' onClick='javascript:goTo()'></input>";
  }

  function goTo(){

        input = document.getElementById('link_id').value;

        location.href = 'https://www.google.com/search?safe=active&source=hp&ei=qBgiXYDCFtDVtAay2ovIAg&q='+input+'&oq='+input+'p&gs_l=psy-ab.3..0l10.4800.5462..5922...0.0..1.236.818.5j2j1......0....1..gws-wiz.....0..0i131j0i3.wh3C02wdyCM&safe=active'
    }

    function br(){
      document.getElementById("last").innerHTML += "<br>";
    }

    function lastLink(name, url){
      document.getElementById("last").innerHTML += "<form method='GET' action='"+url+"'>  <button>"+name+"</button>    </form>";
    }

  newLink("Docs", "https://www.docs.google.com/");
  newLink("Slides", "https://docs.google.com/presentation/u/0/?tgif=c");
  newLink("Forms", "https://docs.google.com/forms/u/0/?tgif=d");
  newLink("Drive", "https://www.drive.google.com");
  newLink("Classroom", "https://classroom.google.com/u/0/h");
  newLink("Hangouts", "https://hangouts.google.com/?safe=active");
  br();
  newLink("TrollBucks", "/trollbucks/")
