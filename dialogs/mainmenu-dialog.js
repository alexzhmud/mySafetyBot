var builder = require('botbuilder');


// Main menu dailog
module.exports =
[    
    function (session) {

        var options = [
            session.localizer.gettext(session.preferredLocale(), "lost"),
            session.localizer.gettext(session.preferredLocale(), "found"),
            session.localizer.gettext(session.preferredLocale(), "services"),
            session.localizer.gettext(session.preferredLocale(), "faq"),
            session.localizer.gettext(session.preferredLocale(), "about"),
            session.localizer.gettext(session.preferredLocale(), "exit"),
        ];

        builder.Prompts.choice(session, "questionAreaDescription", options);
    },

    function (session, result) {
            if (result.response.entity) {
             switch (result.response.entity) {
                case session.localizer.gettext(session.preferredLocale(), "lost"):
                    session.beginDialog('lost');
                    break;
                case session.localizer.gettext(session.preferredLocale(), "found"):
                    session.beginDialog('found');
                    break;
                case session.localizer.gettext(session.preferredLocale(), "services"):
                    session.beginDialog('services');
                break;    
                case session.localizer.gettext(session.preferredLocale(), "faq"):
                    session.beginDialog('faq');
                break;
                case session.localizer.gettext(session.preferredLocale(), "about"):
                    session.beginDialog('about');
                break;
                case session.localizer.gettext(session.preferredLocale(), "exit"):
                    session.beginDialog('exit');
                break;    
                //default: 
                //    session.send("I do not understand." + result.response.entity + "  --  " + session.localizer.gettext(session.preferredLocale(), "lost"));
            }
        }
    }
]