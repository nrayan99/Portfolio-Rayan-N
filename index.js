let observer = new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=> {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('visible')
        }

    })
}, {
    threshold: 0.2
});

let targets = document.querySelectorAll('.part');
targets.forEach(target=>
    {
        observer.observe(target)
    })
