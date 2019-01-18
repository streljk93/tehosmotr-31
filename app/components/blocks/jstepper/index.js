(function () {

    // check
    if (!document.querySelector('.jstepper')) return false;

    var stepper = document.querySelector('.jstepper');
    var stepList = stepper.querySelectorAll('.jstep');

    function hideAllContent(stepList) {
        stepList.forEach(function (step) {
            hideContent(step);
        });
    }

    function hideContent(step) {
        var content = step.querySelector('.jstep__content');
        content.classList.add('jstep__content-hide');
    }

    function showContent(step) {
        var content = step.querySelector('.jstep__content');
        content.classList.remove('jstep__content-hide');
    }

    function showImage(step) {
        var image = step.attributes.image.value;
        var img = stepper.querySelector('.jstepper__image img');
        img.src = image;
    }

    stepList.forEach(function (step) {
        step.addEventListener('click', function () {
            hideAllContent(stepList);
            showContent(this);
            showImage(this);
            // console.log(this.attributes.image.value);
        });
    });

})();