var bio = {
    "name": "AbdulMajeed",
    "role": "Developer",
    "contacts": {
        "mobile": "+966561113041",
        "email": "aaaalrashd@gmail.com",
        "github": "github.com/aaaalrashd",
        "twitter": "aaaalrashd",
        "location": "Riyadh, At Taawun, SA"
    },
    "welcomeMessage": "Hello to My Resume",
    "skills": ["Development", "analysis", "JavaScript", "RationalRose", "Microsoft Word"],
    "biopic": "images/fry.jpg"
};


////////////////////////////////

var education = {
    "schools": [{
        "name": "Imam University",
        "location": "Riyadh, SA",
        "degree": "Bachelor",
        "majors": ["Information Systems"],
        "dates": "SEP, 2012 to JUN, 2017"
        // url: string (optional)
    }],
    onlineCourses: [{
        "title": "frontend-nanodegree",
        "school": "Udacity",
        "dates": "NOV, 2017",
        "url": "https://udacity.com/"

    }]
};

///////////////////////////

var work = {
    "jobs": [{
        "employer": "Trinee",
        "title": "Business Analyst",
        "location": "Riyadh, Imam University, SA",
        "dates": "MAY/2016 to AUG/2016",
        "description": "worked with two persons to design and analysis the documents and services to make it in  Electronic Way, (Website)"
    }]
};

////////////////////////////////

var projects = {

    "projects": [{
        "title": "Responsive website",
        "dates": "NOV, 2017",
        "description": "Make a site for display for many sizes in a Desktops, Tablets and phones with different screens with a good shape.",
        "images": "images/wb.png"
    }]

};


//////////////////////////////////////////////////

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
//
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
//


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
}

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

/////////////////////////////////////////////////////////////////////////

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        //
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);



            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolmajor);
            $(".education-entry:last").append(formattedSchoolDegree);



            ///////////////////
        }


        //
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle);
                $(".education-entry:last").append(formattedOnlineSchool);
                $(".education-entry:last").append(formattedonlineDates);
                $(".education-entry:last").append(formattedHTMLonlineURL);


            }
        }
    }
};

/////////////////////////////////////////////////////////////////////////
work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        
         for (i = 0; i < work.jobs.length; i++) {
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedworkEmployer + formattedWorkTitle;
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};
/////////
projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);

        for (var project in projects.projects) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%data%", projects.projects[project].title);

            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            ////////////////////////////////////////////////////////////////////////////
            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);
            $(".project-entry:last").append(formattedProjectImage);

        }
    }

};
$("#mapDiv").append(googleMap);
education.display();
work.display();
projects.display();
