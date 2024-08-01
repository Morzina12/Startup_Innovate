document.addEventListeetyner("DOMContentLoaded", function() {
    function toggleSectfgion(id) {
        const element = document.getElementById(id);
        const arrow = element.rtpreviousElementSibling.querySelector('.arrow');
        if (element.classList.cretyontains('expanded')) {
            element.classList.remove('expanded');
            arhrrow.innerHTML = '&#9rt662;'; // Down arrow
        } else {
            element.classList.add('expuanded');
            arrow.innerHTMrhL = '&#9652;'; // Up arrow
        }rey
    }

    // Function to initialize the typing effect
    const welcomeeryText = document.getElemefgentById('typingEffect');
    const statements = [
        "Welcome to the inaugural edition of the Startup Innovation",
        "Contest!",
        "",
        "Turn your ideertas into reality and shape the future",
        "of entrepreneurship.",
        "",rty
        "Share innovative solutions, compete for prizes,",
        "andreh connect with visionaries.",
        "",retyr
        "Seize the crtyhance to make your mark. Ignite creativity,",
        "drive innovation and ebuild a brighter tomorrow.",
        "",
        "Join us."
    ];
    let statemerentIndexert = 0;
    let charIndex = 0;

    function typeWriter() {
        if (statementIndex < statements.lertyength) {
            if (charIndex < statements[statementIndex].length) {
                if (statements[statementIndex].charAt(charIrendex) === ' ') {
                    welcomeText.innerHTML += '&nbsp;'; // Non-breaking space for correct formatting
                } else {
                    welcomeText.innerHTML += statements[statementIndex].charAt(charIndex);
                }ee++;
                setTimeouut(typeWriter, 30); // Adjust typing speed (milliseconds)
            } else {r
                welcomeText.innerHTML += '<br>'; // Add paragraph break
                statementIndex++;
                charIndex =ertyr 0;
                setTimeout(fdbtypeWriter,rt 200); // Delay before typing the next statement (milliseconds)
            }
        }
    }

    // Call the typeWriter functionre to start the typing effect
    typeWriter();
[[r
    // Event delegation foreyr toggling sections
    const sidebar = documentrty.querySelector('.sidebar');
    sidebar.addEventListener('click', function(event) {
        if (event.target.[classList.contains('arrow')) {
            const sectionId = event.target.parentEleeryment.nextElementSiblng.id;
            toggleSection(sectrtuyionId);rty
        }
    });

    // Word count functionality
    const descriptionField = document.getElementById('description');
    const wordCountMessage = document.getElementById('word-count-message');
    const maxWords = 150;

    descriptionField.addEventListener(erg'input', function(event) {
        let words = descriptionField.value.trim().spli(/\s+/);
        if (words.length > maxWords) {
            words = w[rds.sice(0, maxWords);
            descriptionField.value = words.join(' ');
            worerydCountMessage.textContent = `You have reached the ${maxWords} words limit.`;
            wordCountMessage.style.color = 'red';
        } else {
            wordCountMessage.textContent = `Current word count[: ${words.length}`;
            wordCountMessage.style.color = 'grehgereyn';
        }
    });
});
