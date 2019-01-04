function Timer() {
    this.intervalList = [];
}

Timer.prototype.set = function(id, start, end, _callbackSuccess, _callbackError) {
    var hour = moment.duration(moment(new Date(end)).diff(moment(new Date(start))));

    // start and end initialize
    end = moment(new Date(start)).add(hour, 'h');

    var days, hours, minutes, seconds;
    var interval = setInterval(function() {
        if(moment(new Date()).isBefore(end)) {
            var second = moment(end).diff(moment(new Date()), 's');
            var duration = moment.duration(second, 's');

            // generate days -> hours -> minutes -> seconds
            if(duration.days() == 0) {
                days = [0, 0];
            } else if(String(duration.days()).length == 1) {
                days = [0, duration.days()];
            } else {
                var daysArray = String(duration.days()).split('');
                days = [daysArray[0], daysArray[1]];
            }
            // console.log(days);
            if(duration.hours() == 0) {
                hours = [0, 0];
            } else if(String(duration.hours()).length == 1) {
                hours = [0, duration.hours()];
            } else {
                var hoursArray = String(duration.hours()).split('');
                hours = [hoursArray[0], hoursArray[1]];
            }
            // console.log(hours);
            if(duration.minutes() == 0) {
                minutes = [0, 0];
            } else if(String(duration.minutes()).length == 1) {
                minutes = [0, duration.minutes()];
            } else {
                var minutesArray = String(duration.minutes()).split('');
                minutes = [minutesArray[0], minutesArray[1]];
            }
            // console.log(minutes);
            if(duration.seconds() == 0) {
                seconds = [0, 0];
            } else if(String(duration.seconds()).length == 1) {
                seconds = [0, duration.seconds()];
            } else {
                var secondsArray = String(duration.seconds()).split('');
                seconds = [secondsArray[0], secondsArray[1]];
            }
            // console.log(seconds);

            var scope = document.querySelector('#' + id);
            scope.querySelector('.jcounter__days-1').innerText = days[0];
            scope.querySelector('.jcounter__days-2').innerText = days[1];
            scope.querySelector('.jcounter__hours-1').innerText = hours[0];
            scope.querySelector('.jcounter__hours-2').innerText = hours[1];
            scope.querySelector('.jcounter__minutes-1').innerText = minutes[0];
            scope.querySelector('.jcounter__minutes-2').innerText = minutes[1];
            scope.querySelector('.jcounter__seconds-1').innerText = seconds[0];
            scope.querySelector('.jcounter__seconds-2').innerText = seconds[1];
            if(_callbackSuccess) {
                _callbackSuccess(days, hours, minutes, seconds);
            }
        } else {
            var scope = document.querySelector('#' + id);
            if(_callbackError) {
                _callbackError();
            }
            clearInterval(this.interval);
            scope.querySelector('.jcounter__days-1').innerText = 0;
            scope.querySelector('.jcounter__days-2').innerText = 0;
            scope.querySelector('.jcounter__hours-1').innerText = 0;
            scope.querySelector('.jcounter__hours-2').innerText = 0;
            scope.querySelector('.jcounter__minutes-1').innerText = 0;
            scope.querySelector('.jcounter__minutes-2').innerText = 0;
            scope.querySelector('.jcounter__seconds-1').innerText = 0;
            scope.querySelector('.jcounter__seconds-2').innerText = 0;
        }
    }, 1000);

    this.intervalList.push(interval);
}

Timer.prototype.clear = function() {
    this.intervalList.forEach(function(interval) {
        clearInterval(interval);
        $('.jcounter__days-1').text('');
        $('.jcounter__days-2').text('');
        $('.jcounter__hours-1').text('');
        $('.jcounter__hours-2').text('');
        $('.jcounter__minutes-1').text('');
        $('.jcounter__minutes-2').text('');
        $('.jcounter__seconds-1').text('');
        $('.jcounter__seconds-2').text('');
    });
};