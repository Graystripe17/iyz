
    if (Notification.permission == "default") {
        Notification.requestPermission();
    }

    var twenty_minutes = 20 * 60 * 1000;
    var alarm = {
        when: Date.now() + 5000,
        periodInMinutes: 20,
    }
    chrome.alarms.create("eye_alarm", alarm);
    chrome.alarms.onAlarm.addListener(function(alarm) {
        var notification_options = {
            title: "relax",
            message: "remember to rest your eyes"
        }
        if (!Notification) {
            alert("please enable desktop notifications");
            return;
        }
        if (Notification["permission"] !== "granted") {
            Notification.requestPermission().then(function(a) {});
        //   alert(Notification.permission);
        } else {
            var notification = new Notification("iyz", {
                icon: "icon.png",
                body: "rest",
            })
            notification.onclick = function () {
                window.open("https://github.com");
            };
        }
    });
