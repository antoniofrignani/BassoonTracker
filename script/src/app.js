var App = (function(){
    var me = {};

    me.init = function(){
        EventBus.on(EVENT.command,function(event,command){
            switch (command){
                case COMMAND.newFile:
                    Tracker.new();
                    break;
                case COMMAND.openFile:
                    UI.mainPanel.setView("diskop");
                    break;
                case COMMAND.saveFile:
                    UI.mainPanel.setView("diskop");
                    break;
                case COMMAND.clearTrack:
                    Tracker.clearTrack();
                    break;
                case COMMAND.clearPattern:
                    Tracker.clearPattern();
                    break;
                case COMMAND.clearInstruments:
                    Tracker.clearInstruments();
                    break;
                case COMMAND.showMain:
                    UI.mainPanel.setView("main");
                    break;
                case COMMAND.showTop:
                    UI.mainPanel.setView("resetTop");
                    break;
                case COMMAND.showOptions:
                    if (UI.mainPanel.getCurrentView() == "options"){
                        UI.mainPanel.setView("resetTop");
                    }else{
                        UI.mainPanel.setView("options");
                    }
                    break;
                case COMMAND.showFileOperations:
                    if (UI.mainPanel.getCurrentView() == "diskop"){
                        UI.mainPanel.setView("main");
                    }else{
                        UI.mainPanel.setView("diskop");
                    }
                    break;
                case COMMAND.showSampleEditor:
                    if (UI.mainPanel.getCurrentView() == "sample"){
                        UI.mainPanel.setView("resetBottom");
                    }else{
                        UI.mainPanel.setView("sample");
                    }
                    break;
                case COMMAND.togglePiano:
                    UI.mainPanel.togglePiano();
                    break;
                case COMMAND.showAbout:
                    var dialog = UI.modalDialog();
                    dialog.setProperties({
                        width: UI.mainPanel.width,
                        height: UI.mainPanel.height,
                        top: 0,
                        left: 0,
                        ok: true
                    });
                    dialog.onClick = dialog.close;

                    var version = typeof versionNumber == "undefined" ? "dev" : versionNumber;
                    var build = typeof buildNumber == "undefined" ? new Date().getTime() : buildNumber;
                    dialog.setText("Bassoontracker//Old School 4-channel Amiga mod tracker/in plain javascript//copyright 2007 by Steffest//version " + build + "//Fork me on Github!");

                    UI.setModalElement(dialog);
                    break;
                case COMMAND.showHelp:
                    window.open("http://www.stef.be/bassoontracker/docs/");
                    break;
            }
        });
    };

    me.doCommand = function(command){
        EventBus.trigger(EVENT.command,command);
    };

    return me;
})();