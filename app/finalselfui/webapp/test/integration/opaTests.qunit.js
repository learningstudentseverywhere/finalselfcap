sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/final/finalselfui/test/integration/FirstJourney',
		'com/final/finalselfui/test/integration/pages/StudentsList',
		'com/final/finalselfui/test/integration/pages/StudentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsList, StudentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/final/finalselfui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentsList: StudentsList,
					onTheStudentsObjectPage: StudentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);