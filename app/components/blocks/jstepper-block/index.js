(function () {

    // check
    if (!document.querySelector('.jstepper-block')) return false;

    var stepper = document.querySelector('.jstepper-block');
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
        var image = step.attributes['data-image'].value;
        stepper.attributes.style.value = 'background-image: url(' + image + ')';
    }

    stepList.forEach(function (step) {
        step.addEventListener('click', function () {
            hideAllContent(stepList);
            showContent(this);
            showImage(this);
        });
    });

})();